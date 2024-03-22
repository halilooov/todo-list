import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '.'

const meta: Meta<typeof Text> = {
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'Text',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#f0f0f0',
    $sx: {},
  },
}
