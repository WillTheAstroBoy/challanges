import React from 'react';

function BreweryCard({brewery, showDetailPage}){
    const { id, name, city, state  } = brewery;

    return (
        <li onClick={() => showDetailPage(id)} className="brewery-card">
            <div className="brewery-card__name">
                <img src="./bear.png" alt="bear jar" />
                <h3>{name}</h3>
            </div>
            <div className="brewery-card__location">
                <svg 
                    style={{width: "30px", height:"30px", color: "red"}} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                    </path>
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                    </path>
                </svg>
                <p>{`${city}, ${state}`}</p>
            </div>
            
        </li>
    )
}

export default BreweryCard;