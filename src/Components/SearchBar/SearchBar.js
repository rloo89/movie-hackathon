import "./SearchBar.scss";
import React from 'react';

const SearchBox = ({ value, setValue, onSearch}) => {
	const onClick = (e) => {
		e.preventDefault();
		onSearch();
	}

	return (
		<form className="searchbar">
			<input
				className='searchbar__input'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			<button onClick={onClick}>Search</button>
		</form>
	);
};

export default SearchBox;