
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import HomePage from '../pages/HomePage';

const AppRouter = observer(() => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Redirect to="/" />
    </Switch>
  );
});

export default AppRouter;
