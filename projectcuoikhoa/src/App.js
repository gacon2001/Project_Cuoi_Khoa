
import LoginPage from 'containers/AdminTemplate/LoginPage';
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
        {renderRouteAdmin()}
        {/* route login đưa vào app.js vì phải login đc mới vào các trang của admin đc, ko để ở route vì login r mà lại đi vào login thì vô lí */}
        <Route path="/login" component={LoginPage} />
        <Route path="/page-not-found" component={PageNotFound}/>
      </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
