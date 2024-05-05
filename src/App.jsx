import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (blog) => {
    console.log("adding bookmark");
  };
  return (
    <>
      <div className="lg:max-w-7xl mx-auto">
        <Header></Header>
        <div className="md:flex">
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
