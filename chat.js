// Warm Machines — proxy sécurisé vers l'API Anthropic (aucune dépendance).
exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const { system, messages } = JSON.parse(event.body || "{}");
    if (!process.env.ANTHROPIC_API_KEY) {
      return { statusCode: 500, body: JSON.stringify({ error: "ANTHROPIC_API_KEY not configured." }) };
    }
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL || "claude-sonnet-4-5-20250929",
        max_tokens: 400,
        temperature: 0.7,
        system: system,
        messages: messages
      })
    });
    const data = await resp.json();
    if (data.error) {
      return { statusCode: 502, body: JSON.stringify({ error: data.error.message || "API error" }) };
    }
    const text = (data.content || [])
      .filter(function (b) { return b.type === "text"; })
      .map(function (b) { return b.text; })
      .join("\n");
    return { statusCode: 200, headers: { "content-type": "application/json" }, body: JSON.stringify({ text: text }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
