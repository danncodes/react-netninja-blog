import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")
    
    return ( 
        <div className="Home">
            { isLoading && <div>Loading ...</div>}
            { error && <div>Error....</div>}
            { blogs && <BlogList title="All Blogs" blogs={blogs} /> }
        </div>
     );
}
 
export default Home;