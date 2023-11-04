import { renderWithTheme, screen } from '../../utils/tests/renderWithTheme'

import Heading from '.'

describe('<Heading />', () => {
  it('Should render Heading component by default', () => {
    renderWithTheme(<Heading>Heading default</Heading>)

    expect(
      screen.getByRole('heading', { name: /heading default/i })
    ).toBeInTheDocument()
  })

  it('Should render Heading by each variant', () => {
    renderWithTheme(
      <>
        <Heading variant="heading1">Heading1</Heading>
        <Heading variant="heading2">Heading2</Heading>
      </>
    )

    expect(screen.getByRole('heading', { name: /heading1/i })).toHaveStyle({
      'font-size': '1.125rem',
    })

    expect(screen.getByRole('heading', { name: /heading2/i })).toHaveStyle({
      'font-size': '1.375rem',
    })
  })
})
