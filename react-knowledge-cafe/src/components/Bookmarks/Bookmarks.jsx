import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (

        <div className="md:w-1/3 ">
            <h3 className="text-2xl p-4 text-center bg-purple-300 m-4 rounded-xl">Reading Time : {readingTime}</h3>
            <div className=" bg-gray-400 rounded-xl m-4 py-2">

                <h2 className="text-2xl text-center bg-slate-100 p-4 m-4 rounded-xl border-2 border-red-300">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};
export default Bookmarks;