import React, { Component } from 'react'
import s from '../Admin.module.css';
import { useState } from 'react';

const ItemAdder = ({active, setActive}) => {


  function onChState(state, id){
    let label = document.getElementById("_stater");
    if(state)
      label.innerHTML = "Состояние: Доступно(Не сохранено)"
    else
      label.innerHTML = "Состояние: Заблокировано(Не сохранено)"  
  } 


  // ADD ITEM
  function onCreateItem(dem, state, num){
    let editConfirm = window.confirm("Добавить новую купюру: " + dem + "₽");
      if(editConfirm){
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
          denomination: parseInt(dem),
          state: state,
          number: parseInt(num)
        })
      };

      fetch('https://localhost:5001/api/Coins/', requestOptions)
    }
  }

  return(
    <div className={active ? `${s.adderBody} ${s.active}` : `${s.adderBody}`} onClick={() => setActive(false)}>
      <div onClick={e => e.stopPropagation()}>
      <div className={s.AdminItem}>
        <p id='_stater' className={s.ItemId}>Состояние: Заблокировано(Не сохранено)</p>

        <div className={s.ItemData}>

          <div>
            <div className={s.ItemImg}>
              <p>{"X ₽"}</p>
            </div>
          </div>

          <div className={s.ItemInputBlock}>
            <input id='_price' placeholder="Достоинство" min="1" type="number" onInput={(e) => e.target.value = 
            !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null}/>
             <input id='_num' placeholder="Количество" min="1" type="number" onInput={(e) => e.target.value = 
            !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null}/>
            <input type="checkbox" id="_check" onClick={e => onChState(e.target.checked, e.target.id)}/>
          </div>
        </div>

        <div className={s.ItemBtnBlock}>
        <button className={s.EditBtn} onClick={ e => onCreateItem(
            document.getElementById("_price").value,
            document.getElementById("_check").checked,
            document.getElementById("_num").value 
          )}>Добавить</button>
          <button className={s.DelBtn} onClick={() => setActive(false)}>Отмена</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ItemAdder;

