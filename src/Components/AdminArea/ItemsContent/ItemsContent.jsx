import React, { Component, useState} from 'react'
import s from '../Admin.module.css';
import AdminItem from './AdminItem';
import ItemAdder from './ItemAdder';

const ItemsContent = (props) => {
  const [moadlActive, setModalActive] = useState(false);
  
  return(
    <div>
      <ItemAdder active={moadlActive} setActive={setModalActive}/>
      <section>
        <div className={s.ItemsContent}>
          <button className={s.AddItemBtn} onClick={() => setModalActive(true)}>+</button>
          <AdminItem/>
        </div>
      </section>
    </div>
    );
  }

export default ItemsContent;
