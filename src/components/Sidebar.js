import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    AcademicCapIcon,
    NewspaperIcon,
    UserIcon,
    ArrowLeftOnRectangleIcon,
    HomeIcon
  } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { STEContext } from "../context/adminSteContext";
import { removeToken } from "../services/auth";

const itemsList = [
    {
        icon: <HomeIcon className="h-5 w-5"/>,
        name: 'Inicio',
        to: '/home'
    },
    {
        icon: <AcademicCapIcon className="h-5 w-5"/>,
        name: 'Estudiantes',
        to: '/students'
    },
    {
        icon: <UserIcon className="h-5 w-5"/>,
        name: 'Padres',
        to: '/parents'
    },
    {
        icon: <NewspaperIcon className="h-5 w-5"/>,
        name: 'Reservaciones',
        to: '/reserves'
    },
];
export const Sidebar = () =>  {
    const navigate = useNavigate();
    const {removeUserToken} = useContext(STEContext);

    const CustomList = ({icon, name, to}) => {
        const handleClick = (event, to) => {
            navigate(to);
        }
    
        return (
            <ListItem onClick={(e) => handleClick(e, to)}>
                <ListItemPrefix>
                    {icon}
                </ListItemPrefix>
                { name }
            </ListItem>
        );
    }

    const LogOutElement = () => {

        const deleteToken = () => {
            removeToken();
            removeUserToken();
            navigate('/');
        }

        return (
            <ListItem onClick={deleteToken}>
                <ListItemPrefix>
                    <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Cerrar sesión
            </ListItem>
        );
    }
    //[calc(100vh-4rem-0.5rem)]
    return (
        <div className="w-[250px] inline-block shadow-xl shadow-blue-gray-900/5 h-[calc(100vh-5rem)] ms-2 p-3 bg-white rounded">
            <List>
                {
                    itemsList.map((value, index) => (<CustomList key={index} icon={value.icon} name={value.name} to={value.to}></CustomList>))
                }

                <LogOutElement />
            </List>
        </div>
    );
}


