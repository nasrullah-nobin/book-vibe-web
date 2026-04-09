const getAllReadListFromLocalDb = () => {
  const allReadList = localStorage.getItem("readlist");
  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addReadListToLoacalDB = (book) => {
  const allBook = getAllReadListFromLocalDb();
  const alReadyExist = allBook.find((bk) => bk.bookId === book.bookId);
  if (!alReadyExist) {
    allBook.push(book);
    localStorage.setItem("readlist", JSON.stringify(allBook));
  }
};





const getAllWishList = () => {
  const allWishlist = localStorage.getItem("wishlist");
  if (allWishlist) return JSON.parse(allWishlist);
  return [];
};


const addWishLIstToDB =(book)=> {
    const allWishlist = getAllWishList();
const isAlReadyExist = allWishlist.find(bk=> bk.bookId=== book.bookId);
if(!isAlReadyExist){
    allWishlist.push(book)
    localStorage.setItem('wishlist',JSON.stringify(allWishlist))
}
}

export { getAllReadListFromLocalDb, addReadListToLoacalDB,getAllWishList,addWishLIstToDB };