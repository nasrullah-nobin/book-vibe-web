import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const BookCard = ({book}) => {
    
    return (
        <Link to={`cardDetails/${book.bookId}`} className={`card bg-base-100 shadow-sm p-6 space-y-3`}>
            <figure className="bg-[#F3F3F3] rounded-2xl p-6">
              <img className="max-w-32" src={book.image} alt={book.bookName} />
            </figure>
           <div>{book.tags.map((i,ind) => <p key={ind} className="badge badge-success badge-soft ml-2">{i}</p>)}</div>
            <div className="card-body">
              <h2 className="card-title">{book.bookName}</h2>
              <p className="font-semibold">By: {book.author}</p>
              <hr className="border-t-2 border-dashed border-gray-300 my-4"></hr>
            </div>
            <div className="flex justify-between items-center text-2xl">
                <div>
                    
                    <div className="badge ">{book.category}</div>
                </div>
                <div className="flex gap-2 items-center">
                    {book.rating}
                    <CiStar/>
                </div>
            </div>
          </Link>
    );
};

export default BookCard;