import { Navigate, Outlet } from 'react-router-dom';
import { STEContext } from '../context/adminSteContext';
import { useContext } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
export const ProtectedRoute = ({children, redirectTo = "/"}) => {
    const { userToken } = useContext(STEContext);

    if (!userToken) {
        return <Navigate to={redirectTo} />
    }

    return (
        <main>
            <Header />
            <div className='flex mb-2'>
                <Sidebar />
                <div className='flex-1'>
                    <div className='mx-2 px-5 py-4 bg-white h-full rounded'>
                        {
                            children 
                            ?? <Outlet />
                        }
                    </div>
                </div>
            </div>
        </main>
    );

}