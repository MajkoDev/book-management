import React, { useState } from "react";
import useBookStore from "../store/useBookStore";

const PersonalItem = ({ personal }) => {
  const [description, setDescription] = useState(false);

  const deleteBook = useBookStore((state) => state.deleteBook);

  return (
    <div className="container">
      <div
        key={personal.id}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column-reverse", marginBottom: '3px' }}>
          <h4 className="personal-title">{personal.title}</h4>
          <h3 className="personal-author">{personal.author}</h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          <button
            className="personal-btn"
            onClick={() => deleteBook(personal.id)}
          >
            Remove
          </button>
          <button
            className="personal-btn"
            onClick={() => setDescription(!description)}
          >
            {" "}
            Information
          </button>
        </div>
      </div>
      {description && <div className="info">{personal.description}</div>}
    </div>
  );
};

export default PersonalItem;
