import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

import axios from '../axios';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/card');

            setPeople(req.data)
        }

        fetchData();
    }, []);

    console.log(people)

    const swiped = (direction, nameToDelete) => {
        console.log(`removing: ${nameToDelete}`)
    }

    const outOfFrame = (name) => {
        console.log(`${name} left the screen`)
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards___cardContainer">
                {people.map(person => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={'up','down'}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div 
                            style={{ backgroundImage: `url(${person.imgUrl})`}}
                            className='card'
                        
                        >
                            <h3><strong><i>{person.name}</i></strong></h3>
                            <h4>{person.bio}</h4>

                        </div>
                    </TinderCard>

                ))}
            </div>
         

        </div>
    )
}

export default TinderCards;
