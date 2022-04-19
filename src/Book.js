import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello");
  };
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <div className="book">
      <img src={img} alt=" " />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>
        referance example
      </button>
      <button
        type="button"
        onClick={() => {
          complexExample(author);
        }}
      >
        More complex example
      </button>
    </div>
  );
};
export default Book;
