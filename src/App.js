import React from 'react';
// import './App.scss';
import TodoFeature from 'features/Todo/pages';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import AlbumFeature from 'features/Album/pages';
import NotFound from 'components/NotFound';

function App() {
  return (
    <div className="app">
      Header
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          Albums
        </NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
