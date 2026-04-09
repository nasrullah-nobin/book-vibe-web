import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLoacalDB,
  addWishLIstToDB,
  getAllReadListFromLocalDb,
  getAllWishList,
} from "../utilities/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [stored, setStored] = useState(getAllReadListFromLocalDb);
  const [Wishlist, setWishlist] = useState(getAllWishList);

  useEffect(() => {
  getAllReadListFromLocalDb();
  getAllWishList()
  }, []);

  const handleMarksAsWishlist = (currentBook) => {
    const isExistInReadList = stored.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error("The book already in read list");
      return;
    }

    const isExist = Wishlist.find((book) => book.bookId === currentBook.bookId);
addWishLIstToDB(currentBook)

    if (isExist) {
      toast.warn("The Book is already exist in wishlist");
      return;
    } else {
      setWishlist([...Wishlist, currentBook]);
      toast(`'${currentBook.bookName}' add in wishlist`);
    }
  };

  const handleMarksAsReadBook = (currentBook) => {
    addReadListToLoacalDB(currentBook);

    const isExistInWishlist = Wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInWishlist) {
      toast.error("The book already in Wishlist");
      return;
    }

    const isExist = stored.find((book) => book.bookId === currentBook.bookId);

    if (isExist) {
      toast.warn("The Book is already exist in read list");
      return;
    } else {
      setStored([...stored, currentBook]);
      toast(`'${currentBook.bookName}' add in listed book`);
    }
  };
  const demo = {
    stored,
    setStored,
    handleMarksAsReadBook,
    handleMarksAsWishlist,
    setWishlist,
    Wishlist,
  };
  return <BookContext.Provider value={demo}>{children}</BookContext.Provider>;
};

export default BookProvider;
