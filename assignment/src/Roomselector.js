import React from 'react';
import style from './Roomselector.module.css';

function Roomselector() {
  return (
   <div className={style.ac}>
     
     <ul>
       <li><input type="date" placeholder="CHECK-IN"/></li>
       <li>></li>
       <li><input type="date" placeholder="CHECK-IN"/></li>
       </ul>
     </div>
  );
}

export default Roomselector;
