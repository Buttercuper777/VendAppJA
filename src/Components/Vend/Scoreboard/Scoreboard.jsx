import React, { Component, useState} from 'react'
import s from './Scoreboard.module.css';
import SBOperations from './SBOperations';
import CoinsManager from './../../CoinsManager/CoinsManager';

export default class Scoreboard extends Component{
constructor(props){
  super(props);
  this.state = {
    coins: [],
    sum : 0
  }
}
setNewSum = (ns, val) =>{
  this.setState({sum: ns});
  this.setState({coins: [...this.state.coins, val]});
}

componentDidUpdate(prevState){
  if(prevState.sum !== this.state.sum)
    this.props.newSum(this.state.sum);
}

  render(){
    return (
        <div className={s.ScoreboardBody}>
          <CoinsManager chengeSum={this.setNewSum}/>
          <p>Вы внесли сумму: {this.state.sum + "₽"} </p>
          <ul><SBOperations outArr={this.state.coins}/></ul>
        </div>
    );
  }
}

Component.defaultProps = {sum : 0};


