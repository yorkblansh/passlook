import { SearchBar } from './ui/SearchBar/SearchBar'
import { SearchInput } from './ui/SearchInput/SearchInput'
import { SearchSubjectChanger } from './ui/SearchSubjectChanger/SearchSubjectChanger'

export const SearchPage = () => {
	return (
		<div>
			ПОИСК
			{/* <div>по паролю</div> */}
			<SearchBar>
				<SearchInput />
				<SearchSubjectChanger
					subjects={[
						'по паролю',
						'по email',
						'по ФИО',
						'по должности',
						'по отделу',
					]}
					default="по email"
				/>
			</SearchBar>
		</div>
	)
}
