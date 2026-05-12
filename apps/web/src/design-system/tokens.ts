export const tokens = {
  palette: {
    primary: { main: '#344CB7', contrastText: '#FFFFFF' },
    secondary: { main: '#FFD717', contrastText: '#FFFFFF' },
    error: { main: '#D32F2F' },
    background: { default: 'var(--background)', paper: 'var(--background)' },
    text: { primary: 'var(--foreground)', secondary: 'rgba(0,0,0,0.6)' },
  },
  typography: {
    fontFamily: 'Sarabun, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    fontFamilyMono:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace',
  },
  spacing: 8,
  shape: { borderRadius: 4 },
} as const;

export type Tokens = typeof tokens;
export default tokens;
