import { useEffect, useState } from 'react'

const useFetch = (url) => {

const [data, setData] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(false)

    useEffect( () => {
        setTimeout( () => {

            fetch(url)
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
                setError(true)
                setIsLoading(false)
                setData(null)
                console.log(err)
            })
        },1000)
    }, [url])

    return {data, isLoading, error}
}


export default useFetch