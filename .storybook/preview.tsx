import type { Preview, StoryFn } from '@storybook/react'
import { Global, ThemeProvider, useTheme } from '@emotion/react'

import { GlobalStyle } from '@styles/global'

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

const withTheme = (Story: StoryFn) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withTheme]

export default preview
