import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
