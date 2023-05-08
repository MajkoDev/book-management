const BookItem = ({ book }) => {
  return (
    <div className="book-item" key={book.id}>
      <div className="book-title">
        <div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
        </div>
        <h5>{book.price} €</h5>
      </div>
      <p>{book.description}</p>
      <div className="book-info">
        <p className="genre">{book.genre}</p>
        <h6>number of page is {book.pages}</h6>
        <button>Add to Profile</button>
      </div>
    </div>
  );
};

export default BookItem;
