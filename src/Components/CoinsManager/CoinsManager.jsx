import { Link, NavLink } from 'react-router-dom'
import s from './CoinsManager.module.css';
import React, { Component, useState} from 'react'
import Coin from './Coin/Coin'
import '../../App.css';

export default class CoinsManager extends Component{
  constructor(props){
    super(props);
    this.state = {
      sum : 0,
      coins: []
    }
  }

  addToSum = (val) =>{
    this.props.chengeSum(this.state.sum + val, val); //for parent sum & arr
    this.setState({sum: this.state.sum + val}); //sum for this

    //this.setState({coins: [...this.state.coins, val]}) //arr for this
  }

  render(){
    return(
      <div className={s.CoinsManager}>
        <section>
          <div className={s.CMHeader}>
            <h1>Для пополнения кошелька нажмите на кнопки ниже</h1>
          </div>

          <div className={s.CMList}>
            <Coin onAddCoin={this.addToSum}/>
          </div>
        </section>
      </div>
    );
  }
}

