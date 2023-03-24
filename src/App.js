import logo from './logo.svg';
import './App.css';
import Data from './Component/Data/data';
import Slide from './Component/Slideshow/slide';
import Login from './Component/Login/login';
import Register from './Component/Register/register';
import dashboard from './Component/Home/dashboard'
import Food from './Component/Data/data';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from './/Component/Footer/footer';
import Slides from './Component/Slideshow/slide';
import store from './Component/Redux/store';
import Cart from './Component/Cart/cart';
import Single from './Component/Data/Singlepage/single';
import Dashboard from './Component/Home/dashboard';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'><Register /></Route>
            <Route path='/login'> <Login /></Route>
            < Route path='/dashboard'>< Dashboard/></Route>
            <Route path='/cart'><Cart /></Route>
            <Route path='/single'><Single /></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
