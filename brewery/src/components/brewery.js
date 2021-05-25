import React from 'react';

function Brewery({ searchTerm, setSearchTerm, handleSubmit, setType, setCity, type, city, handleFilter }){
    return (
        <div className='brewery'>
            <form onSubmit={(e) => handleSubmit(e)} className='search_form'>
                <input 
                    value={searchTerm} 
                    placeholder="Search breweries..."
                    onChange={({target}) => setSearchTerm(target.value) } 
                    className='search-input' 
                    type="text" 
                />
                <button className='search-btn'>
                    <svg 
                        style={{width: "100%", height: "100%"}} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">    
                        </path>
                    </svg>
                </button>
            </form>
            <div className="filters">
                <div className="filter filter_type">
                    <label>Filter by Type:</label>
                    <div>
                        <input placeholder="Enter Type" type="text" value={type} onChange={({target}) => setType(target.value) } />
                        <button type="button" onClick={() => handleFilter()} >Filter</button>
                    </div>
                </div>
                <div className="filter filter_city">
                    <label>Filter by City:</label>
                    <div>
                        <input placeholder="Enter City" type="text" value={city} onChange={({target}) => setCity(target.value) } />
                        <button type="button" onClick={() => handleFilter()} >Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brewery;