import React,{useCallback,useMemo} from 'react'
import axios from "axios"
export default function useFetch(url){

    const [data,setData] = React.useState(null)
    const [loading,setLoading] = React.useState(true)
    const [error,setError]  = React.useState(null)

   const fetch  = useCallback( async () =>{
     try {
        const {data: response} = await axios.get(url)
        setData(response)
        setloading(false)

     } catch (err) {
        setError(err)
        setLoading(false)
     }

 },[url])


   React.useEffect(() => {
    fetch()

   }, [fetch])

   return{data,loading,error};
   
}