import React, { Component } from 'react';

import ListItem from'../item-list';
import PersonDetails from '../item-details';
import Row from '../row';
import './people-page.css';
import ErrorIndicator from '../error-indicator/error-indicator';
import ApxuapiService from '../../services/apxuapi-service';
import ErrorBoundry from '../error-boundry';


export default class PeoplePage extends Component {

    apxuapiService= new ApxuapiService();

    state= {
        selectedPerson: 3,
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
          selectedPerson
        });
      };

    render() {

        if(this.state.hasError){
            return <ErrorIndicator/>;
        }

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )

        const ItemList = (
            <ListItem 
                onItemSelected={this.onPersonSelected}
                getData={this.apxuapiService.getAllPeople}>

                    {(i) => (
                     `${i.name} (${i.birthYear})`
                    )}
            </ListItem>
        );

        return (
          <ErrorBoundry>
            <Row left={ItemList} right={personDetails}/>
          </ErrorBoundry>
        );
    };
};