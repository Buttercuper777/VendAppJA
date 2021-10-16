import s from './VendShop.module.css';
import {ShopItem} from './ShopItem/ShopItem';

function VendShop(props) {
  return (
    <div className={s.VendShop}>

      <div className={s.ShopBody}>
          <ShopItem/>
      </div>
    </div>
  );
}

export default VendShop;
