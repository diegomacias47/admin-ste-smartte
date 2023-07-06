import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { STEContext } from "../../context/adminSteContext";
import { saveToken } from "../../services/auth";
import { Input, Button } from "@material-tailwind/react";

const loginForm = {
    user: '',
    password: ''
}
export const Login = () => {
    const navigate = useNavigate(); 
    const { loadUserToken } = useContext(STEContext);

    const [user, setUser] = useState(loginForm);
    const handleFormLogin = (event) => {
        event.preventDefault();
        const userData = {...user};
        const {name, value} = event.target;
        userData[name] = value;

        setUser(userData);
    };
    const handleLogin = async () => {
        const request = await fetch('https://api-ste.smartte.com.mx/apiv2/web-login', {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: Object.entries(user).map(([k,v])=>{return k+'='+v}).join('&')
        }).catch(err => console.error(err));
        
        const data = await request.json();     
        saveToken(data.token);       
        loadUserToken(data.token);
        navigate('/home');
    };
    return (
        <div className="container mx-auto px-4">
            <div className="pt-24">
                <div className="py-7">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h1 className="font-bold text-base text-xl">STE Admin</h1>
                        <div className="">        
                            <Input name="user" label="Correo electronico" onChange={handleFormLogin} value={user.user} type="email"/>                                                                      
                        </div>
                        <div className="">
                            <Input name="password" onChange={handleFormLogin} value={user.password} label="Contraseña" type="password"/>                            
                        </div>
                        <div className="">
                            <Button variant="gradient" onClick={handleLogin}>Inicias Sesión</Button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}