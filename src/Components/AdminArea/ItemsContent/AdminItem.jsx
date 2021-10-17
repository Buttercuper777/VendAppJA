import React, { Component } from 'react'
import s from '../Admin.module.css';
import { useState } from 'react';
import ItemAdder from './ItemAdder';

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


  // DELETE ITEM
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

  // EDIT ITEM
  onPatchItem(id, defImg, dName){
    let editConfirm = window.confirm("Внести изменения для: " + dName + "?");
      if(editConfirm){
        let imgPath;
        if(document.getElementById(id + '_imgPath').value == '')
          imgPath = defImg;
        else
          imgPath = document.getElementById(id + '_imgPath').value;

        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ id: id,
          name: document.getElementById(id + '_name').value,
          price:  parseInt(document.getElementById(id + '_price').value),
          imgPath: imgPath,
          number: parseInt(document.getElementById(id + '_num').value) })
      };

      // console.log(requestOptions.body);

      fetch('https://localhost:5001/api/ProdItems/' + id, requestOptions)
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
    <div>
      <div className={s.AdminItem} id={item.id + '_item'}>
        <p className={s.ItemId}>Name: {item.name}; Price: {item.price}; Num:  {item.number}</p>

        <div className={s.ItemData}>

          <div>
            <div className={s.ItemImg}>
              <img id={item.id + 'img'} src={item.imgPath} alt={item.name}/>
            </div>
          </div>

          <div className={s.ItemInputBlock}>
            <input id={item.id + '_name'} placeholder="Название" type="text"/>
            <input id={item.id + '_price'} placeholder="Цена" type="number" />
            <input id={item.id + '_imgPath'} placeholder="URL Картинки" type="text" onChange={e => this.onTodoChange(item.id, e.target.value, item.imgPath)} />
            <input id={item.id + '_num'} placeholder="Количество" type="number" />
          </div>

        </div>

        <div className={s.ItemBtnBlock}>
          <button className={s.EditBtn} onClick={ e => this.onPatchItem(item.id, item.imgPath, item.name)}>Изменить</button>
          <button className={s.DelBtn} onClick={ e => this.onDelItem(item.id, item.name)}>Удалить</button>
        </div>
      </div>
    </div>
    ))
    );
  }

}
