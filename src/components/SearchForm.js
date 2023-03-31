import React from "react";
import { useState } from "react";


const SearchForm =({onSubmit})=> {
const [value, setValue] = useState('');

const handleChange = e => setValue(e.currentTarget.value);
   
const handleSubmit = e => {
    e.preventDefault();
    if(value.trim() ===""){
        return alert('Введите название картинки')
    }
    onSubmit(value)
    setValue('')
  }

  return (
<header className="Searchbar">
  <form onSubmit={handleSubmit} className="SearchForm">
    

    <input
      className="SearchForm-input "
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
    />
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label ">Search</span>
    </button>
  </form>
</header>
        )
    }


export default SearchForm