import { useState } from "react";
import { STEContext } from "./adminSteContext";
import { decoded, saveTokenInLocalStorage, getToken} from "../services/auth";

export const SteContextComponent = ({ children }) => {
    const [userToken, setUserToken] = useState(null);        

    const loadUserToken = (token) => {
        setUserToken(token);
    }

    const getUserToken = () => {
        return userToken;
    }

    const removeUserToken = () => {
        setUserToken(null);
    }

    return (
        <STEContext.Provider
            value={{userToken, loadUserToken, getUserToken}}
        >
            { children }
        </STEContext.Provider>
    );
};