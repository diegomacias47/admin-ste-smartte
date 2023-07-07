import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { useEffect, useContext } from 'react';
import { STEContext } from '../context/adminSteContext';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { PublicRoute } from '../components/PublicRoute';
import { getToken } from '../services/auth';
import { Students } from '../pages/students/students';

export const RoutesIndex = () => {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path='/' element={<Login />} ></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/students' element={<Students></Students>}></Route>
            </Route>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );

}