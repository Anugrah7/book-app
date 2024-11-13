import React, { useState, useEffect } from 'react';
import { saveBookAPI, getBookAPI, deleteBookAPI } from '../assets/Services/allAPI';
import '../App.css';

const Add = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [books, setBooks] = useState([]); // State to hold book list

  // Fetch books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBookAPI();
        setBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };
    fetchBooks();
  }, []);

  // Handle form submission
  const handleAddBook = async (e) => {
    e.preventDefault();

    if (!title || !author || !genre || !description || !imageUrl) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const newBook = { title, author, genre, description, imageUrl };

    try {
      await saveBookAPI(newBook); // Save the book to the server
      setBooks((prevBooks) => [...prevBooks, newBook]); // Update local state
      setTitle(''); setAuthor(''); setGenre(''); setDescription(''); setImageUrl(''); // Clear form fields
      alert('Book added successfully!');
    } catch (error) {
      console.error('Failed to add book:', error);
      alert('Error adding book. Please try again.');
    }
  };

  // Handle book deletion
  const handleDeleteBook = async (id) => {
    try {
      await deleteBookAPI(id); 
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      alert('Book deleted successfully!');
    } catch (error) {
      console.error('Failed to delete book:', error);
      alert('Error deleting book. Please try again.');
    }
  };

  return (
    <div className="add-book">
      <div className='add-book-form'>
        <h2>Add a New Book</h2>
        <form onSubmit={handleAddBook}>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-item">
              <div>
                <img src={book.imageUrl} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.genre}</p>
                <p>{book.author}</p>
                <button className='delete-button' onClick={() => handleDeleteBook(book.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{color:"red"}}>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Add;
