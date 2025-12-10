import { Navigate } from "react-router"

export default function PrivateRoute({ children, token }) {
    return token ? children : <Navigate to="/" />
}