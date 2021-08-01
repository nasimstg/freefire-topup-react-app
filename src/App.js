import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Card from './components/cards/Card';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './pages/about/About';
import Levelup from './pages/levelup/Levelup';
import Topup from './pages/topup/Topup';
import Weekly from './pages/weekly/Weekly';
import Monthly from './pages/monthly/Monthly';
import Admin from './components/Admin'
import Promo from './pages/promo/Promo';
import Airdrop from './pages/airdrop/Airdrop';
function App() {
  return (
      <BrowserRouter>
          <Nav />
          <React.StrictMode>
          <Admin />
          </React.StrictMode>,
          <Switch>
          <Route path="/topup" component={Topup} />
          </Switch>
          <Switch>
          <Route path="/about" component={About} />
          </Switch>
          <Switch>
            <Route path="/leveluppass" component={Levelup} />
          </Switch>
          <Switch>
            <Route path="/airdrop" component={Airdrop} />
          </Switch>
          <Switch>
            <Route path="/weekly" component={Weekly} />
          </Switch>
          <Switch>
            <Route path="/promoOffer" component={Promo} />
          </Switch>
          <Switch>
            <Route path="/monthly" component={Monthly} />
          </Switch>
          <Switch>
          <Route exact={true} path="/" >
          <Header />
          <div className="cardContinerApp">
              <Card />
          </div>
          </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
