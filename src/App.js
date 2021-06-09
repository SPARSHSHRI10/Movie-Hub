import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import MainNav from './components/MainNav';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';

const App=()  =>{
  return (
    <>
      <Header />
      <div className = "app">
        <Container> 
          <Switch>
            <Route path = '/' component={Trending} exact/>
            <Route path = '/movies' component={Movies} />
            <Route path = '/series' component={Series} />
            <Route path = '/search' component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
