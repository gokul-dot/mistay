import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlaceSearch from './PlaceSearch';
import Roomselector from './Roomselector';
import Slotselector from './Slotselector';
import Button from './Button';

function App() {
  return (
    <div className="App">
     <ul>
       <li><PlaceSearch/></li>
       <li><Roomselector/></li>
       <li><Slotselector/></li>
       <li><Button/></li>
       </ul>
    </div>
  );
}

export default App;
