import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
function App() {
  return (
    <div className="App">
 
 <Header/>
    <Switch>

      <Route path="/">
       <HomePage/> 
      </Route>

       <Route path="/shop">
         <Shop/>
       </Route>

    </Switch>



    </div>
  );
}

export default App;
