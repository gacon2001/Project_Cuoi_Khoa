
import React,{ Suspense } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import PageNotFound from './containers/PageNotFound';
import { renderRouteAdmin } from './routes';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
      <Switch>
        {renderRouteAdmin}

        <Route path="/page-not-found" component={PageNotFound}/>
      </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
