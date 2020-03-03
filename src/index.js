import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import * as serviceWorker from './serviceWorker';

const app = (
  <>
  <Header />
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="pdp" component={pages/Pdp} /> */}
      <Route component={NotFound} />
    </Switch>
  </Router>
  <Footer />
  </>
);

ReactDOM.render(app, document.querySelector('body'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
