import React, { Component, useState} from 'react'
import s from './Admin.module.css';
import Header from './Header/Header';
import ItemsContent from './ItemsContent/ItemsContent';
import CoinContent from './CoinsContent/CoinContent';

const Admin = (props) => {
  return(
    <div>
      <Header/>
      <CoinContent />
      {/* <ItemsContent/> */}
    </div>
    );
}

export default Admin;

