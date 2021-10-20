import React, { Component } from 'react'
import s from './Coin.module.css';


export default class Coin extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      coin : 0
    };
  }



componentDidMount(){
  fetch("https://localhost:5001/api/Coins/")
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
    return (
      items.map(item =>(
      <div>
        <button className={s.coinBody} disabled={!item.state} key={item.id} onClick={() => this.props.onAddCoin(item.id)}>
            <a>{item.denomination}</a>
        </button>
      </div>
      )
    ))}
}
