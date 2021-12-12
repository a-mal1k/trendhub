import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import  Fallback from './components/Fallback'

import store from './store'
const Movies = React.lazy(() => import('./components/movieContainer/Movies'));
const Series = React.lazy(()=> import('./components/seriesContainer/Series'));
const MovieInfo = React.lazy(() => import('./components/movieContainer/MovieInfo'));
const ShowInfo = React.lazy(()=>import('./components/seriesContainer/ShowInfo'));



const App = () => {

  return (
    <Provider store={store}>
      <div>
      <React.Suspense fallback={<Fallback/>}>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/Movies" component={Movies} />
          <Route exact path="/Series" component={Series} />
          <Route path="/MovieInfo" component={MovieInfo} />
          <Route path="/ShowInfo" component={ShowInfo} />
        </Switch>
       
        <footer className="footer">
          <div className="footer-copyright text-center py-3"><i className="fas fa-copyright"> 2021 TrendHub:</i>
            <Link to="#"> Developed by Arman</Link>
          </div>
        </footer>
        </React.Suspense>
      </div>
    </Provider>
  );
}

export default App;


