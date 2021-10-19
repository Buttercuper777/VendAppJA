import React, {useState} from 'react';
import SBoard from './Scoreboard/Scoreboard';
import VShop from './VendShop/VendShop';
import s from './Vend.module.css';


function Vend(props) {
  const [finalSum, sumSetter] = useState([]);
 
  return (
    <div>
      <div className={s.vendBody}>
          <VShop sum = {finalSum}/>
          <SBoard newSum={sumSetter}/>
      </div>
    </div>
  );
}

export default Vend;
