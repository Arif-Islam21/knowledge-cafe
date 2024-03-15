import Proptypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div>
      <h3 className="text-3xl">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: Proptypes.object.isRequired,
};

export default Bookmark;
