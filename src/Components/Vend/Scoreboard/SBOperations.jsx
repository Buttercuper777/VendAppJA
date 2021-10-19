import React, { Component, useState} from 'react'
import s from './Scoreboard.module.css'

export default class SBOperations extends Component{
constructor(props){
  super(props);
  this.state = {
    coins: [],
    sum: 0
  }
}


coinsTranslater(arr){
    var counts = [];
    var res = [];

    for (var i in arr) {
        if (counts[arr[i]]) {
            (counts[arr[i]]++);
        } else {
            (counts[arr[i]] = 1)
        }
    }
    var j = 0;
    for (var i in counts) {
        res[j++] = {
            den: i,
            num: counts[i]
        };
    }
    return res;
}

componentDidUpdate(prevProps, prevState){
    if(prevProps !== this.props){
        this.setState({coins: this.coinsTranslater(this.props.outArr)});
        //this.setState({coins: (this.props.outArr)});
    }
}

  render(){
    const {coins} = this.state;
    return (
      coins.map(coin => (
            <li>{coin.den + "₽"} : {coin.num + "шт"}</li>
      ))
    );
  }
}



