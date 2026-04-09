import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedreadBook from "../../Components/ListedBooks/ListedreadBook";
import ListedWishlistBook from "../../Components/ListedBooks/ListedWishlistBook";

const BookPage = () => {
  const [sortingType,setSortingType]= useState('');
  
  return (
    <div>
     <div className="flex justify-center items-center my-5">
       <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By {sortingType} ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={()=> setSortingType('pages')}>
            <a>Pages</a>
          </li>
          <li onClick={()=> setSortingType('rating')}>
            <a>Rating</a>
          </li>
        </ul>
      </div>
     </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <ListedreadBook sortingType={sortingType}></ListedreadBook>
        </TabPanel>
        <TabPanel>
          <ListedWishlistBook sortingType={sortingType}></ListedWishlistBook>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookPage;
