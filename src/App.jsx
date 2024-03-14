import "./App.css";
import Bookmark from "./components/Bookmarks/Bookmark";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-6xl gap-x-4  mx-auto">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </>
  );
}

export default App;
