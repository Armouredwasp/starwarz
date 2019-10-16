import React from 'react';

const Card = ({name,height,mass,birth_year,gender}) => {
    
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h1>{name}</h1>
                <p>Height/Mass: {height}cm/{mass}kg</p>
                <p>Brith year: {birth_year}</p>
                <p>{gender}</p>
            </div>
        </div>
    )
}

export default Card;