import React, { Component, useState} from 'react'
import s from './Admin.module.css';
import Header from './Header/Header';
import ItemsContent from './ItemsContent/ItemsContent';
import CoinContent from './CoinsContent/CoinContent';
import { BrowserRouter , Route, Switch } from "react-router-dom";

export default class Admin extends Component{
  render(){
    return(
      <div>
      <BrowserRouter>
        <Header/>
        <Route path='/admin/'></Route>
        <Route path='/admin/Coins'><CoinContent /></Route>
        <Route path='/admin/Products'><ItemsContent /></Route>
      </BrowserRouter>
      sdcsdcsdc<br/>
      sdcsdcsdc<br/>
      sdcsdcsdc<br/>
      sdcsdcsdc<br/>
      sdcsdcsdc<br/>
      sdcsdcsdc<br/>

      sdcsdcsdc<br/>
      sdcsdcsdc<br/>

      </div>
    );
  }
}


