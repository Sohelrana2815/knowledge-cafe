import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 pt-4 rounded-lg  ">
      <h3 className="text-3xl text-center text-purple-600">
        Reading Time: {readingTime}
      </h3>
      <h4 className="font-bold text-2xl text-center mt-4 ">
        Bookmarked Blogs : {bookmarks.length}
      </h4>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
