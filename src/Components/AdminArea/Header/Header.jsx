import React, { Component } from 'react'
import s from '../Admin.module.css';
import { BrowserRouter, Link, NavLink, Route} from 'react-router-dom';

export default class Header extends Component{

render(){
  const isActive = (path, match, location) => !!(match || path === location.pathname);
  return(
      <div className={s.Header}>
        <section>
          <div className={s.HeaderNav}>
            <NavLink className={s.NavLink} to="/Admin/Products" activeStyle={{color: '#6c80f0'}} isActive={isActive.bind(this, '/Admin/Products')}>Продукты</NavLink>
            <NavLink className={s.NavLink} to="/Admin/Coins" activeStyle={{color: '#6c80f0'}} isActive={isActive.bind(this, '/Admin/Coins')}>Монеты</NavLink>
          </div>
        </section>
      </div>
    );
  }

}
