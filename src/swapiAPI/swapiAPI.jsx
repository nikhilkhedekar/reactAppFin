import React, { useState, useEffect } from 'react'

const SwapiAPI = () => {
    const [people, setPeople] = useState([])
    useEffect(async () => {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json()
        const responseData = data.results
        console.log(responseData)
        const getData = []
        for (let key in responseData) {
            getData.push({
                id: key,
                name: responseData[key].name
            })
        }
        setPeople(getData);
    }, []);
    console.log(people)
    return (
        <div>
            {people.map(data => {
            <div key={data.id}>
                <li>{data.name}</li>
            </div>
        })}
        </div>
    )
}

export default SwapiAPI