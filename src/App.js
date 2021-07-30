import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Card from './components/cards/Card';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './pages/about/About';
import Levelup from './pages/levelup/Levelup';
import Topup from './pages/topup/Topup';
import Admin from './pages/admin/Admin';
import Weekly from './pages/weekly/Weekly';
import Monthly from './pages/monthly/Monthly';
function App() {
  return (
      <BrowserRouter>
          <Nav />
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
            <Route path="/admin" component={Admin} />
          </Switch>
          <Switch>
            <Route path="/weekly" component={Weekly} />
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
