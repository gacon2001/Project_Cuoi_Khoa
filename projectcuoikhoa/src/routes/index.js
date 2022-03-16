import { lazy } from "react";
import AdminTemplate from "../containers/AdminTemplate/mainAdmin";
import HomeTemplate from "../containers/HomeTemplate/HomePage";
const routesAdmin = [];

const renderRouteAdmin = () => {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

const routesHome = [
  {
    //home
    exact: true,
    path: "/",
    component: lazy(() => import("../containers/HomeTemplate/HomePage"))
  },
  
];

const renderRouteHome = () => {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRouteAdmin, renderRouteHome };
