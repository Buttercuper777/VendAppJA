import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './Components/AdminArea/Admin'
import UserArea from './Components/UserArea';

function App() {
  return (
    <BrowserRouter>
      <Route component={UserArea} path="//"/>
      <Route component={Admin} path="/Admin"/>
    </BrowserRouter>
  );
}

export default App;
