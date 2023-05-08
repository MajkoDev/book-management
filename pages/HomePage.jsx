//? introduction to application with explanation

import { useEffect } from "react";
import useBookStore from "../store/useBookStore";

const HomePage = () => {
  const books = useBookStore((state) => state.books);
  const fetchBooks = useBookStore((state) => state.fetchBooks);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  console.log(books);

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
        <h1 style={{ margin: "40px " }}>Home Page</h1>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px black solid",
              margin: "0.9rem",
              padding: "0.5rem",
              minWidth: "400px",
            }}
          >
            <div>
              <h3>{book.title}</h3>
            </div>
            <h4>{book.author}</h4>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default HomePage;
