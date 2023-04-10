import React, { useState } from 'react';
import CountryDetails from './CountryDetails';

function MoreInfo({ country }) {
    const [showMore, setShowMore] = useState(false);

    const toggleMoreInfo = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            <button onClick={toggleMoreInfo}>{showMore ? 'Less Info' : 'More Info'}</button>
            {showMore && <CountryDetails country={country} />}
        </div>
    );
}

export default MoreInfo;
