/* Warm Machines — shared chatbot UI.
   IMPORTANT: this stylesheet is identical for all 8 conditions.
   The experimental manipulation is the LANGUAGE only; the visual
   interface must be held constant across cells. Do not fork per group. */

:root {
  --wm-ink: #1f2430;
  --wm-muted: #6b7280;
  --wm-accent: #2e5a88;
  --wm-bot-bg: #eef2f6;
  --wm-user-bg: #2e5a88;
  --wm-user-ink: #ffffff;
  --wm-border: #d7dde5;
  --wm-bg: #ffffff;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  background: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--wm-ink);
}

#wm-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 600px;
  border: 1px solid var(--wm-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--wm-bg);
}

#wm-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f7f9fb;
  border-bottom: 1px solid var(--wm-border);
}
.wm-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: #34a853; flex: 0 0 auto;
}
.wm-title { font-weight: 600; font-size: 15px; }
.wm-sub { color: var(--wm-muted); font-size: 12px; margin-left: 4px; }

#wm-messages {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.wm-msg {
  max-width: 80%;
  padding: 10px 13px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.45;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.wm-msg.bot {
  align-self: flex-start;
  background: var(--wm-bot-bg);
  border-bottom-left-radius: 4px;
}
.wm-msg.user {
  align-self: flex-end;
  background: var(--wm-user-bg);
  color: var(--wm-user-ink);
  border-bottom-right-radius: 4px;
}
.wm-typing {
  align-self: flex-start;
  color: var(--wm-muted);
  font-size: 13px;
  font-style: italic;
  padding: 4px 6px;
}

#wm-banner {
  margin: 0 16px 10px;
  padding: 10px 13px;
  border-radius: 10px;
  background: #e7f4ea;
  border: 1px solid #bfe0c7;
  color: #1e5631;
  font-size: 13px;
  line-height: 1.4;
}
.wm-hidden { display: none; }

#wm-form {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid var(--wm-border);
  background: #fafbfc;
}
#wm-input {
  flex: 1 1 auto;
  resize: none;
  border: 1px solid var(--wm-border);
  border-radius: 10px;
  padding: 10px 12px;
  font: inherit;
  font-size: 14px;
  max-height: 120px;
  outline: none;
}
#wm-input:focus { border-color: var(--wm-accent); }
#wm-send {
  flex: 0 0 auto;
  border: none;
  border-radius: 10px;
  padding: 0 18px;
  background: var(--wm-accent);
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}
#wm-send:disabled { opacity: .5; cursor: default; }
