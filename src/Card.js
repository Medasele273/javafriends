import React from "react";


const Card =({id,name,position,email}) => {
  
  
    return (
      <div className="bg-light-green br4 ba bw2 b--dark-red pa2 ma2 grow dib shadow-5">
        
          <img src={`https://robohash.org/${id}?size=150x150`} alt="robotes" />
          <div>
            <h3>{name}</h3>
            <h4>{position}</h4>
            <p>{email}</p>
          </div>
      
      </div>
    );
  }

export default Card;
