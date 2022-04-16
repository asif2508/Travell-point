import {useState, useEffect } from 'react';

const usePlaces =()=>{
    const [places, setPlaces] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/asif2508/Travell-point/main/public/places.json')
        .then(res => res.json())
        .then(data => setPlaces(data));
    },[]);
    return [places, setPlaces];
}

export default usePlaces;