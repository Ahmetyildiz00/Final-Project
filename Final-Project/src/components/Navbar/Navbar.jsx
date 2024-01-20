import React from 'react';
import "./Navbar.css"
import logo from "../assets/logo.png"
import phonecall from "../assets/phone-call.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [menu, setMenu] = useState("meram");

    return (
        <div className="navbar" >
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("home") }}><Link style={{ color: "white", textDecoration: "none" }} to="/">Ana Sayfa</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("meram") }}><Link style={{ color: "white", textDecoration: "none" }} to="meram" >Meram</Link>{menu === "meram" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("baskan") }}><Link style={{ color: "white", textDecoration: "none" }} to="/baskan">Başkan</Link>{menu === "baskan" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("projeler") }}><Link style={{ color: "white", textDecoration: "none" }} to="/projeler">Projeler</Link>{menu === "projeler" ? <hr /> : <></>}</li>
                |<img src={phonecall} alt=""/>
                <p><span>444 3 042</span></p>
            </ul>

        </div>


    )
}
export default Navbar