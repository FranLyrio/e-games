import { renderWithTheme, screen } from '../../utils/tests/renderWithTheme'

import Heading from '.'

describe('<Heading />', () => {
  it('Should render Heading component by default', () => {
    renderWithTheme(<Heading>Heading default</Heading>)

    expect(
      screen.getByRole('heading', { name: /heading default/i })
    ).toHaveStyle({
      'font-size': '1.125rem',
      'font-family': "'Inter',sans-serif",
      'font-weight': 400,
    })
  })

  it('Should render Heading component by default', () => {
    renderWithTheme(<Heading variant="heading2">Heading2</Heading>)

    expect(screen.getByRole('heading', { name: /heading2/i })).toHaveStyle({
      'font-family': "'Inter',sans-serif",
    })
  })
})
