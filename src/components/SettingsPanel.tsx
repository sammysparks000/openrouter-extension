import React, { useState } from "react";
import "../styles.css";

// Popular OpenRouter models — update freely
const POPULAR_MODELS = [
  { id: "anthropic/claude-3.5-haiku", label: "Claude 3.5 Haiku (fast, cheap)" },
  { id: "anthropic/claude-3.5-sonnet", label: "Claude 3.5 Sonnet" },
  { id: "deepseek/deepseek-r1", label: "DeepSeek R1 (reasoning)" },
  { id: "deepseek/deepseek-chat-v3-5", label: "DeepSeek Chat v3.5" },
  { id: "google/gemini-2.0-flash-001", label: "Gemini 2.0 Flash" },
  { id: "google/gemini-2.5-pro-preview", label: "Gemini 2.5 Pro" },
  { id: "meta-llama/llama-4-maverick", label: "Llama 4 Maverick" },
  { id: "mistralai/mistral-small-3.1-24b-instruct", label: "Mistral Small 3.1" },
  { id: "qwen/qwen3-235b-a22b", label: "Qwen3 235B" },
  { id: "custom", label: "Custom model ID…" },
];

interface Config {
  apiKey: string;
  model: string;
  baseUrl: string;
}

interface Props {
  config: Config;
}

export default function SettingsPanel({ config }: Props) {
  const [apiKey, setApiKey] = useState(config.apiKey);
  const [selectedModel, setSelectedModel] = useState(
    POPULAR_MODELS.find((m) => m.id === config.model) ? config.model : "custom"
  );
  const [customModel, setCustomModel] = useState(
    POPULAR_MODELS.find((m) => m.id === config.model) ? "" : config.model
  );
  const [saved, setSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const activeModel = selectedModel === "custom" ? customModel : selectedModel;

  function handleSave() {
    config.apiKey = apiKey.trim();
    config.model = activeModel.trim();
    setSaved(true);
    setTestResult(null);
    setTimeout(() => setSaved(false), 2000);
  }

  async function handleTest() {
    if (!apiKey.trim()) {
      setTestResult({ ok: false, msg: "Enter your API key first." });
      return;
    }
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch(`${config.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey.trim()}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://nimbalyst.com",
          "X-Title": "Nimbalyst OpenRouter Extension",
        },
        body: JSON.stringify({
          model: activeModel.trim(),
          messages: [{ role: "user", content: "Reply with just: OK" }],
          max_tokens: 5,
        }),
      });
      if (res.ok) {
        setTestResult({ ok: true, msg: `Connected! Model responded successfully.` });
      } else {
        const err = await res.json().catch(() => ({}));
        setTestResult({
          ok: false,
          msg: `Error ${res.status}: ${(err as any)?.error?.message ?? res.statusText}`,
        });
      }
    } catch (e: any) {
      setTestResult({ ok: false, msg: `Network error: ${e.message}` });
    } finally {
      setTesting(false);
    }
  }

  return (
    <div className="or-panel">
      <div className="or-header">
        <span className="or-logo">⚡</span>
        <h2>OpenRouter</h2>
      </div>
      <p className="or-subtext">
        Access 300+ models with one API key.{" "}
        <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer">
          Get a free key →
        </a>
      </p>

      <div className="or-field">
        <label htmlFor="or-apikey">API Key</label>
        <input
          id="or-apikey"
          type="password"
          placeholder="sk-or-v1-..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="or-field">
        <label htmlFor="or-model">Model</label>
        <select
          id="or-model"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          {POPULAR_MODELS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
            </option>
          ))}
        </select>
      </div>

      {selectedModel === "custom" && (
        <div className="or-field">
          <label htmlFor="or-custom-model">Custom Model ID</label>
          <input
            id="or-custom-model"
            type="text"
            placeholder="e.g. deepseek/deepseek-r1"
            value={customModel}
            onChange={(e) => setCustomModel(e.target.value)}
          />
          <span className="or-hint">
            Find model IDs at{" "}
            <a href="https://openrouter.ai/models" target="_blank" rel="noopener noreferrer">
              openrouter.ai/models
            </a>
          </span>
        </div>
      )}

      <div className="or-actions">
        <button className="or-btn or-btn-primary" onClick={handleSave}>
          {saved ? "✓ Saved!" : "Save"}
        </button>
        <button
          className="or-btn or-btn-ghost"
          onClick={handleTest}
          disabled={testing}
        >
          {testing ? "Testing…" : "Test Connection"}
        </button>
      </div>

      {testResult && (
        <div className={`or-result ${testResult.ok ? "or-result-ok" : "or-result-err"}`}>
          {testResult.ok ? "✅" : "❌"} {testResult.msg}
        </div>
      )}

      <div className="or-tip">
        <strong>Tip:</strong> Use <code>/openrouter model &lt;id&gt;</code> in chat to switch
        models on the fly. Use <code>/openrouter status</code> to confirm active config.
      </div>
    </div>
  );
}