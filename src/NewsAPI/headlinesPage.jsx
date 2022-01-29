import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HeadlinesPage = () => {
    const [data, setData] = useState([])
    const API_KEY = "440820b768af45aaa888cbb0c262bf05";
    useEffect( async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API_KEY}`)
        setData(response.data.articles)
                console.log(response)    
    }, [])
    const renderHeadlines = data.map(item => {
        return (
            <ul key={Math.random()} >
                <li>{item.title}</li>
            </ul>
        )
    })
    return (
        <div>
            <div>
                <h1>React News App</h1>
            </div>
            <div>
                {renderHeadlines}
            </div>

        </div>
    )
}

export default HeadlinesPage