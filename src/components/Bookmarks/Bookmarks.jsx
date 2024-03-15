import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 text-center bg-gray-300  ml-4 pt-4 rounded-lg mt-12">
      <div className="bg-purple-300 rounded-lg p-4">
        <h3 className="text-4xl text-white font-bold">
          Reading Time : {readingTime}
        </h3>
      </div>
      <h2 className="text-3xl ">Bookmarked Blog {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
