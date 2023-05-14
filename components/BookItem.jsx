import { useState } from "react";

const BookItem = ({ book }) => {
  const [description, setDescription] = useState(false);

  function showDescription() {
    setDescription(!description);
  }
  return (
    <div className="book-item" key={book.id}>
      <div className="book-title">
        <div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
        </div>
        <h5>{book.price} €</h5>
      </div>
      {description && <p>{book.description}</p>}

      <div className="book-info">
        {description && (
          <>
            <p className="genre">{book.genre}</p>
            <h6>number of page is {book.pages}</h6>
          </>
        )}

        <button onClick={showDescription}>
          {description ? <b>Hide </b> : <b>Show </b>}
          more informations
        </button>
      </div>
    </div>
  );
};

export default BookItem;
