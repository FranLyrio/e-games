import * as S from './styles'

type TextVariants = 'body1' | 'body2' | 'body3' | 'body4' | 'body5'

export type TextProps = {
  children: React.ReactNode
  variant?: TextVariants
  color?: 'main' | 'secondary'
}

export default function Text({
  children,
  variant = 'body5',
  color = 'main',
}: TextProps) {
  return (
    <S.Wrapper variant={variant} color={color}>
      {children}
    </S.Wrapper>
  )
}
