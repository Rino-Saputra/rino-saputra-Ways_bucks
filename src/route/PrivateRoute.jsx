import { Outlet, Navigate } from "react-router-dom";
import { dataLogin } from "../data/orderDataDumies/dataLogin";
export default function PrivateRoute(){

    return(
        dataLogin.isLogin ? <Outlet /> : <Navigate to='/'/>
    );
}