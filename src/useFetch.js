import { useEffect, useState } from 'react'

const useFetch = (url) => {

const [data, setData] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(false)

    useEffect( () => {
        const abortCont = new AbortController()
        setTimeout( () => {
            fetch(url, {signal: abortCont.signal})
            .then ( res => {
                if(!res.ok){
                    throw Error("Cannot Fetch Data from Resource")
                } else {
                    return res.json()
                }
            })
            .then( data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("Fetch Aborted")
                } else {
                    setError(true)
                    setIsLoading(false)
                    setData(null)
                }
            })
        },1000)

        return () => abortCont.abort()
    }, [url])

    return {data, isLoading, error}
}


export default useFetch