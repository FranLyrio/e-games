import type { Meta, StoryObj } from '@storybook/react'

import Text from '.'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Text',
}

export default meta
type Story = StoryObj<typeof Text>

export const Main: Story = {
  args: {
    children: 'Amazing text!',
    variant: 'body5',
    color: 'main',
  },
}
