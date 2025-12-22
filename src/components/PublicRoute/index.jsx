import { Outlet, Navigate } from "react-router"

export default function PrivateRoute({ token }) {
    return !token ? <Outlet /> : <Navigate to="/profile" />
}