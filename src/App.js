import React from 'react';
//import Card from './Card';
import './App.css';
import {friends} from './friends';
import FriendsList from './FriendsList';

function App() {
  return (
    <div className="tc">
        <h1>Developers</h1>
        <hr/>     
        <FriendsList friends={friends}/>     
    </div>
  );
}

export default App;
