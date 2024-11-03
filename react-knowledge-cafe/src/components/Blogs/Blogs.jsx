import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleToBookmark }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('author-info.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blog :{blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                    handleToBookmark={handleToBookmark}>

                </Blog>
                )
            }
        </div>
    );
};

Blogs.propTypes = {
    handleToBookmark: PropTypes.func

};

export default Blogs;