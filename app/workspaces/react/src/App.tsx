import _ from 'lodash'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { CreateInfoPage } from './pages/CreatePage/CreateInfoPage'

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
					element: <CreateInfoPage />,
				},
			])}
		/>
	)
}
