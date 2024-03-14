import "./App.css";
import Bookmark from "./components/Bookmarks/Bookmark";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <>
      <Header></Header>
      <div>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
