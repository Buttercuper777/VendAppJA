import React, { Component, useState} from 'react'
import s from './Admin.module.css';
import Header from './Header/Header';
import ItemsContent from './ItemsContent/ItemsContent';
import CoinContent from './CoinsContent/CoinContent';
import ReactDOM from "react-dom";
import { BrowserRouter , Route, Switch } from "react-router-dom";

export default class Admin extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      path : ''
    }
  }

  handleChange() {
    this.setState({path: "sasas"});
  }

  render(){
    return(
      <BrowserRouter>
          <Header/>
          <Route path='/admin/'></Route>
          <Route path='/admin/Coins'><CoinContent /></Route>
          <Route path='/admin/Products'><ItemsContent /></Route>
      </BrowserRouter>
    );
  }
}


