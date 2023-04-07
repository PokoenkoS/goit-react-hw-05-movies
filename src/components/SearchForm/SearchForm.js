import React from "react";
import { useState } from "react";
import {Form, Input, Button} from './SearchForm.styled';

const SearchForm =({onSubmit})=> {
const [value, setValue] = useState('');

const handleChange = e => setValue(e.currentTarget.value.toLowerCase());
   
const handleSubmit = e => {
    e.preventDefault();
    if(value.trim() ===""){
        return alert('Enter the name of the movie')
    }
    onSubmit(value)
   }

  return (

  <Form onSubmit={handleSubmit} >
  <Input    
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      onChange={handleChange}
      value={value}
    />
    <Button type="submit" >
      <span >Search</span>
    </Button>
  </Form>

        )
    }


export default SearchForm