import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/renderWithTheme'

import Text from '.'

describe('<Text />', () => {
  it('Should render the Text component by default', () => {
    renderWithTheme(<Text>Text default</Text>)

    expect(screen.getByText(/text default/i)).toHaveStyle({
      'font-size': '1rem',
      'font-weight': 400,
      color: '#f5f5f5',
      'font-family': "'Inter',sans-serif",
    })
  })

  it('Should render the Text component with secondary color', () => {
    renderWithTheme(<Text color="secondary">With secondary color</Text>)

    expect(screen.getByText(/with secondary color/i)).toHaveStyle({
      color: '#f5f5f599',
    })
  })

  it('Should render the Text component with body1 variant', () => {
    renderWithTheme(<Text variant="body1">With body1 variant</Text>)

    expect(screen.getByText(/with body1 variant/i)).toHaveStyle({
      'font-size': '0.5625rem',
    })
  })

  it('Should render the Text component with body2 variant', () => {
    renderWithTheme(<Text variant="body2">With body2 variant</Text>)

    expect(screen.getByText(/with body2 variant/i)).toHaveStyle({
      'font-size': '0.6875rem',
    })
  })

  it('Should render the Text component with body3 variant', () => {
    renderWithTheme(<Text variant="body3">With body3 variant</Text>)

    expect(screen.getByText(/with body3 variant/i)).toHaveStyle({
      'font-size': '0.75rem',
    })
  })

  it('Should render the Text component with body4 variant', () => {
    renderWithTheme(<Text variant="body4">With body4 variant</Text>)

    expect(screen.getByText(/with body4 variant/i)).toHaveStyle({
      'font-size': '0.875rem',
    })
  })
})
