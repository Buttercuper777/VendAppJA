import Vend from './Vend/Vend'
import CoinsManager from './CoinsManager/CoinsManager'
import { BrowserRouter, Route } from 'react-router-dom';


function UserArea() {
  return (
    <BrowserRouter>
      <div>
        <section>
          <Route path="/" component={Vend}/>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default UserArea;
