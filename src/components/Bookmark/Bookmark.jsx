import Proptypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div>
      <h3 className="text-2xl mt-2">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: Proptypes.object,
};

export default Bookmark;
