import react from 'react';
import SBoard from './Scoreboard/Scoreboard';
import VShop from './VendShop/VendShop';
import s from './Vend.module.css';


function Vend(props) {
  return (
    <div>
      <div className={s.vendBody}>
          <VShop/>
          <SBoard/>
      </div>
    </div>
  );
}

export default Vend;
