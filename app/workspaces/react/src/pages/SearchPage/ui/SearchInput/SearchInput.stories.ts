import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'

const meta: Meta<typeof SearchInput> = {
	component: SearchInput,
}

export default meta

export const Primary: StoryObj<typeof SearchInput> = {
	args: {
		primary: true,
		label: 'Button',
	},
}
