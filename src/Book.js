import React from "react";

function Book({ img, title, author, children }) {
  //const { img, title, author } = props;
  return (
    <div className="book">
      <img src={img} alt=" " />
      <h2>{title}</h2>
      <h3
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h3>
      {children}
    </div>
  );
}
export default Book;
