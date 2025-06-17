import { React, useState, useEffect } from 'react'
import { useLoaderData } from 'react-router'
function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Puneet-Th')
    //     .then(Response => Response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
   const data = useLoaderData()
    return (
         <div className='text-center m-4 bg-white-500 text-black font-bold font-sans p-4 text-3xl'>Github follower : {data.followers}
        <img src={data.avatar_url} alt="nhi h bsdke lekar aa link" width={300} />
        </div>
       
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Puneet-TH')
    return response.json()
}

