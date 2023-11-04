import styled from '@emotion/styled'
import { Theme } from '@emotion/react'

import { HeadingProps as Props } from '.'

type HeadingProps = Pick<Props, 'variant'>

const headingModifiers = {
  heading1: (theme: Theme) => ({
    ...theme.font.heading1,
  }),
  heading2: (theme: Theme) => ({
    ...theme.font.heading2,
  }),
}

export const Heading = styled.p<HeadingProps>(({ theme, variant }) => ({
  ...headingModifiers[variant!](theme),
}))
