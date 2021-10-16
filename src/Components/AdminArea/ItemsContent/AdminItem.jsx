import React, { Component } from 'react'
import s from '../Admin.module.css';


export default class AdminItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
}

// componentDidMount(){
//   fetch("https://localhost:5001/api/Account?key=password123")
//   .then(
//     function(response){
//       console.log(response.status);
//     }
//   )
  // fetch("https://localhost:5001/api/Account/")
  // .then(res => res.json())
  // .then(
  //   (result) => {
  //     this.setState({
  //       isLoaded: true,
  //       status: result.status
  //     });
  //   }, 
  //   (error) => {
  //     this.setState({
  //       isLoaded: true,
  //       error
  //     });
  //   }
  // )


render(){
  return(
    <div className={s.AdminItem}>
      <p className={s.ItemId}>Id: 1</p>

      <div className={s.ItemData}>

        <div>
          <div className={s.ItemImg}>
            <img src="https://www.coca-cola.ru/content/dam/one/ru/ru/2021/07/new-coca-cola--design/0-cola-zahod-kaizen-1020_new.jpg" alt="cola" />
          </div>
        </div>

        <div className={s.ItemInputBlock}>
          <input placeholder="Название" type="text" />
          <input placeholder="Цена" type="number" />
          <input placeholder="URL Картинки" type="text" />
          <input placeholder="Количество" type="number" />
        </div>

      </div>

      <div className={s.ItemBtnBlock}>
        <button className={s.EditBtn}>Изменить</button>
        <button className={s.DelBtn}>Удалить</button>
      </div>

    </div>
    );
    // const {error, isLoaded, status} = this.state;
    // if (error){
    //   return <p>Error {error.message}</p>
    // }

    // if (status)
    //   return <p>{status}</p>
    
    // else{

    
    // return (
    //   items.map(item =>(
    //   <div>
    //     <button className={s.coinBody} disabled={!item.state} key={item.id}>
    //         <a>{item.denomination}</a>
    //     </button>
    //   </div>
    //   )
    // ))}

  }

}
