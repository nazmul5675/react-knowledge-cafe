import PropTypes from 'prop-types';

import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleToBookmark, handleMarkAsRead }) => {

    const { id, title, cover, author, author_img, posted_date, reading_time, hashtag } = blog;
    return (
        <div className='sm:mb-30 mb-5 sm:p-6 lg:p-0'>
            <img className='sm:rounded-2xl w-full  object-cover' src={cover} alt={`${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center p-5'>
                    <img className='w-[60px] h-[60px] p-2 rounded-full object-cover' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h1 className='text-2xl'>{author}</h1>
                        <p className='text-slate-500'>{posted_date}</p>
                    </div>
                </div>
                <div >
                    <span className='pr-5 flex items-center'>{reading_time} min Read <button onClick={() => handleToBookmark(blog)}
                        className='ml-2 text-2xl text-red-500'><FaBookmark></FaBookmark></button></span>
                </div>
            </div>
            <div className='flex flex-col gap-y-3 p-5'>
                <h2 className='sm:text-4xl text-3xl font-bold'>{title}</h2>
                <a className='text-slate-500' href="">{hashtag}</a>

                {/* {//note: when hashtag in array in side json
                hashtags.map((hash,idx)=> <span key={idx}><a href="#">#{hash}</a></span>)
                    }
                */}

            </div>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-blue-600 underline pl-5'>
                Mark as read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};


export default Blog;