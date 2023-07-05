import { useState } from "react";
import { STEContext } from "./adminSteContext";
import { decoded, saveTokenInLocalStorage, getToken} from "../services/auth";

const tokenModel = {
    token: ''
}

export const SteContextComponent = ({ children }) => {
    const [userData, setUserData] = useState('');        

    const saveToken = (tokenData) => {    
        //console.log(token);    
        saveTokenInLocalStorage(tokenData);
        setUserData(tokenData);
        console.log(userData)
        //console.log(token);
    };

    const isLogged = () => {
        return getToken() != undefined; 
    }

    const getTokenData = () => {
        if (userData) {
            return null;
        }

        return decoded(userData);
    };

    const printToken = () => {
        console.log(userData);
        return 'Hola' + userData;
    }

    return (
        <STEContext.Provider
            value={{userData, saveToken, getTokenData, isLogged, printToken}}
        >
            { children }
        </STEContext.Provider>
    );
};