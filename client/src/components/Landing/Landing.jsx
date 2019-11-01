import React, { Component } from 'react';


import TheNavBar from '../NavBar/NavBar';
import FontList from '../FontList/FontList';


class Landing extends Component {
 
  render() {
    return (
     
      <div className = "container-fluid">
      <TheNavBar/>     
      <FontList/>
      </div>
      
    )
  }
}

export default Landing;