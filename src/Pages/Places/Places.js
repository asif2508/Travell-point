import React from 'react';
import usePlaces from '../../hooks/usePlaces';
import Header from '../Header/Header';

const Places = () => {
    const [places, setPlaces] = usePlaces();
    return (
        <div>
            <Header></Header>
            <h1>{places.length}</h1>
        </div>
    );
};

export default Places;