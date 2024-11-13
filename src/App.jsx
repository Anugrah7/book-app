// App.jsx
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Front from '../pages/Front';
import Add from './components/Add';
import { getBookAPI } from './assets/Services/allAPI';
import Category from '../pages/Category';
import SearchResults from './components/SearchResults';


function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [searchResults,setSearchResults] =useState([]);

  useEffect(() => {
    
    const fetchBooks = async () => {
      const response = await getBookAPI();
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]); 
  };

  const handleSearchChnge = (term) =>{
    setSearchTerm(term);
    if(term){
      const lowerCaseTerm = term.toLowerCase();
      const filteredResults = books.filter(
        (book)=>
          book.title.toLowerCase().includes(lowerCaseTerm)||book.author.toLowerCase().includes(lowerCaseTerm)||book.genre.toLowerCase().includes(lowerCaseTerm)
      );
      setSearchResults(filteredResults);
    }else{
      setSearchResults([]);
    }
  }; 

  return (
    <>
      <Header onSearchChange={handleSearchChnge} />
      <Routes>
        <Route path="/" element={<Front books={books} />} />
        <Route path="/add" element={<Add onAdd={handleAddBook} />} />
        <Route path="/category" element={<Category books={books} />} />

      </Routes>

      {searchTerm && <SearchResults results= {searchResults} />}
    </>
  );
}

export default App;
