import "./SearchBar.scss";
import React from 'react';
import {useState} from "react";
import Modal from "../Modal/Modal";


const SearchBox = ({ value, setValue, onSearch}) => {
	const [modal, setModal] = useState(false);
	const  [search, setSearch] = useState("");



	const handleSubmit = (event) => {
		event.preventDefault();
	
		if (!event.target.search.value) {
			console.log("empty")
			 return setModal(true)
		} else 	(onSearch());
		
	}

	return (
		<div className="searchbar">
		<form   onSubmit={handleSubmit}className="searchbar__form">
			<input
			
				className='searchbar__input'
				name="search"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			<button className="searchbar__btn" type="submit" >Search</button>
		</form>
		<Modal open ={modal} onClose={() => setModal(false)}/>
		{/* {<modal && Modal />} */}
		</div>
	);
};

export default SearchBox;