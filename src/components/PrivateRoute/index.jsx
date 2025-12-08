import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export default function PrivateRoute({ children }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    return isAuthenticated ? children : <Navigate to="/" />
}