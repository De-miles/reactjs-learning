import React, { useEffect } from 'react';
// import './App.scss';
import TodoFeature from 'features/Todo/pages';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import AlbumFeature from 'features/Album/pages';
import NotFound from 'components/NotFound';
import productApi from 'api/productApi';
import CounterFeature from 'features/Counter';
import Header from 'components/Header';
import ProductFeature from 'features/Product';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
