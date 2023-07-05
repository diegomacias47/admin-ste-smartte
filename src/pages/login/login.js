import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { STEContext } from "../../context/adminSteContext";

const loginForm = {
    user: '',
    password: ''
}
export const Login = () => {
    const {userData, saveToken, isLogged, printToken } = useContext(STEContext);
    const [user, setUser] = useState(loginForm);
    const navigate = useNavigate();
    const handleFormLogin = (event) => {
        event.preventDefault();
        const userData = {...user};
        const {name, value} = event.target;
        userData[name] = value;

        setUser(userData);

        console.log(user);
    };
    const handleLogin = async () => {
        const request = await fetch('https://api-ste.smartte.com.mx/apiv2/web-login', {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: Object.entries(user).map(([k,v])=>{return k+'='+v}).join('&')
        }).catch(err => console.error(err));

        if (request.status === 200) {
            const data = await request.json();            
            saveToken(data.token);
            navigate('/home');
        }        
    };
    return (
        <div className="container mx-auto px-4">
            {
                isLogged() ? <h1>Logueado {userData}</h1> : <h1>No logueado</h1>
            }
            <div className="pt-24">
                <div className="py-7">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h1 className="font-bold italic text-base">STE Admin</h1>
                        <div className="">
                            <input name="user" className="border-4 border-indigo-200 border-b-indigo-500" type="text" onChange={handleFormLogin} value={user.user}></input>
                        </div>
                        <div className="">
                            <input name="password" className="border-4 border-indigo-200 border-b-indigo-500" type="password" onChange={handleFormLogin} value={user.password}></input>
                        </div>
                        <div className="">
                            <button className="bg-indigo-500 text-white p-1 rounded-sm" onClick={handleLogin}>Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}