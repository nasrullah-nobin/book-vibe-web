import React, { use } from "react";

import BookCard from "../../../Components/Shared/BookCard/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className="my-12">
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {books.map((book,ind) => (
          <BookCard key={ind} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
