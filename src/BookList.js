import React from "react";
import Book from "./Book";
import "./index.css";
import { data } from "./books";

function BookList() {
  return (
    <section className="bookList">
      {data.map((book, id) => {
        const { img, title, author } = book;
        return (
          <div>
            <Book key={id} img={img} title={title} author={author}></Book>
          </div>
        );
      })}
    </section>
  );
}

export default BookList;
