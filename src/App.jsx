import { useState } from "react";
import "./App.css";
// import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/Blogs";
import Bookmark from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  // console.log(bookmarks);

  const handleAddToBookmark = (blog) => {
    // console.log("Bookmark adding soon", blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-6xl gap-x-4  mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        {/* <Bookmarks bookmarks={bookmarks}></Bookmarks>
         */}
        <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </main>
    </>
  );
}

export default App;
