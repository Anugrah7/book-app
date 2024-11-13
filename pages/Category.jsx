// Category.jsx
import React, { useEffect, useState } from 'react';
import { getBookAPI } from '../src/assets/Services/allAPI';

const Category = () => {
  const [booksByGenre, setBooksByGenre] = useState({});

  useEffect(() => {
    const fetchAndGroupBooks = async () => {
      try {
        const response = await getBookAPI();
        const books = response.data;

        // Group books by genre
        const groupedBooks = books.reduce((acc, book) => {
          const { genre } = book;
          if (!acc[genre]) acc[genre] = [];
          acc[genre].push(book);
          return acc;
        }, {});
        
        setBooksByGenre(groupedBooks);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchAndGroupBooks();
  }, []);

  return (
    <div className="category-container">
      {Object.keys(booksByGenre).map((genre) => (
        <div key={genre} className="genre-section">
          <h2>{genre}</h2>
          <div className="cat-list">
            {booksByGenre[genre].map((book) => (
          
                <div key={book.id} className="cat-item">
                  <img src={book.imageUrl} alt="" />
                  <h6>{book.title}</h6>
                  <p>Author: {book.author}</p>
                </div>
            
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
