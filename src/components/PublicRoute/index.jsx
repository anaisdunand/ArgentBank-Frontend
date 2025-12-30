import { Outlet, Navigate } from "react-router"

export default function PublicRoute({ token }) {
    return !token ? <Outlet /> : <Navigate to="/profile" />
}