import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/style.scss';
// import Fallback from 'src/components/Fallback';
// import NotFound from 'src/components/404';
// import withTitle from 'src/components/TitleComponent';

// Pages

// const Home = lazy(() => import('../Home'));

import Home from './views/Home';
import Header from '../src/component/Header';
import Footer from '../src/component/Footer';
import Sells from './views/Sells';
import SearchPage from './views/SearchPage';
import Profile from './views/Profile';
import Shops from './views/Shops';
import Users from './views/Users';
import ProductSinge  from './views/ProductSingle';
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* Page routes */}
          <Route exact path='/' component={Home} />
          <Route exact path='/sells' component={Sells} />
          <Route exact path='/search' component={SearchPage} />
          <Route path='/profile' component={Profile} />
          <Route path='/users' component={Users} />
          <Route exact path='/shops' component={Shops} />
           <Route exact path='/product-single' component={ProductSinge} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
