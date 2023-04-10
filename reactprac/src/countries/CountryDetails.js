import React from 'react';

function CountryDetails({ country }) {
    const {
        unMember = false,
        currencies = {},
        subregion = '',
        borders = [],
        area = '',
        fifa = '',
        continents = [],
        startOfWeek = '',
    } = country ?? {};

    const currenciesList = Object.values(currencies).map((currency) => `${currency.name} (${currency.symbol})`).join(', ');

    return (
        <div>
            <p>UN Member: {unMember ? 'Yes' : 'No'}</p>
            <p>Currencies: {currenciesList}</p>
            <p>Subregion: {subregion}</p>
            <p>Borders: {borders.join(', ')}</p>
            <p>Area: {area.toLocaleString()} km²</p>
            <p>FIFA: {fifa}</p>
            <p>Continent: {continents.join(', ')}</p>
            <p>Start of Week: {startOfWeek}</p>
        </div>
    );
}

export default CountryDetails;
