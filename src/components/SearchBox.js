import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield,searchChange}) =>{
    return (
        <div>
        <input
         className='pa3 ba b--green bg-lightest-blue'
         type='search'
         placeholder='Enter Index number'
         onChange={searchChange}
         />
        </div>
    );
}

export default SearchBox;