import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchInput from './SearchInput';
import CountryList from './CountryList';

function Countries() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [showDetails, setShowDetails] = useState({});

    const [inputVal, setInputVal] = useState('Israel');

    useEffect(() => {
        setError(false);
        axios.get(`https://restcountries.com/v3.1/name/${inputVal}?fullText=true`)
            .then(response => {
                const relevantData = response.data.map(country => {
                    return {
                        ...country,
                        name: country.name.common,
                        capital: country.capital[0],
                        population: country.population,
                        flag: country.flags.png,
                        region: country.region,
                        timezone: country.timezones[0],
                        lang: country.languages,
                    };
                });
    
                setData(relevantData);
            })
            .catch(error => {
                console.error(error);
                if (error.response && error.response.status === 404) {
                    setError(true);
                }
            });            
    }, [inputVal]);

    return (
        <div className="bg-light p-3">
            <div className="container">
                <h1 className="text-center mb-4">Search for a Country</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <SearchInput onSearch={setInputVal} />
                            <CountryList error={error} data={data} showDetails={showDetails} setShowDetails={setShowDetails} />
                        </div>
                    </div>
            </div>
        </div>

    );
}

export default Countries;