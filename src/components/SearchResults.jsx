import React from 'react'
import { Link } from 'react-router-dom';

const SearchResults = ({results}) => {
    if(results.length === 0) return null;
  return (
    <div className='search-results'>
      {results.map((book)=> (
        <Link to ={`/book/${book.id}`} key = {book.id} className='search-result-item'>
            <h4>{book.title}</h4>
            <p>Author: {book.author}</p>
            <p>Genre:{book.genre}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults
