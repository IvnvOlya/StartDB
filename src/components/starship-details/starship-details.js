import React from 'react';

import '../starship-details.css';

const Starship = () => {
    return (
        <div>
            <img className="planet-image" src='https://starwars-visualguide.com/assets/img/planets/5.jpg' alt=''/>
            <h4>Starship Name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model</span>
              <span>DS</span>
            </li>
            <li className="list-group-item">
              <span className="term">Manufactura</span>
              <span>Imperial</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
    
    )
}

export default Starships;