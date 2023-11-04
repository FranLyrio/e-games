import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/renderWithTheme'

import Text from '.'

describe('<Text />', () => {
  it('Should render the Text component by default', () => {
    renderWithTheme(<Text>Text default</Text>)

    expect(screen.getByText(/text default/i)).toBeInTheDocument()
  })

  it('Should render the Text component by each color property', () => {
    renderWithTheme(
      <>
        <Text color="main">Main color</Text>
        <Text color="secondary">Secondary color</Text>
      </>
    )

    expect(screen.getByText(/main color/i)).toHaveStyle({
      color: '#f5f5f5',
    })

    expect(screen.getByText(/secondary color/i)).toHaveStyle({
      color: '#f5f5f599',
    })
  })

  it('Should render the Text component by each variant', () => {
    renderWithTheme(
      <>
        <Text variant="body1">With body1 variant</Text>
        <Text variant="body2">With body2 variant</Text>
        <Text variant="body3">With body3 variant</Text>
        <Text variant="body4">With body4 variant</Text>
        <Text variant="body5">With body5 variant</Text>
      </>
    )

    expect(screen.getByText(/with body1 variant/i)).toHaveStyle({
      'font-size': '0.5625rem',
    })

    expect(screen.getByText(/with body2 variant/i)).toHaveStyle({
      'font-size': '0.6875rem',
    })

    expect(screen.getByText(/with body3 variant/i)).toHaveStyle({
      'font-size': '0.75rem',
    })

    expect(screen.getByText(/with body4 variant/i)).toHaveStyle({
      'font-size': '0.875rem',
    })

    expect(screen.getByText(/with body5 variant/i)).toHaveStyle({
      'font-size': '1rem',
    })
  })
})
