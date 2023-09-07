type TitleProps = {
  children: string
}

export default function Title({ children }: TitleProps) {
  return <h1>{children}</h1>
}
