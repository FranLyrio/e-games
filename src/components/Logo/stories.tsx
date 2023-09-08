import type { Meta, StoryObj } from '@storybook/react'

import Logo from '.'

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Logo',
}

export default meta

type Story = StoryObj<typeof Logo>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Logo />,
}
