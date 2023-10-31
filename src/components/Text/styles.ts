import styled from '@emotion/styled'

import { TextProps } from '.'
import { Theme } from '@emotion/react'

type WrapperProps = Omit<TextProps, 'children'>

const textModifiers = {
  color: {
    main: (theme: Theme) => ({
      color: theme.color.text.main,
    }),
    secondary: (theme: Theme) => ({
      color: theme.color.text.secondary,
    }),
  },
  variant: {
    body1: (theme: Theme) => ({
      ...theme.font.body1,
    }),
    body2: (theme: Theme) => ({
      ...theme.font.body2,
    }),
    body3: (theme: Theme) => ({
      ...theme.font.body3,
    }),
    body4: (theme: Theme) => ({
      ...theme.font.body4,
    }),
    body5: (theme: Theme) => ({
      ...theme.font.body5,
    }),
  },
}

export const Wrapper = styled.p<WrapperProps>(({ theme, variant, color }) => ({
  color: textModifiers.color[color!](theme).color,
  ...textModifiers.variant[variant!](theme),
}))
