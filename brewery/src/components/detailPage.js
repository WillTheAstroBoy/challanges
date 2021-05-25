import React from 'react';

function DetailPage({brewery, setPageVisible}){
    return (
        <div className="detail_modal">
            <div className="detail_modal-content">
                <h3 className="detail_modal-content_name">
                
                    {brewery.name ? brewery.name : "Not Available"}
                </h3>
                <p className="detail_modal-content_item">
                    <img src="./bear.png" alt="bear mug"  style={{width: "30px", height: "30px", marginRight: "5px", marginBottom: "-4px"}} />
                    {brewery.brewery_type ? brewery.brewery_type : "Not Available"}
                </p>
                <p className="detail_modal-content_item">
                    <svg 
                        style={{width: "30px", height: "30px", marginRight: "5px", marginBottom: "-4px"}} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                        </path>
                    </svg>
                    {`${brewery.city}, ${brewery.state}`}
                    </p>
                <p className="detail_modal-content_item">
                <svg 
                    style={{width: "30px", height: "30px", marginRight: "5px", marginBottom: "-4px"}} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                    </path>
                </svg>
                    {brewery.phone ? brewery.phone : "Not Available"}
                </p>
                <p className="detail_modal-content_item">
                <svg 
                    style={{width: "30px", height: "30px", marginRight: "5px", marginBottom: "-4px"}}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        strokeWidth="2" 
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                    </path>
                    </svg>
                    {brewery.website_url ? brewery.website_url : "Not Available"}
                </p>
                <div className="detail-modal__close-btn-container">
                    <button onClick={() => setPageVisible(false)} className="detail-modal__close-btn">Close</button>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;