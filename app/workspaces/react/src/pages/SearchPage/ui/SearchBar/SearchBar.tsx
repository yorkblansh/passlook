import './SearchBar.scss'

export interface SearchBar {
	children: JSX.Element[]
}

export const SearchBar = (props: SearchBar) => {
	return <div className="search-bar">{props.children}</div>
}
