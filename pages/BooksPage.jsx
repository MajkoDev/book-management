//? displaying books in react-table

import JSONDATA from "../data/MOCK_DATA.json";

const BooksPage = () => {
  return (
    <div className="book-page">
      <div className="searching">
        <h1>Books</h1>
        <input type="text" placeholder="Anna Karenina" />
      </div>

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
    </div>
  );
};

export default BooksPage;
