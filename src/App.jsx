import React, { useState } from "react";
import "./App.css";

const initialBooks = [
  { id: 1, title: "Title 1", description: "description 1" }, // 0
  { id: 2, title: "Title 2", description: "description 2" }, // 1
  { id: 5, title: "Title 4", description: "description 4" }, // 2
  { id: 4, title: "Title 5", description: "description 5" }, // 4
  { id: 3, title: "Title 3", description: "description 3" }, // 3
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);

  const addBook = (book) => {
    console.log(book);
    setBooks((prevState) => [...prevState, book]);
  };

  return (
    <>
      <div className="parent">
        {books.map((book) => {
          return (
            <div className="child" key={book.id}>
              <h1>{book.title}</h1>
              <p>{book.description}</p>
            </div>
          );
        })}
      </div>
      <button
        className="btn"
        onClick={() =>
          addBook({
            id: books.length + 1,
            title: `Title ${books[books.length - 1].id + 1}`,
            description: `description ${books[books.length - 1].id + 1}`,
          })
        }
      >
        Add
      </button>
    </>
  );
};

export default App;
