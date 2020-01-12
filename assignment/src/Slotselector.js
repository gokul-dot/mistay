import React from 'react';
import style from './Slotselector.module.css';

function Slotselector() {
  return (
   <div>
    <select>
     <option> any guests?
        1Rooms/2Rooms</option>
      <option> ADD ROOM</option>
      <option>ROOM1   2 GUESTS   + -</option>
      </select>
     </div>
  );
}

export default Slotselector;
