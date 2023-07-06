import { Navigate, Outlet } from 'react-router-dom';
import { STEContext } from '../context/adminSteContext';
import { useContext } from 'react';
import { getToken } from '../services/auth';
import { useEffect } from 'react';
export const PublicRoute = ({children, redirectTo = '/home'}) => {
    const { userToken, loadUserToken } = useContext(STEContext);
    const token = getToken();

    useEffect(() => {
        loadUserToken(token);
    }, [userToken]);

    if (userToken) {
        return <Navigate to={redirectTo}/>;
    }

    return children ?? <Outlet />;
}