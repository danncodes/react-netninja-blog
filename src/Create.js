import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(isPending) return
        
        const blog = {title, body, author}
        setIsPending(true)

        const response = fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        await response
        setIsPending(false)
        
        history.push("/")
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form action="http://localhost:8000/blogs" method="post" onSubmit = {handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input value={title} type="text" required onInput={ (e) => {setTitle(e.target.value)} }/>

                <label htmlFor="">Blog body:</label>
                <textarea value={body} required onInput={ (e) => {setBody(e.target.value)} }></textarea>

                <label htmlFor="">Blog author:</label>
                <select value={author} onChange={ (e) => {setAuthor(e.target.value)} }>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="luigi">luigi</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled className="disabled">Posting Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;