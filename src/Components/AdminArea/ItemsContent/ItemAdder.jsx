import React, { Component } from 'react'
import s from '../Admin.module.css';
import { useState } from 'react';

const ItemAdder = ({active, setActive}) => {


  function onTodoChange(id, value){
    let elem = document.getElementById(id);
    if(value.length == 0)
      elem.src = "https://www.firestock.ru/wp-content/uploads/2013/07/shutterstock_116212378.jpg";
    else
      elem.src = value;
  }

  // ADD ITEM
  function onCreateItem(name, price, img, num){
    let editConfirm = window.confirm("Добавить новый продукт: " + name + "?");
      if(editConfirm){
        let imgPath;
        if(img == '')
          imgPath = "https://www.firestock.ru/wp-content/uploads/2013/07/shutterstock_116212378.jpg";
        else
          imgPath = img;

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
          name: name,
          price:  parseInt(price),
          imgPath: imgPath,
          number: parseInt(num) })
      };

      fetch('https://localhost:5001/api/ProdItems/', requestOptions)
    }
  }

  return(
    <div className={active ? `${s.adderBody} ${s.active}` : `${s.adderBody}`} onClick={() => setActive(false)}>

      <div className={s.AdminItem} onClick={e => e.stopPropagation()}>
        <p className={s.ItemId}>Добавление товара</p>

        <div className={s.ItemData}>

          <div>
            <div className={s.ItemImg}>
              <img id="new_item_img" src="https://www.firestock.ru/wp-content/uploads/2013/07/shutterstock_116212378.jpg" alt="New Image here"/>
            </div>
          </div>

          <div className={s.ItemInputBlock}>
            <input id="it_name" placeholder="Название" type="text"/>
            <input id="it_price" placeholder="Цена" type="number" />
            <input id="it_img" placeholder="URL Картинки" type="text" onChange={e => onTodoChange("new_item_img", e.target.value)} />
            <input id="it_num" placeholder="Количество" type="number" />
          </div>

        </div>

        <div className={s.ItemBtnBlock}>
          <button className={s.EditBtn} onClick={ e => onCreateItem(
            document.getElementById("it_name").value,
            document.getElementById("it_price").value,
            document.getElementById("it_img").value,
            document.getElementById("it_num").value
          )}>Добавить</button>
          <button className={s.DelBtn} onClick={() => setActive(false)}>Отмена</button>
        </div>
      </div>

    </div>
  )
}

export default ItemAdder;


  // constructor({active, setActive}){

  // }
  
//   onTodoChange(id, value, def){
//     const defSrc = arguments[2];
//     let elem = document.getElementById(id + 'img');
//     if(value.length == 0)
//       elem.src = defSrc;
//     else
//       elem.src = value;
//   }


//   // DELETE ITEM
//   onDelItem(id, dName){   
//     let delConfirm = window.confirm("Удалить продукт: " + dName + "?");

//     if(delConfirm){
//       fetch('https://localhost:5001/api/ProdItems/' + id, { method: 'DELETE' });
//       let x = document.getElementById(id + '_item');
//       x.style.transition = "0.3s";
//       x.style.opacity = "0";
//       setTimeout(function(){
//         x.style.display = "none";
//       },300)
//     }

//   }

//   // EDIT ITEM
//   onPatchItem(id, defImg, dName){
//     let editConfirm = window.confirm("Внести изменения для: " + dName + "?");
//       if(editConfirm){
//         let imgPath;
//         if(document.getElementById(id + '_imgPath').value == '')
//           imgPath = defImg;
//         else
//           imgPath = document.getElementById(id + '_imgPath').value;

//         const requestOptions = {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept' : 'application/json',
//             'Access-Control-Allow-Origin': '*'
//           },
//           body: JSON.stringify({ id: id,
//           name: document.getElementById(id + '_name').value,
//           price:  parseInt(document.getElementById(id + '_price').value),
//           imgPath: imgPath,
//           number: parseInt(document.getElementById(id + '_num').value) })
//       };

//       // console.log(requestOptions.body);

//       fetch('https://localhost:5001/api/ProdItems/' + id, requestOptions)
//     }
//   }

// componentDidMount(){
//   fetch("https://localhost:5001/api/ProdItems")
//   .then(res => res.json())
//   .then(
//     (result) => {
//       this.setState({
//         isLoaded: true,
//         items: result
//       });
//     }, 
//     (error) => {
//       this.setState({
//         isLoaded: true,
//         error
//       });
//     }
//   )
// }

// render(){
//   return(
//     <div className={s.adderBody}>
//       {/* <div className={s.AdminItem} id={item.id + '_item'}>
//         <p className={s.ItemId}>Name: {item.name}; Price: {item.price}; Num:  {item.number}</p>

//         <div className={s.ItemData}>

//           <div>
//             <div className={s.ItemImg}>
//               <img id={item.id + 'img'} src={item.imgPath} alt={item.name}/>
//             </div>
//           </div>

//           <div className={s.ItemInputBlock}>
//             <input id={item.id + '_name'} placeholder="Название" type="text"/>
//             <input id={item.id + '_price'} placeholder="Цена" type="number" />
//             <input id={item.id + '_imgPath'} placeholder="URL Картинки" type="text" onChange={e => this.onTodoChange(item.id, e.target.value, item.imgPath)} />
//             <input id={item.id + '_num'} placeholder="Количество" type="number" />
//           </div>

//         </div>

//         <div className={s.ItemBtnBlock}>
//           <button className={s.EditBtn} onClick={ e => this.onPatchItem(item.id, item.imgPath, item.name)}>Изменить</button>
//           <button className={s.DelBtn} onClick={ e => this.onDelItem(item.id, item.name)}>Удалить</button>
//         </div>

//       </div> */}
//       wdedwedwed
//     </div>
//     );
//   }

// }
