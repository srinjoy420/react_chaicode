import React, { useEffect, useState } from 'react'
import {useLoaderData} from "react-router"

const Github = () => {
    // const data=useLoaderData()
    const [data, useData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/srinjoy420')
            .then((res) => res.json())
            .then((data) => useData(data))

    }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const giHubLoader=async()=>{
    const res=await fetch(`https://api.github.com/users/srinjoy420`)
    return res.json()
}