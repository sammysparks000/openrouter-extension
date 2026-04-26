// src/nimbalyst.d.ts
declare interface CompletionMessage {
  role: string;
  content: string;
}

declare interface CompletionProvider {
  name: string;
  complete(messages: CompletionMessage[]): Promise<string>;
}

declare interface SlashCommandHandler {
  description: string;
  execute(args: string): Promise<string> | string;
}

declare interface PanelConfig {
  render(): import("react").ReactElement;
}

declare interface ExtensionContext {
  registerPanel(id: string, config: PanelConfig): void;
  registerSlashCommand(name: string, handler: SlashCommandHandler): void;
  registerCompletionProvider(id: string, provider: CompletionProvider): void;
}