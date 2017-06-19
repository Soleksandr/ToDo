import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoListWrapper from './../components/TodoListWrapper';

export default () => (
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" component={TodoListWrapper} />
  //     <Route path="/complited" component={TodoListWrapper} />
  //     <Route path="/incomplited" component={TodoListWrapper} />
  //   </Switch>
  // </BrowserRouter>
  <BrowserRouter>
    <Switch>
      <Route exact path="/:type?" component={TodoListWrapper} />
    </Switch>
  </BrowserRouter>
);
