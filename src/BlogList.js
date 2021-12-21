const BlogList = ({title, blogs}) => {

    return ( 
        <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map( (blog) => (
            <div key={blog.id} className="blog-preview">
                <h2>{blog.title} - {blog.author}</h2>
                <p>{blog.body}</p>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;