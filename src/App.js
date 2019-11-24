import React from 'react';
//import Card from './Card';
import './App.css';
import {friends} from './friends';
import FriendsList from './FriendsList';
import SearchDevelopers from './SearchDevelopers';

function App() {
  return (
    <div className="tc">
        <h1>Developers</h1>
        <hr/>  
        <SearchDevelopers/>   
        <FriendsList friends={friends}/>     
    </div>
  );
}

export default App;
