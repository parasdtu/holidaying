import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();

    this.state={
      restaurants: [],
      searchfield: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({restaurants: users}));
  }
  
  render() {
    const {restaurants,searchfield }=this.state;
    const filteredRestaurants=restaurants.filter(restaurant =>
      restaurant.company.name.toLowerCase().includes(searchfield.toLowerCase())
      );


    return (
      <div className="App">
        <h1>CatZoMato</h1>
        <SearchBox 

          placeholder='Seacrh Restaurants'
          handleChange={e =>this.setState({searchfield: e.target.value})}

        />
        <CardList restaurants={filteredRestaurants} />
      </div>
    );
  }

}


export default App;
