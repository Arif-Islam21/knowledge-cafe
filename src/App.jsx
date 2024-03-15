import { useState } from "react";
import "./App.css";
import Bookmark from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/Blogs";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    // console.log("Bookmark adding soon", blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-6xl gap-x-4  mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </main>
    </>
  );
}

export default App;
