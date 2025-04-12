import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books",book)
      navigate("/")
    } catch (err) {
      console.log("Error adding book:", err);
    }
  };

  return (
    <div className="form">
      <h1>Add new Book</h1>
      <input type="text" placeholder="title" name="title"  onChange={handleChange} />
      <input type="text" placeholder="desc" name="desc"  onChange={handleChange} />
      <input type="number" placeholder="price" name="price"  onChange={handleChange} />
      <input type="text" placeholder="cover" name="cover"  onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
  </div>
  );
};
export default Add;