import React, { Component, useState} from 'react'
import s from '../Admin.module.css';
import AdminCoin from './AdminCoin';
import CoinAdder from './CoinAdder';

const CoinContent = (props) => {
  const [moadlActive, setModalActive] = useState(false);
  
  return(
    <div>
      <CoinAdder active={moadlActive} setActive={setModalActive}/>
      <section>
        <div className={s.ItemsContent}>
          <button className={s.AddItemBtn} onClick={() => setModalActive(true)}>+</button>
          <AdminCoin/>
        </div>
      </section>
    </div>
    );
  }

export default CoinContent;
