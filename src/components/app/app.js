import React, { Component } from 'react';


//import Page from '../people-page';
//import ListItem from '../item-list';
//import ItemDetails from '../item-details';
import ApxuapiService from '../../services/apxuapi-service';
//import ErrorButton from '../error-button/error-button';
//import ErrorIndicator from '../error-indicator/error-indicator';

import Header from '../header';
import RandomPlanet from '../random-planet';
//import ErrorButton from '../error-button';
//mport PeoplePage from '../people-page';
import ErrorBoundry from "../error-boundry";

import './app.css';
import ItemDetails from '../item-details';
import Row from '../row';


export default class App extends Component {

  apxuapiService= new ApxuapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };



  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

      const {
        getPerson,
        getStarship,
        getPersonImage,
        getStarshipImage} = this.apxuapiService;

      const personDetails = (
        <ItemDetails
          itemId={11}
          getData={getPerson}
          getImageUrl={getPersonImage}/>
      ); 

      const starshipDetails = (
        <ItemDetails
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipImage} />
      )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <Row
          left={personDetails}
          right={starshipDetails}>
          </Row>

        </div>
      </ErrorBoundry>
    );
  }
}