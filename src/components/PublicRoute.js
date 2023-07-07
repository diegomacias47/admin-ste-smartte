import { Navigate, Outlet } from 'react-router-dom';
import { STEContext } from '../context/adminSteContext';
import { useContext } from 'react';
import { getToken } from '../services/auth';
import { useEffect } from 'react';
export const PublicRoute = ({children, redirectTo = '/home'}) => {
    const { userToken, loadUserToken } = useContext(STEContext);

    useEffect(() => {
        const token = getToken();
        if (token) {
            loadUserToken(token);
        }
    }, [userToken, loadUserToken]);

    if (userToken) {
        return <Navigate to={redirectTo}/>;
    }

    return children ?? <Outlet />;
}