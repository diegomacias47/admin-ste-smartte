import jwtDecode from "jwt-decode";

export const saveTokenInLocalStorage = (token) => {
    if (!token) {
        return;
    }

    window.localStorage.setItem('loggedUserToken', JSON.stringify(token));
};

export const decoded = (token) => {
    return jwtDecode(token);
};

export const getToken = () => {
    const token = window.localStorage.getItem('loggedUserToken');

    if (token) {
        return token;
    }

    return null;
}