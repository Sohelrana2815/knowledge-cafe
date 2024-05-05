import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmarks = (blog) => {
    // console.log("adding bookmark");
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleMarkAsRead = (time) => {
    // console.log("mark as read", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  return (
    <>
      <div className="lg:max-w-7xl mx-auto">
        <Header></Header>
        <div className="md:flex gap-6">
          <Blogs
            handleBookmarks={handleBookmarks}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
