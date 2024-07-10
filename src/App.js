import React from 'react';
// import './App.scss';
import TodoFeature from 'features/Todo/pages';
import { Route, Link, NavLink } from 'react-router-dom';
import AlbumFeature from 'features/Album/pages';

function App() {
  return (
    <div className="app">
      Header
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
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
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
