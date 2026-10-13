export type MarkdownPaneFile = {
  /** The file's path as it was asked for. */
  path: string
  /** Its text as last read; empty when it could not be read. */
  text: string
  /** Why it could not be read, when it could not. */
  error?: string
}

declare module 'claude-code' {
  interface PluginState {
    'markdown-pane': {
      /** The file the pane shows; null before any was opened. */
      shown: MarkdownPaneFile | null
      /** Per Markdown file path, the tool_use_id of the last Write or Edit to it this session. */
      lastWrite: Record<string, string>
    }
  }
}
