//? introduction to application with explanation

import { useEffect } from "react";
import useBookStore from "../store/useBookStore";

const BooksPage = () => {
  const books = useBookStore((state) => state.books);
  const fetchBooks = useBookStore((state) => state.fetchBooks);
  const addBook = useBookStore((state) => state.addBook);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);


  return (
    <div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "40px " }}>Book Page</h1>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px black solid",
              margin: "0.9rem",
              padding: "0.5rem",
              minWidth: "500px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
            </div>
            <button
              style={{
                border: "2px solid black",
                borderRadius: "10px",
                padding: "6px",
                fontSize: "14px",
                fontWeight: "600",
              }}
              onClick={() => addBook(book)}
            >
              Add to Profile
            </button>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default BooksPage;
