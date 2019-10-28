import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import TheNavBar from '../NavBar/NavBar';
import FontList from '../FontList/FontList';
import FontsContainer from '../FontList/FontsContainer';
import Search from '../FontList/Search';



import InfiniteScroll from "react-infinite-scroll-component";

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