import React from "react";

function Book() {
  const title = "It's Not Easy Being a Bunny";
  const author = "Marilyn Sandler";
  const img =
    "https://images-na.ssl-images-amazon.com/images/I/51al5c5C52L._SX365_BO1,204,203,200_.jpg";
  return (
    <div className="book">
      <img src={img} alt=" " />
      <h2>{title}</h2>
      <h3
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h3>
    </div>
  );
}
export default Book;
