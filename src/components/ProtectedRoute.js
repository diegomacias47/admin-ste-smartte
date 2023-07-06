import { Navigate, Outlet } from 'react-router-dom';
import { STEContext } from '../context/adminSteContext';
import { useContext } from 'react';
import { Header } from './Header';
export const ProtectedRoute = ({children, redirectTo = "/"}) => {
    const { userToken } = useContext(STEContext);

    if (!userToken) {
        return <Navigate to={redirectTo} />
    }

    return (
        <main>
            <Header />
            {
                children 
                ?? <Outlet />
            }
        </main>
    );

}