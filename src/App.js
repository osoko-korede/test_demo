import React from 'react';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import Home from './components/pages/Home';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
const LazyHome = React.lazy(() => import('./components/pages/Home'));
const LazyServices = React.lazy(() => import('./components/pages/Services'));
const LazyProducts = React.lazy(() => import('./components/pages/Products'));
const LazySignUp = React.lazy(() => import('./components/pages/SignUp'));

function App() {
  return (
      <>
        <Router>
          <React.Suspense fallback='I am lazy loading....'>
            <Navbar />
            <Switch>
              <Route path='/' exact component={LazyHome}/>
              <Route path='/services' component={LazyServices} />
              <Route path='/products' component={LazyProducts} />
              <Route path='/sign-up' component={LazySignUp} />
            </Switch>
          </React.Suspense>
        </Router>
      </>
  );
}

export default App;
