import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const WikipediaAPI = () => {
    const [val, setVal] = useState('');
    const [results, setResults] = useState([]);
    const changeHandler = (e) => {
        setVal(e.target.value)
    }
    let fetchDataTimeout = null;
    useEffect(() => {
        if(val){
            fetchDataTimeout = setTimeout( async () => {
                const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: val,
                    }
                })
                setResults(data.query.search);
            }, 1000)
        }
        return () => {
            clearTimeout(fetchDataTimeout)
        }
    }, [val])  
    return(
        <div>
            <div>
                <input onChange={changeHandler} value={val}  />
            </div>
            <div>{results.map(item => {
                return(
                    <ul key={item.pageId} >
                        <li><a href={'https://en.wikipedia.org?curid=' + item.pageId} target='_blank' rel='noreferrer' >{item.title}</a></li>
                        <li><p dangerouslySetInnerHTML={{__html : item.snippet}} ></p></li>
                        {/*<li><p>{item.snippet}</p></li>*/}
                    </ul>
                )
            })}</div>
            
        </div>
    )
}

export default WikipediaAPI