import _ from 'lodash'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SearchInput } from './shared/ui/SearchInput/SearchInput'
import './App.scss'
import { SearchSubjectChanger } from './shared/ui/SearchSubjectChanger/SearchSubjectChanger'
import { SearchBar } from './shared/ui/SearchBar/SearchBar'

const SearchPage = () => {
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

const App = () => {
	return (
		<main className="App">
			<SearchPage />
		</main>
	)
}

export const Router = () => {
	return (
		<RouterProvider
			router={createBrowserRouter([
				{
					path: '/',
					element: <App />,
				},
				{
					path: '/create_user',
					element,
				},
			])}
		/>
	)
}
