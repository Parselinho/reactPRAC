import React from 'react';
import MoreInfo from './MoreInfo';

function CountryInfo({ country }) {
    const { name, capital, population, flag, region, timezone, lang } = country;
    const languages = Object.values(lang).join(', ');

    return (
        <div>
            <h2>{name}</h2>
            <img src={flag} alt={`${name} flag`} width="100" />
            <p>Capital: {capital}</p>
            <p>Population: {population.toLocaleString()}</p>
            <p>Region: {region}</p>
            <p>Timezone: {timezone}</p>
            <p>Languages: {languages}</p>
            <MoreInfo country={country} />
        </div>
    );
}

export default CountryInfo;
