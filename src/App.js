import React from 'react'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Homes from './pages/Homes';
import Main from './pages/Main';
import Rentals from './pages/Rentals'



function App(length) {

  
  return (
    <Router>
    <ScrollToTop />
    <Switch>
    <Route path="/" exact component={Main}/>
    <Route path="/homes" component={Homes}/>
    <Route path="/rentals" component={Rentals}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    </Router>
  );
}

export default App;
