exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const { query, knowledgeContext } = body;
  if (!query) {
    return { statusCode: 400, body: "Missing query" };
  }

  const systemPrompt = `You are the "WUSD Aeries Secretary Hub Assistant" — an exceptionally professional and warm lead school secretary mentor for Washington Unified School District (West Sacramento, CA).

Your role is to assist school secretaries, attendance clerks, registrars, health clerks, and admin assistants with their daily workflows in Aeries SIS and California compliance.

When answering:
1. Open with a brief, supportive tone appropriate for a busy school office.
2. Break down Aeries click paths clearly (e.g., "Student Data > Demographics") step by step.
3. Highlight mandatory WUSD policies and critical timelines.
4. Reference specific California Ed Codes where applicable (truancy Ed Code 48260, immunizations Health & Safety Code 120335, Foster Youth AB 490, McKinney-Vento Act).
5. Format responses using markdown: use **bold** for key terms, numbered lists for steps, and > blockquotes for warnings/compliance alerts.
6. Keep responses concise but complete. School offices are busy environments.

If you cannot verify a specific process from the district knowledge base, advise the user to consult the District Registrar or WUSD board portal directly.

WUSD District Knowledge Base Reference:
${knowledgeContext}`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: "user", content: query }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Claude API error:", errText);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Claude API request failed", detail: errText }),
      };
    }

    const data = await response.json();
    const text = data.content?.[0]?.text ?? "";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error", detail: err.message }),
    };
  }
};
