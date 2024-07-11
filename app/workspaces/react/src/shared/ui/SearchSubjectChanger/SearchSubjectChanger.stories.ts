import type { Meta, StoryObj } from '@storybook/react'
import { SearchSubjectChanger } from './SearchSubjectChanger'

const meta: Meta<typeof SearchSubjectChanger> = {
	component: SearchSubjectChanger,
}

export default meta

export const Primary: StoryObj<typeof SearchSubjectChanger> = {
	args: {
		primary: true,
		label: 'Button',
	},
}
