import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-80 h-80" src={cover} alt={title} />
      <div className="flex justify-between">
        <div className="flex gap-6">
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
        <div>
          <span>{reading_time} minuite Read</span>
        </div>
      </div>
      <div className="text-4xl">{title}</div>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
