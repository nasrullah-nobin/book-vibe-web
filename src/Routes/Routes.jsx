import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import BookPage from "../Pages/BookPage/BookPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PageToRead from "../Pages/PageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/book", Component: BookPage },
      {path: 'cardDetails/:Id',
        loader:()=> fetch('/booksData.json'),
        Component: CardDetails},
        {path:'/page', Component: PageToRead}
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);