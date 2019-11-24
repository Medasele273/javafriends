import React from 'react';
import Card from './Card';

const FriendsList = ({ friends }) => {


    return (
    <div>
       {
            friends.map((user,i)=>{
                return <Card key={i} id={friends[i].id} name={friends[i].name} position={friends[i].position} email={friends[i].email}/>
              })
       }
    </div>
    )   
    
}

export default FriendsList;