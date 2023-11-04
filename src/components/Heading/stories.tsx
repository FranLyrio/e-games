import type { Meta, StoryObj } from '@storybook/react'

import Heading from '.'

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Heading',
}

export default meta
type Story = StoryObj<typeof Heading>

export const Main: Story = {
  args: {
    children: 'Amazing heading!',
  },
}
