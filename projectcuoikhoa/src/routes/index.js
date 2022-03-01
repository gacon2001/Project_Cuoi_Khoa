import {lazy} from "react";
import AdminTemplate from "../containers/AdminTemplate/mainAdmin";

const routesAdmin = [];

const renderRouteAdmin = () => {
    return routesAdmin.map((route, index) => {
        return(
            <AdminTemplate key={index} exact={route.exact} path={route.path} component={route.component}/>
        )
    })
}

export {renderRouteAdmin}