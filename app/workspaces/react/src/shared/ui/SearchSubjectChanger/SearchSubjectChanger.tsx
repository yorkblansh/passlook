import { useState } from 'react'
import './SearchSubjectChanger.scss'
import { shafleWithCertainFirst } from '../../../utils/shafleWithCertainFirst'
import { pipe } from 'fp-ts/es6/function'

export interface SearchSubjectChnagerProps<S extends string> {
	subjects: S[]
	default: S
}

export const SearchSubjectChanger = <S extends string>(
	props: SearchSubjectChnagerProps<S>,
) => {
	const [isSelection, setIsSelection] = useState(false)
	const [selected, setSelected] = useState(props.default)
	const [subjects, setSubjects] = useState(
		pipe(props.subjects, shafleWithCertainFirst(selected)),
	)

	const expandAllSelectors = () => {
		setIsSelection(true)
	}

	const selectOneSubject = (selected: S) => {
		setIsSelection(false)
		setSelected(selected)
		setSubjects(pipe(subjects, shafleWithCertainFirst(selected)))
	}

	const allSelectors = subjects.map((subj) => {
		return (
			<button
				className={selected === subj ? 'selected' : ''}
				onClick={() => selectOneSubject(subj)}
			>
				{subj}
			</button>
		)
	})

	return (
		<div className="search-subject-changer">
			{isSelection ? (
				allSelectors
			) : (
				<button className="selected" onClick={expandAllSelectors}>
					{selected}
				</button>
			)}
		</div>
	)
}
