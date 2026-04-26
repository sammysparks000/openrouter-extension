# OpenRouter Extension for Nimbalyst

Use any AI model (DeepSeek, Gemini, Llama, Qwen, etc.) inside Nimbalyst
via OpenRouter — no Claude or OpenAI subscription required.

## Setup

1. Get a free API key at https://openrouter.ai/keys
2. Build the extension: run `npm install && npm run build` in this folder
3. In Nimbalyst: Settings > Advanced > Enable Extension Dev Tools
4. Run `/new-extension` in chat, then ask Claude to `extension_install` from this path
5. Open the OpenRouter panel in the sidebar, paste your API key, pick a model, Save

## Slash Commands

| Command | What it does |
|---|---|
| `/openrouter status` | Show active model + key status |
| `/openrouter model <id>` | Switch model (e.g. `deepseek/deepseek-r1`) |

## Free / Cheap Models to Try

- `google/gemini-2.0-flash-001` — generous free tier
- `deepseek/deepseek-r1` — strong reasoning, very affordable
- `meta-llama/llama-4-maverick` — fast open-source option
- `anthropic/claude-3.5-haiku` — cheapest Claude option if you pay-as-you-go