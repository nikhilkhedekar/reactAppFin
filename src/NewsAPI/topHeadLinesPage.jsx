import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CountryFilter from './countryFilter'
import CategoryFilter from './categoryFilter'

const TopHeadLinesPage = () => {
    const [data, setData] = useState([])
    const [countryParam, setCountryParam] = useState('in');
    const [categoryParam, setCategoryParam] = useState('technology');
    let API_KEY = '440820b768af45aaa888cbb0c262bf05';
    let COUNTRY_PARAM = countryParam;
    let CATEGORY_PARAM = categoryParam;

    useEffect(async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${COUNTRY_PARAM}&category=${CATEGORY_PARAM}&apiKey=${API_KEY}`)

        setData(response.data.articles)
        console.log(response.data.articles)


    }, [countryParam, categoryParam])

    return (
        <div>
            <div><h1>React News App</h1></div>
            <hr />
            <div>
                <CountryFilter countryParam={countryParam} setCountryParam={setCountryParam} />
                <CategoryFilter categoryParam={categoryParam} setCategoryParam={setCategoryParam} />
            </div>
            <hr />
            <div>
                {data.map(item => {
                    return (
                        <ul key={Math.random()}>
                            <li>{item.title}</li>
                        </ul>
                    )
                })}
            </div>

        </div>
    )
}

export default TopHeadLinesPage