import React, { Component, useState} from 'react'
import s from './Admin.module.css';
import Header from './Header/Header';
import ItemsContent from './ItemsContent/ItemsContent';

const Admin = (props) => {
  return(
    <div>
      <Header/>
      <ItemsContent/>
    </div>
    );
}

export default Admin;

