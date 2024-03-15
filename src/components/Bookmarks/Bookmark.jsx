import PropTypes from "prop-types";

const Bookmark = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 mt-12">
      <h2 className="text-3xl">Bookmark {bookmarks.length}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmark;
