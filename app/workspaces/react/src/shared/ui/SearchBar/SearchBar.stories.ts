import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './SearchBar'

const meta: Meta<typeof SearchBar> = {
	component: SearchBar,
}

export default meta

export const Primary: StoryObj<typeof SearchBar> = {
	args: {
		// primary: true,
		// label: 'Button',
	},
}
