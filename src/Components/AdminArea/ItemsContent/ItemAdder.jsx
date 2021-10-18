import React, { Component } from 'react'
import s from '../Admin.module.css';
import { useState } from 'react';

const ItemAdder = ({active, setActive}) => {


  function onTodoChange(id, value){
    let elem = document.getElementById(id);
    if(value.length == 0)
      elem.src = "https://www.firestock.ru/wp-content/uploads/2013/07/shutterstock_116212378.jpg";
    else
      elem.src = value;
  }

  // ADD ITEM
  function onCreateItem(name, price, img, num){
    let editConfirm = window.confirm("Добавить новый продукт: " + name + "?");
      if(editConfirm){
        let imgPath;
        if(img == '')
          imgPath = "https://www.firestock.ru/wp-content/uploads/2013/07/shutterstock_116212378.jpg";
        else
          imgPath = img;

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
          name: name,
          price:  parseInt(price),
          imgPath: imgPath,
          number: parseInt(num) })
      };

      fetch('https://localhost:5001/api/ProdItems/', requestOptions)
    }
  }

  return(
    <div className={active ? `${s.adderBody} ${s.active}` : `${s.adderBody}`} onClick={() => setActive(false)}>

      <div className={s.AdminItem} onClick={e => e.stopPropagation()}>
        <p className={s.ItemId}>Добавление товара</p>

        <div className={s.ItemData}>

          <div>
            <div className={s.ItemImg}>
              <img id="new_item_img" src="https://www.firestock.ru/wp-content/uploads/2013/07/shutterstock_116212378.jpg" alt="New Image here"/>
            </div>
          </div>

          <div className={s.ItemInputBlock}>
            <input id="it_name" placeholder="Название" type="text"/>
            <input id="it_price" placeholder="Цена" type="number" />
            <input id="it_img" placeholder="URL Картинки" type="text" onChange={e => onTodoChange("new_item_img", e.target.value)} />
            <input id="it_num" placeholder="Количество" type="number" />
          </div>

        </div>

        <div className={s.ItemBtnBlock}>
          <button className={s.EditBtn} onClick={ e => onCreateItem(
            document.getElementById("it_name").value,
            document.getElementById("it_price").value,
            document.getElementById("it_img").value,
            document.getElementById("it_num").value
          )}>Добавить</button>
          <button className={s.DelBtn} onClick={() => setActive(false)}>Отмена</button>
        </div>
      </div>

    </div>
  )
}

export default ItemAdder;
