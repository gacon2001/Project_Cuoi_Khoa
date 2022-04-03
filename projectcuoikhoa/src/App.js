import SignInPage from 'containers/AdminTemplate/SignInPage';
import React,{ Suspense } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import PageNotFound from './containers/PageNotFound';
import { renderRouteAdmin, renderRouteHome } from "./routes";

function App() {
  return (
    <Suspense
      fallback={
        <div className="codepad-logo">
          <div className="logo" />
        </div>
      }
    >
      <BrowserRouter>
      <Switch>
        {renderRouteAdmin()}
         {renderRouteHome()}
        {/* route login đưa vào app.js vì phải login đc mới vào các trang của admin đc, ko để ở route vì login r mà lại đi vào login thì vô lí */}
        <Route path="/signin" component={SignInPage} />
        <Route path="/page-not-found" component={PageNotFound}/>
      </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
