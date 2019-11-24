import React from "react";


const Card = ({ id,username, name, position, email }) => {
  return (
    <div className="bg-light-purple br4 ba bw2 b-dark pa2 ma3 w5 grow dib shadow-5">

      <img src={`https://robohash.org/${id}?size=100x100`} alt="robotes" />
      <div>
        <h3>{name}</h3>
        <p>{username}</p>
        <h4>{position}</h4>
        <p>{email}</p>
      </div>

    </div>
  );
}

export default Card;
