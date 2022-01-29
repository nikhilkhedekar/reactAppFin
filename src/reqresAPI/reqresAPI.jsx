import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ReqresAPI = () => {
    const [data, setData] = useState([])
    const [err, setErr] = useState()
    useEffect(() => {
       axios.get('https://reqres.in/api/users?page=2')
       .then(res => {
           const response = res.data
           console.log(response)
           const listData = response.data.map(item => {
               return(
                   <ul key={item.id} >
                       <li><img url={item.avatar} height='200' width='200' /></li>
                       <li>{item.first_name}</li>
                       <li>{item.last_name}</li>
                       <li>{item.email}</li>
                   </ul>
               )
           })
           setData(listData);
       })
    }, [])
    console.log(data)
    return(
        <div>
            <div>{data}</div>
            <div>{err}</div>
        </div>
    )
}

export default ReqresAPI