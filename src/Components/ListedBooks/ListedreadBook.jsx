import React, { useContext,useMemo } from "react";
import { BookContext } from "../Context/BookProvider";
import { CiStar } from "react-icons/ci";

const ListedreadBook = ({ sortingType }) => {
  const { stored} = useContext(BookContext);

  const filterReadList = useMemo(()=> {
    if(!sortingType)return stored;
    if(sortingType === 'pages')return [...stored].sort((a,b)=> a.totalPages - b.totalPages);
    if(sortingType === 'rating') return [...stored].sort((a,b)=> a.rating - b.rating);
    return stored;
  },[stored,sortingType])


  return filterReadList.length === 0 ? (
    <div className="flex justify-center items-center bg-gray-200 h-[80vh]">
      <h2 className="text-2xl font-bold">No data found in ReadList</h2>
    </div>
  ) : (
    filterReadList.map((book,ind) => (
      <div key={ind}
        className={`flex gap-6 bg-base-100 shadow-sm p-6 space-y-3 rounded-2xl mb-7`}
      >
        <figure className="bg-[#F3F3F3] rounded-2xl p-6">
          <img className="max-w-32" src={book.image} alt={book.bookName} />
        </figure>

        <div className="space-y-3">
          <h2 className="text-2xl">{book.bookName}</h2>
          <p className="font-semibold">By: {book.author}</p>
          <div className="flex items-center gap-3">
            <div>
              <span className="font-bold">tag</span>
              {book.tags.map((i, ind) => (
                <p key={ind} className="badge badge-success badge-soft ml-2">
                  #{i}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <p>Number Of Pages</p>
              <p>{book.totalPages}</p>
            </div>
          </div>
          <hr className="border-t-2 border-dashed border-gray-300 my-4"></hr>
        </div>
        <div className="flex justify-between items-center text-2xl">
          <div>
            <div className="badge ">{book.category}</div>
          </div>
          <div className="flex gap-2 items-center">
            {book.rating}
            <CiStar />
          </div>
        </div>
      </div>
    ))
  );
};

export default ListedreadBook;
