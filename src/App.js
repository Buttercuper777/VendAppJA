import logo from './logo.svg';
import './App.css';
import Coin from './Components/CoinsManager/Coin/Coin'
import Vend from './Components/Vend/Vend'
import CoinsManager from './Components/CoinsManager/CoinsManager'

function App() {
  return (
    <div>
        <CoinsManager/>
      <section>
        <Vend/>
      </section>
    </div>
  );
}

export default App;
