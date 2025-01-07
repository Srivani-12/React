import React from 'react';


    

    export default function Card(props) {

       
            let badgeText ;
            
            
            if (props.openSpots === 0){
                badgeText = "SOLD OUT"
            }
            else if (props.location === "Online"){
                badgeText = "ONLINE"

            }
    
        
    
        return (
            <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
                <img
                    src={props.img}
                    className="card-image"
                    alt={props.alt || "Experience"}
                    
                />
                <div className="card-stats">
                    <img src="/images/star.jpeg" alt="star" className="card-star" />
                    
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount})</span>
                    <span className="gray">{props.location}</span>
                </div>
                <h1 className="card-title">{props.title}</h1>
                
                <p className="card-description">{props.description}</p>
                
            </div>
        );
    }
    
