import React, { Component } from 'react';
import ApxuapiService from '../../services/apxuapi-service';
import ErrorButton from '../error-button/error-button';


import './item-details.css';

export default class ItemDetails extends Component {

  ApxuapiService= new ApxuapiService();

  state= {
    item: null,
    image: null
  
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }


  updateItem() {
  const {itemId, getData, getImageUrl} = this.props;
  if(!itemId) {
    return;
  }

  getData(itemId)
  .then((item) => {
    this.setState({
      item,
      image: getImageUrl(item)
    });
  });
}


  render() {

    if (!this.state.item) {
      return <span>Select a person from a list</span>;
    }
    const {id, name, image, gender, 
          birthYear, eyeColor} = this.state.item;

    return (
        <div className="random-person jumbotron rounded">
            <img className="person-image" alt=""
            src={image} />

          <div>
            <h4>{name}</h4>
            
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth year</span>
                <span>{birthYear}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye color</span>
                <span>{eyeColor}</span>
              </li>
            </ul>
            <ErrorButton />
          </div>
        </div>
    
    );
}
}

