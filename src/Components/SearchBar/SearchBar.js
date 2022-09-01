import "./SearchBar.scss";
import React from 'react';

const SearchBox = (props) => {
	return (
		<form className="searchbar">
			<input
				className='searchbar__input'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			<button>Search</button>
		</form>
	);
};

export default SearchBox;