import React from 'react';
import style from './PlaceSearch.module.css';

function PlaceSearch() {
  return (
   <div>
     <select className={style.ab}>
<option>WHERE TO?</option>
<option>BANGLORE</option>
<option>CHENNAI</option>
<option>MUMBAI</option>
<option>GOA</option>
       </select>
     </div>
  );
}

export default PlaceSearch;
