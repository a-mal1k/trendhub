import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Movies from './components/Movies'
import MovieInfo from './components/MovieInfo'
import { Provider } from 'react-redux'
import store from './store'


const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/MovieInfo" component={MovieInfo} />
        </Switch>
        <footer className="footer">
          <div className="footer-copyright text-center py-3"><i className="fas fa-copyright"> 2021 TrendHub:</i>
            <Link to="#"> Developed by Arman</Link>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;