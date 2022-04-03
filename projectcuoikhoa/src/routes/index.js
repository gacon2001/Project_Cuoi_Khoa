import { lazy } from "react";
import AdminTemplate from "../containers/AdminTemplate/mainAdmin";
import HomeTemplate from "../containers/HomeTemplate";

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
  {
    exact:true,
    path:'/listworks/:type',
    component:lazy(()=>import("../containers/HomeTemplate/ListWorks"))
  },
  {
    exact:true,
    path:`/subtypejob/listworks/:type`,
    component:lazy(()=>import("../containers/HomeTemplate/ListWorks"))
  },
  {
    exact:true,
    path:'/subtypejobs/:subtype',
    component:lazy(()=>import("../containers/HomeTemplate/Typejobs/SubTypeJobs"))
  }
  
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
