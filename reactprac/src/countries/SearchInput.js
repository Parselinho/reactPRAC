import React, { useRef } from 'react';

function SearchInput({ onSearch }) {
    const inputRef = useRef();

    const inputSearch = () => {
        onSearch(inputRef.current.value);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
          inputSearch();
        }
    };

    return (
        <div>
            <input ref={inputRef} type='text' onKeyDown={handleKeyDown} />
            <button onClick={inputSearch}>Submit</button>
        </div>
    );
}

export default SearchInput;