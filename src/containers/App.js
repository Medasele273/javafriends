import React from 'react';
//import Card from './Card';
import './App.css';
import { friends } from '../components/friends';
import FriendsList from '../components/FriendsList';
import SearchDevelopers from '../components/SearchDevelopers';
//import { StickyContainer, Sticky } from 'react-sticky';
//import Scroll from './Scroll';
import ErrorBaundry from '../components/ErrorBaundry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friends,
      searchField: ""
    }
  }
  /** If I want to get users from API  i can use this */
  /* componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response =>response.json())
     .then(user=>{this.setState({friends:user})});
   }*/

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { friends, searchField } = this.state;
    const filterDeveloper = friends.filter(friend => {
      return friend.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if (friends.length === 0) {
      return <h1>LODDING......</h1>
    } else {
      return (
        <div className="tc">
          <div className="sticky">
            <img className="pa2 ma2" src="https://fontmeme.com/permalink/191124/7a35abdbc690f107238583c6bd02d75c.png" alt="Header" />
            <SearchDevelopers onSearchChange={this.onSearchChange} />
          </div>
          <ErrorBaundry>
              <FriendsList friends={filterDeveloper} />
          </ErrorBaundry>
          
        </div>
      );
    }

  }

}
export default App;
