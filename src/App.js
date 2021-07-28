import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Card from './components/cards/Card';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './pages/about/About';

function App() {
  return (
      <BrowserRouter>
          <Nav />
          <Switch>
          <Route path="/about" component={About} />
          <Route exact="true" path="/" >
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
