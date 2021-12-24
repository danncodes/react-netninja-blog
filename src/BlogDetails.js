
import { useParams } from "react-router-dom";
import useFetch from "./useFetch"


const BlogDetails = () => {

    const { id } = useParams()
    const {data: blog, isLoading, error} = useFetch("http://localhost:8000/blogs/" + id)

    return ( 
        <div className="blog-details">
            {blog && (
                <article>
                    <h2>{blog.title} - { id }</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
        </div>
     );
}
 
export default BlogDetails;