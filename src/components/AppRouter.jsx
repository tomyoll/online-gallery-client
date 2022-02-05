import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import ProfilePage from "../pages/ProfilePage";

const AppRouter = observer(() => {
  return (
      <Switch >
        <Route path="/" component={HomePage} exact/>
        <Route path="/alternative" component={HomePage}/>
        <Route path="/auth" component={AuthPage}/>
        <Route path="/user" component={ProfilePage}/>
        <Redirect to="/"/>
      </Switch>
  );
});

export default AppRouter;
