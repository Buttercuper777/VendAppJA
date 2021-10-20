import React, { Component } from 'react'
import s from './ShopItem.module.css';

export class ShopItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
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

canBuyChecker(price, itemId){
  debugger 
  let monArr = (this.props.sum);
  let monSum = ((this.props.sum).reduce((a, b) => a + b, 0)); //here!!

  if(monSum.reduce((a, b) => a + b, 0) >= price){ 
    let reqContext ={
    "prodId" : itemId,
    "coins": monArr
    }
  }
  else  
    alert('Недостаточно средств для покупки');
}

  render(){
    const {error, isLoaded, items} = this.state;
    if (error){
      return <p>Error {error.message}</p>
    }
    return(
      items.map(item => (
      <button className={s.ShopItem} key={item.id} onClick={() => this.canBuyChecker(item.price, item.id)}>
        <div className={s.itemImg}>

          <div className={s.BShow}>
            <p>Купить</p>
          </div>

          <img src={item.imgPath} alt={item.name} />
        </div>

        <div className={s.itemDisc}>
          <div>
            <a>{item.name}</a>
            <p>{item.number}шт</p>
          </div>
          <p className={s.price}>{item.price}₽</p>
        </div>
      </button>
      ))
    )
  }
}

