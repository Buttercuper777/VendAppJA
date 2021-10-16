import React, { Component } from 'react'
import s from '../Admin.module.css';
import { BrowserRouter, NavLink } from 'react-router-dom';

export default class Header extends Component{
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
    <BrowserRouter>
      <div className={s.Header}>
        <section>
          <div className={s.HeaderNav}>
            <NavLink className={s.NavLink} to="/Products">Продукты</NavLink>
            <NavLink className={s.NavLink} to="/Coins">Монеты</NavLink>
          </div>
        </section>
      </div>
    </BrowserRouter>
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
