import { STEContext } from "../../context/adminSteContext";
import { useContext, useState } from "react";

export const Home = () => {
    const { userData } = useContext(STEContext);
    return (
        <div className="">
            <h1>Home {userData}</h1>
        </div>
    );

}