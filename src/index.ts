// No SDK import needed - Nimbalyst injects the context
import { createElement } from "react";
import SettingsPanel from "./components/SettingsPanel";

export const config = {
  apiKey: "",
  model: "google/gemini-2.0-flash-001",
  baseUrl: "https://openrouter.ai/api/v1",
};

export function activate(context: ExtensionContext) {
  context.registerPanel("openrouter-settings", {
    render: () => createElement(SettingsPanel, { config }),
  });

  context.registerSlashCommand("openrouter", {
    description: "Switch active OpenRouter model or check connection status",
    async execute(args: string) {
      const trimmed = args.trim();
      if (!trimmed || trimmed === "status") {
        if (!config.apiKey) return "⚠️ OpenRouter: No API key set. Open the OpenRouter panel in the sidebar.";
        return `✅ OpenRouter active\n**Model:** \`${config.model}\``;
      }
      if (trimmed.startsWith("model ")) {
        config.model = trimmed.replace("model ", "").trim();
        return `✅ Model switched to \`${config.model}\``;
      }
      return `**Commands:**\n- \`/openrouter status\`\n- \`/openrouter model <id>\``;
    },
  });

  context.registerCompletionProvider("openrouter", {
    name: "OpenRouter",
    async complete(messages: CompletionMessage[]) {
      if (!config.apiKey) throw new Error("OpenRouter API key not set. Configure it in the sidebar panel.");
      const res = await fetch(`${config.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://nimbalyst.com",
          "X-Title": "Nimbalyst OpenRouter Extension",
        },
        body: JSON.stringify({ model: config.model, messages, stream: false }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(`OpenRouter error ${res.status}: ${(err as any)?.error?.message ?? res.statusText}`);
      }
      const data = await res.json();
      return data.choices?.[0]?.message?.content ?? "";
    },
  });
}

export function deactivate() {}