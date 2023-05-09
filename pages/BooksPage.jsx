//? displaying books in react-table

import { useEffect, useState } from "react";
import JSONDATA from "../data/MOCK_DATA.json";
import axios from "axios";
import BookItem from "../components/BookItem";

const BooksPage = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  // asynch fetching data with axios
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios
          .get("http://localhost:3000/books")
          .then((res) => setBooks(res.data))
          .finally(() => setLoading(false));
      } catch (err) {
        console.log("There has been error somewhere.");
      }
    };
    setTimeout(getBooks, 1500);
  }, []);

  return (
    <div className="book-page">
      <div className="searching">
        <h1>Books</h1>
        <input type="text" placeholder="Anna Karenina" />
      </div>

      {/*
        <div className="displaying">
                {JSONDATA.map((book) => (
                <div className="book-item" key={book.id}>
                    <div className="book-title">
                    <div>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                    </div>
                    <h5>{book.price} €</h5>
                    </div>
                    <p>{book.description}</p>
                </div>
                ))}
            </div>
         */}

      {loading ? (
        <h2 className="loading">Loading</h2>
      ) : (
        <>
          <div className="displaying">
            {books.map((book) => (
              <BookItem book={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BooksPage;
