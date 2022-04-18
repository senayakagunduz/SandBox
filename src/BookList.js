import React from "react";
import Book from "./Book";
import "./index.css";

const firstBook = {
  title: "It's Not Easy Being a Bunny",
  author: "Marilyn Sandler",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51al5c5C52L._SX365_BO1,204,203,200_.jpg"
};
const secondBook = {
  title: "I Love You to the Moon and Back",
  author: " Amelia Hepworth",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
};
function BookList() {
  return (
    <section className="bookList">
      {" "}
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>lorem10jgdjgdjgjdkgjkdjgdjkgjdkjgkdjkhdkhdkhdhdkddkjdkhkd</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

export default BookList;
