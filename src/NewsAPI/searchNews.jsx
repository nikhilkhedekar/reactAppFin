import React, { useState, useEffect, useCallback } from 'react'
import axios from "axios";

const SearchNews = () => {
    const [value, setValue] = useState('')
    const [results, setResults] = useState([]);

    const API_KEY = "440820b768af45aaa888cbb0c262bf05"
    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${value}&apiKey=${API_KEY}`)
        console.log(response)
        setResults(response.data.articles)
        setValue('')
    }

    return (
        <div>
            <div>
                <h1>React News App</h1>
            </div>
            <div>
                <form onSubmit={submitHandler} >
                    <input onChange={changeHandler} value={value} />
                    <input type='submit' value='Search' />
                </form>

            </div>
            <div>
                {results.map(news => (
                    <ul key={Math.random()} >
                        <li>{news.title}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default SearchNews