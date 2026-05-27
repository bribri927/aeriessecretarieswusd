# WUSD Aeries Secretary Hub

A district-grounded AI assistant for school office professionals, powered by Claude AI and deployed on Netlify.

---

## Project Structure

```
wusd-secretary-hub/
├── index.html                   # Main app (all tabs, UI, logic)
├── netlify.toml                 # Netlify build + security config
├── netlify/
│   └── functions/
│       └── ask.js               # Serverless function (Claude API proxy)
└── README.md
```

---

## How to Deploy on Netlify

### Step 1 — Push to GitHub

Create a new GitHub repository and push this entire folder:

```bash
git init
git add .
git commit -m "Initial WUSD Secretary Hub"
git remote add origin https://github.com/YOUR_USERNAME/wusd-secretary-hub.git
git push -u origin main
```

### Step 2 — Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **"Add new site" > "Import an existing project"**.
3. Choose **GitHub** and select your repository.
4. Netlify auto-detects `netlify.toml`. Click **Deploy site**.

### Step 3 — Add Your Anthropic API Key

1. In Netlify, go to **Site Settings > Environment Variables**.
2. Click **Add a variable**.
3. Set:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** your Anthropic API key (starts with `sk-ant-...`)
4. Click **Save**.
5. Go to **Deploys** and click **Trigger deploy > Deploy site**.

That's it! Your site is live and your API key is secure on the server.

---

## How It Works

- The browser sends questions to `/.netlify/functions/ask` (your own backend).
- The Netlify function adds your API key server-side and calls the Anthropic Claude API.
- Your API key is **never exposed** in the browser or source code.
- If the Netlify function is unreachable, the app falls back to a local keyword-based search of the built-in WUSD knowledge base.

---

## Customizing the Knowledge Base

Open `index.html` and find the `knowledgeBase` array near the top of the `<script>` section. Each entry follows this structure:

```js
{
  id: "unique-id",
  title: "Procedure Title",
  category: "Enrollment",           // shown on card
  roles: ["Secretary","Registrar"], // for role filter
  keywords: ["enroll","new student"],
  content: "Short description.",
  aeriesSteps: [
    "Step 1 with <strong>bold</strong> click paths",
    "Step 2...",
  ],
  wusdProcess: "District policy text.",
  forms: ["Form Name 1", "Form Name 2"],
  legalCompliance: "CA Ed Code reference.",
  lastUpdated: "2026-05-27"
}
```

Add as many entries as needed. The AI assistant also uses this knowledge base to ground its Claude-powered answers.

---

## Local Development (Optional)

Install the Netlify CLI for local testing with functions:

```bash
npm install -g netlify-cli
netlify dev
```

Then open `http://localhost:8888` in your browser.
