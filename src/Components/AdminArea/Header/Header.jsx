import React, { Component } from 'react'
import s from '../Admin.module.css';
import Admin from '../Admin';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';

export default class Header extends Component{

render(){
  return(
      <div className={s.Header}>
        <section>
          <div className={s.HeaderNav}>
            <NavLink className={s.NavLink} to="./Products" activeStyle={{color: '#6c80f0'}}>Продукты</NavLink>
            <NavLink className={s.NavLink} to="./Coins" activeStyle={{color: '#6c80f0'}}>Монеты</NavLink>
          </div>
        </section>
      </div>
    );
  }

}
