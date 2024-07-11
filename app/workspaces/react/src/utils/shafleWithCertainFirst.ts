import _ from 'lodash'

export const shafleWithCertainFirst =
	<T extends string>(first: T) =>
	(list: T[]) => {
		// const certain = list.filter((p) => p === first)[0]

		return _.sortBy(list, (s) => (s === first ? 0 : 1))
	}
