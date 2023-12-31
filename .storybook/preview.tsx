import type { Preview, StoryFn } from '@storybook/react'
import { Global, ThemeProvider } from '@emotion/react'

import theme from '@styles/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

const withTheme = (Story: StoryFn) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
)

export const decorators = [withTheme]

export default preview
