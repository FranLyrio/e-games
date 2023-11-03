import { RenderOptions, render } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'

import theme from '@styles/theme'

type ThemeWrapperProps = { children: React.ReactNode }

const ThemeWrapper = ({ children }: ThemeWrapperProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: RenderOptions
) => render(ui, { wrapper: ThemeWrapper, ...options })

export * from '@testing-library/react'
