import { FiBookmark } from "react-icons/fi";
import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div className="mt-10">
      <img className="w-full" src={cover} alt={`photo of ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6 mt-6">
          <img className="w-[60px]" src={author_img} alt="" />
          <div className="space-y-1">
            <p className="text-2xl font-bold">{author}</p>
            <p className="text-base font-medium">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <p className="text-xl font-medium">{reading_time} mins</p>
          <button
            onClick={() => handleBookmarks(blog)}
            className="text-green-600"
          >
            <FiBookmark></FiBookmark>
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-[40px] font-bold"> {title} </h2>
        <div className="mt-2">
          {hashtags.map((hash, idx) => (
            <span key={idx} className="">
              <a className="text-xl font-medium" href="">
                # {hash}{" "}
              </a>
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-700 underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
