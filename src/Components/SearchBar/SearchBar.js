import "./SearchBar.scss";
import React from 'react';

const SearchBox = ({ value, setValue, onSearch}) => {
	const onClick = (e) => {
		e.preventDefault();
		onSearch();
	}

	return (
		<div className="searchbar">
		<form className="searchbar__form">
			<input
				className='searchbar__input'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			<button className="searchbar__btn" onClick={onClick}>Search</button>
		</form>
		</div>
	);
};

export default SearchBox;