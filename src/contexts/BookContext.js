//? CODE BELOW USES useReducer INSTEAD OF useState
import React, { createContext, useReducer, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
      localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  
  return (
    <BookContext.Provider value={{ books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;


//? CODE BELOW USES useState INSTEAD OF useReducer
// import React, { createContext, useState } from "react";
// import { v1 as uuidv1 } from "uuid";

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, setBooks] = useState([
//     { title: "name of the wind", author: "patric rothfuss", id: 1 },
//     { title: "the final empire", author: "brandon sanderson", id: 2 },
//   ]);
//   const addBook = (title, author) => {
//     //? setBooks([...books, {title: title, author: author, id: uuidv1()}])
//     setBooks([...books, { title, author, id: uuidv1() }]);
//   };
//   const removeBook = (id) => {
//     setBooks(books.filter((book) => book.id !== id));
//   };
//   return (
//     <BookContext.Provider value={{ books, addBook, removeBook }}>
//       {props.children}
//     </BookContext.Provider>
//   );
// };

// export default BookContextProvider;
