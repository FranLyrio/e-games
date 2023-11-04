import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'heading1' | 'heading2'
}

export default function Heading({
  children,
  as = 'h2',
  variant = 'heading1',
}: HeadingProps) {
  return (
    <S.Heading as={as} variant={variant}>
      {children}
    </S.Heading>
  )
}
