import React, { Component } from 'react'
import s from '../Admin.module.css';
import { useState } from 'react';

export default class AdminCoin extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      chenged : false
    };
  }

  // EDIT ITEM
  onPatchItem(id, dName){
    let editConfirm = window.confirm("Внести изменения для: " + dName + "₽ ?");
      if(editConfirm){
        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ id: id,
          denomination:  parseInt(document.getElementById(id + '_price').value),
          state: (document.getElementById(id + '_check').checked)
          })
        }

      //console.log(requestOptions.body);

      fetch('https://localhost:5001/api/Coins/' + id, requestOptions);
      this.setState({chenged : this.state.chenged ? false : true});
    }
  }

    // DELETE COIN
    onDelItem(id, dName){   
      let delConfirm = window.confirm("Удалить купюру: " + dName + "?");
  
      if(delConfirm){
        fetch('https://localhost:5001/api/Coins/' + id, { method: 'DELETE' });
        let x = document.getElementById(id + '_item');
        x.style.transition = "0.3s";
        x.style.opacity = "0";
        setTimeout(function(){
          x.style.display = "none";
        },300)
      }
  
    }
  
    onChState(state, id){
      let label = document.getElementById(id + "_stater");
      if(state)
        label.innerHTML = "Состояние: Доступно(Не сохранено)"
      else
        label.innerHTML = "Состояние: Заблокировано(Не сохранено)"  
    } 

componentDidMount(){
  fetch("https://localhost:5001/api/Coins")
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        items: result,
        chenged : false
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

componentDidUpdate(){
  fetch("https://localhost:5001/api/Coins")
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        items: result,
        chenged : false
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
  const {error, isLoaded, items, chenged} = this.state;
  if (error){
    return <p>Error {error.message}</p>
  }
  return(
    items.map(item => (
    <div>
      <div className={s.AdminItem} id={item.id + '_item'}>
        <p id={item.id + '_stater'} className={s.ItemId}>Состояние: {!item.state ? "Заблокировано" : "Доступно"}</p>

        <div className={s.ItemData}>

          <div>
            <div className={s.ItemImg}>
              <p>{item.denomination + "₽"}</p>
            </div>
          </div>

          <div className={s.ItemInputBlock}>
            <input id={item.id + '_price'} placeholder="Достоинство" min="1" type="number" onInput={(e) => e.target.value = 
 !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null}/>
            <input type="checkbox" id={item.id + "_check"} onClick={e => this.onChState(e.target.checked, item.id)}/>
          </div>

        </div>

        <div className={s.ItemBtnBlock}>
          <button className={s.EditBtn} onClick={ e => this.onPatchItem(item.id, item.denomination)}>Изменить</button>
          <button className={s.DelBtn} onClick={ e => this.onDelItem(item.id, item.denomination)}>Удалить</button>
        </div>
      </div>
    </div>
    ))
    );
  }

}
