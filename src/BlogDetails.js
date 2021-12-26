
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch"


const BlogDetails = () => {

    const { id } = useParams()
    const history = useHistory()
    const {data: blog, isLoading, error} = useFetch("http://localhost:8000/blogs/" + id)

    const handleDelete = async() => {
        const response = fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        })
        await response;
        history.push("/")
    }

    return ( 
        <div className="blog-details">
            {blog && (
                <article>
                    <h2>{blog.title} - { id }</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
        </div>
     );
}
 
export default BlogDetails;