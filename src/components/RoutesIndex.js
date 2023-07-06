import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { useEffect, useContext } from 'react';
import { STEContext } from '../context/adminSteContext';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { PublicRoute } from '../components/PublicRoute';
import { getToken } from '../services/auth';

export const RoutesIndex = () => {
    //const { loadUserToken } = useContext(STEContext);
    /*useEffect(() => {
        const token = getToken();
        console.log('14 - Token: ', token);
        if (token) {
            loadUserToken(token);
        }
    }, []);*/

    /*const token = getToken();
    if (token) {
        loadUserToken(token);
    }*/

    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path='/' element={<Login />} ></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path='/home' element={<Home></Home>}></Route>
            </Route>
        </Routes>
    );

}