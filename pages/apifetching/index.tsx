import { error } from 'console';
import React, { useEffect, useState } from 'react'

const Apifetch = () => {
    const [data, setData] = useState('')
    const url = 'https://sportscore1.p.rapidapi.com/sports/1/teams?page=1';

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c52eb28dd9mshcca925e9b720793p1c15a5jsnaa9e97a645d5',
                'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
            }
        };

        fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .catch(err=>{
            console.error(err)
        })

    }, [])

    return (
        <div>
           {/* <iframe src={"https://crichdstreaming.xyz/embed2.php?id=ptvsp"} width={"90%"} height={540}  webkitallowfullscreen="full" mozallowfullscreen allowfullscreen></iframe> */}

           <iframe src="https://crichdstreaming.xyz/embed2.php?id=ptvsp" allowFullScreen={true} width={800} height={440} scrolling={"no"} className='overflow-hidden m-12 rounded-md'></iframe>
        </div>
    )
}

export default Apifetch;