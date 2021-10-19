import s from './VendShop.module.css';
import React, {useState} from 'react';
import {ShopItem} from './ShopItem/ShopItem';

function VendShop(props) {
const [sum, setSum] = useState(props.finalSum);

  return (
    <div className={s.VendShop}>

      <div className={s.ShopBody}>
          <ShopItem sum={props.sum}/>
      </div>
    </div>
  );
}

export default VendShop;
