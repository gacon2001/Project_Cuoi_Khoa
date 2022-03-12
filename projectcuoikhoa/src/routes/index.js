import { lazy } from "react";
import AdminTemplate from "containers/AdminTemplate/mainAdmin";

const routesAdmin = [
  {
    exact: true,
    path: "/admin",
    component: lazy(() =>
      import("containers/AdminTemplate/_components/NavbarAdmin")
    ),
  },
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("containers/AdminTemplate/Dashboard")),
  },
  {
    exact: false,
    path: "/list-user",
    component: lazy(() => import("containers/AdminTemplate/ListUser")),
  },
  {
    exact: false,
    path: "/edit-user/:_id",
    component: lazy(() => import("containers/AdminTemplate/EditUserAdmin")),
  },
  {
    exact: false,
    path: "/add-user-admin",
    component: lazy(() => import("containers/AdminTemplate/AddUserAdmin")),
  },
  // {
  //   exact: false,
  //   path: "/login",
  //   component: lazy(()=> import("containers/AdminTemplate/LoginPage"))
  // },
  {
    exact: false,
    path: "/signup",
    component: lazy(() => import("containers/AdminTemplate/SignUpPage")),
  },
  {
    exact: false,
    path: "/profile/:_id",
    component: lazy(() => import("containers/AdminTemplate/ProfilePage")),
  },
  {
    exact: false,
    path: "/edit-profile",
    component: lazy(() => import("containers/AdminTemplate/EditProfilePage")),
  },
  {
    exact: false,
    path: "/list-jobs",
    component: lazy(() => import("containers/AdminTemplate/ListJobsPage")),
  },
  {
    exact: false,
    path: "/detail-jobs/:_id",
    component: lazy(() => import("containers/AdminTemplate/DetailJobPage")),
  },
  {
    exact: false,
    path: "/edit-jobs/:_id",
    component: lazy(() => import("containers/AdminTemplate/EditJobsPage")),
  },
  {
    exact: false,
    path: "/add-jobs",
    component: lazy(() => import("containers/AdminTemplate/AddJobsPage")),
  },
  {
    exact: false,
    path: "/list-booking-jobs",
    component: lazy(() => import("containers/AdminTemplate/ListBookingJobs")),
  },
  {
    exact: false,
    path: "/list-subType-jobs/:IDsubType",
    component: lazy(() => import("containers/AdminTemplate/ListSubTypeJobs")),
  },
  {
    exact: false,
    path: "/list-type-jobs/:IDType",
    component: lazy(() => import("containers/AdminTemplate/ListTypeJobs")),
  },
];

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

export { renderRouteAdmin };
