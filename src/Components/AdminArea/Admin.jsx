import React, { Component } from 'react'
import s from './Admin.module.css';
import Header from './Header/Header';
import ItemContent from './ItemsContent/ItemsContent';

export default class Admin extends Component{
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
    <div>
      <Header/>
      <ItemContent/>
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
