import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();
  const Location=useLocation();

  // ISSUE FOUND AT 100420250131
  const bookId=Location.pathname.split("/")[2];

  console.log(Location.pathname.split("/")[2]);

  console.log(Location)

  const handleChange = (e) => {
    setBook(prev => ({
      ...prev,                                  // It is used for updating the from previous state to the current state 
      [e.target.name]: e.target.value
    }));
  };

  /*
State Initialization: The book state is initialized as an object with properties corresponding to each form field.​

Single Change Handler: The handleChange function updates the specific property of the book state that matches the name attribute of the input field that triggered the change.​

Form Submission: The handleSubmit function prevents the default form submission behavior and can be used to handle the form data, such as sending it to an API or updating other parts of the application state.

  */

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(bookId);
      await axios.put("http://localhost:8800/books/"+bookId,book);
      navigate("/")
    } catch (err) {
      console.log("Error adding book:", err);
    }
  };

  return (
    <div className="form">
      <h1>Update new Book</h1>
      <input type="text" placeholder="title" name="title"  onChange={handleChange} />
      <input type="text" placeholder="desc" name="desc"  onChange={handleChange} />
      <input type="number" placeholder="price" name="price"  onChange={handleChange} />
      <input type="text" placeholder="cover" name="cover"  onChange={handleChange} />
      <button onClick={handleClick}>Update</button>
  </div>
  );
};

export default Update;
