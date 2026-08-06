import React, { useEffect, useState } from 'react'
import {Link , NavLink , useLoaderData} from 'react-router-dom'


function Github() {
    const data = useLoaderData()

    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/JainSahab45').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 '>Github followers : {data.following}
        <img src={data.avatar_url} alt="Git Image" width={200} /></div>
    )
}

export default Github

export const githubinfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/JainSahab45')
    return response.json()
}