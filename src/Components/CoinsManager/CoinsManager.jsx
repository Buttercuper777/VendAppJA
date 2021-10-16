import { Link, NavLink } from 'react-router-dom'
import s from './CoinsManager.module.css';
import Coin from './Coin/Coin'
import '../../App.css';

function CoinsManager(props) {
  return (

      <div className={s.CoinsManager}>
        <section>
          <div className={s.CMHeader}>
            <h1>Для пополнения кошелька нажмите на кнопки ниже</h1>
          </div>

          <div className={s.CMList}>
            <Coin/>
          </div>
        </section>
      </div>
  );
}

export default CoinsManager;
