import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PageNotFound from "./containers/PageNotFound";
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
          <Route path="/page-not-found" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
