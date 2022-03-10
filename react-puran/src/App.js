import './App.css';
import React from 'react';
import person from './components/person';
// import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      person: [
        {
          name: "Tom Brown",
          number: "888-888-8888",
          dob: " 01/09/2018"
        },
        {
          name: "Jerry White",
          number: "111-222-3333",
          dob: "02/09/2019"
        },
        {
          name: "Puran Bhujel",
          number: "222-222-4444",
          dob: "03/10/2020"
        }
      ]
    }
  }
  render(){
    let people = this.state.person;
    return (
      <person data={people}/>
    );
  }
}

export default App;