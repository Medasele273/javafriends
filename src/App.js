import React from 'react';
//import Card from './Card';
import './App.css';
import { friends } from './friends';
import FriendsList from './FriendsList';
import SearchDevelopers from './SearchDevelopers';
//import { StickyContainer, Sticky } from 'react-sticky';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friends,
      searchField: ""
    }
  }

  /* componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response =>response.json())
     .then(user=>{this.setState({friends:user})});
   }*/

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filterDeveloper = this.state.friends.filter(friend => {
      return friend.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
            <div className="sticky">
              <img  className="pa2 ma2" src="https://fontmeme.com/permalink/191124/7a35abdbc690f107238583c6bd02d75c.png" alt="Header" />
              <SearchDevelopers onSearchChange={this.onSearchChange} />
              <hr />
            </div>
          
        <FriendsList friends={filterDeveloper} />
      </div>
    );
  }

}
export default App;
