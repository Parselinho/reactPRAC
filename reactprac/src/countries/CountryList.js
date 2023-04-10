import React from 'react';
import CountryInfo from './CountryInfo';
import NotFound from './NotFound';

function CountryList({ error, data, showDetails, setShowDetails }) {
    return (
        <div>
            {error ? <NotFound /> : data && data.map((country, index) => (
                <CountryInfo
                    key={index}
                    index={index}
                    country={country}
                    showDetails={showDetails}
                    setShowDetails={setShowDetails}
                />
            ))}
        </div>
    );
}

export default CountryList;
