import jwtDecode from "jwt-decode";

export const saveToken = (token) => {
    if (!token) {
        return 0;
    }

    window.localStorage.setItem('loggedUserToken', JSON.stringify(token));
    return 1;
};

export const decodeToken = (token) => {
    return jwtDecode(token);
};

export const getToken = () => {
    const token = window.localStorage.getItem('loggedUserToken');

    if (token) {
        return token;
    }

    return null;
}

export const removeToken = () => {
    window.localStorage.removeItem('loggedUserToken');
}