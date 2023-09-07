import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('Should render title component and its children', () => {
    render(<Title>Hello, Test!</Title>)
    expect(
      screen.getByRole('heading', { name: /hello, test/i })
    ).toBeInTheDocument()
  })
})
