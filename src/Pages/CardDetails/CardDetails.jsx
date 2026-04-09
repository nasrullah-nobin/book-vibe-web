import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Components/Context/BookProvider";


// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const CardDetails = () => {
  const { Id } = useParams();

  const booksData = useLoaderData();
  const book = booksData.find((book) => book.bookId == Id);

const {handleMarksAsReadBook,handleMarksAsWishlist} = useContext(BookContext)
 
  return (
    <div className="card lg:card-side justify-evenly bg-base-100 my-14">
      <figure className="max-w-143.25 p-16 bg-base-300 rounded-2xl">
        <img className="max-w-106.25 max-h-141" src={book.image} alt="Album" />
      </figure>
      <div className="max-w-lg space-y-5">
        <h2 className="card-title text-4xl font-bold">{book.bookName}</h2>
        <p className="text-xl font-medium">{book.author}</p>
        <div className="border-t"></div>
        <p>{book.category}</p>
        <div className="border-t"></div>
        <p>
          <span className="font-bold">Review:</span> {book.review}
        </p>
        <div>
          ‍<span className="font-bold">Tag</span>{" "}
          {book.tags.map((i, ind) => (
            <p
              key={ind}
              className="badge badge-success badge-soft ml-2 font-medium text-base"
            >
              #{i}
            </p>
          ))}
        </div>
        <div className="border-t"></div>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <p>Number Of Pages</p>
            <p>{book.totalPages}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Publisher: </p>
            <p>{book.publisher}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Year of Publishing:</p>
            <p>{book.yearOfPublishing}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Rating:</p>
            <p>{book.rating}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => handleMarksAsReadBook(book)} className="btn">
            Mark As Read
          </button>
          <button onClick={()=> handleMarksAsWishlist(book)} className="btn bg-[#50B1C9] text-white font-medium">
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
