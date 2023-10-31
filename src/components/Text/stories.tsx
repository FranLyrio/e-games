import type { Meta, StoryObj } from '@storybook/react'

import Text from '.'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Text',
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  render: () => <Text>Um texto para testar o text.</Text>,
}

// fazer Text e Heading
