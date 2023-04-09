import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Countries() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/name/India?fullText=true')
        .then(response => {
            // setData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);



  return (
    <div>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default Countries