import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    id,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8 h-80" src={cover} alt={title} />
      <div className="flex justify-between">
        <div className="flex my-2 gap-6">
          <img
            className="w-12 h-12 mt-4 rounded-full"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
            {hashtags.map((tag, idx) => (
              <span key={idx}>
                <a href="">{tag}</a>
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} minuite Read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-400 text-2xl"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <div className="text-4xl mt-2 font-bold">{title}</div>
      <button
        className="text-blue-600 font-bold underline"
        onClick={() => handleMarkAsRead(reading_time, id)}
      >
        Mark As Read
      </button>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func,
};
