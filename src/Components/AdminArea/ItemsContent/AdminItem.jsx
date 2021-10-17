import React, { Component } from 'react'
import s from '../Admin.module.css';
import { useState } from 'react';

// function useForceUpdate(){
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => value + 1); // update the state to force render
// }

export default class AdminItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  
  onTodoChange(id, value, def){
    const defSrc = arguments[2];
    let elem = document.getElementById(id + 'img');
    if(value.length == 0)
      elem.src = defSrc;
    else
      elem.src = value;
  }

  onDelItem(id, dName){
    let delConfirm = window.confirm("Удалить продукт: " + dName + "?");

    if(delConfirm){
      fetch('https://localhost:5001/api/ProdItems/' + id, { method: 'DELETE' });
      let x = document.getElementById(id + '_item');
      x.style.transition = "0.3s";
      x.style.opacity = "0";
      setTimeout(function(){
        x.style.display = "none";
      },300)
    }

  }

componentDidMount(){
  fetch("https://localhost:5001/api/ProdItems")
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        items: result
      });
    }, 
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}

render(){
  const {error, isLoaded, items} = this.state;
  if (error){
    return <p>Error {error.message}</p>
  }
  return(
    items.map(item => (
    <div className={s.AdminItem} id={item.id + '_item'}>
      <p className={s.ItemId}>Name: {item.name}; Price: {item.price}; Num:  {item.number}</p>

      <div className={s.ItemData}>

        <div>
          <div className={s.ItemImg}>
            <img id={item.id + 'img'} src={item.imgPath} alt={item.name}/>
          </div>
        </div>

        <div className={s.ItemInputBlock}>
          <input type="text" placeholder="Название" type="text"/>
          <input placeholder="Цена" type="number" />
          <input placeholder="URL Картинки" type="text" onChange={e => this.onTodoChange(item.id, e.target.value, item.imgPath)} />
          <input placeholder="Количество" type="number" />
        </div>

      </div>

      <div className={s.ItemBtnBlock}>
        <button className={s.EditBtn}>Изменить</button>
        <button className={s.DelBtn} onClick={ e => this.onDelItem(item.id, item.name)}>Удалить</button>
      </div>

    </div>
    ))
    );
  }

}
