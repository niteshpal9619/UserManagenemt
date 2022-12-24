import React,{useEffect,useState} from 'react';
import {Link,useLocation} from "react-router-dom";
import './Header.css'

const Header=()=> {
  const [ActiveTab,setActiveTab]=useState("Home");
  
    const location =useLocation();
    useEffect(()=>{
        if(location.pathname==="/")
        {
            setActiveTab("Home");
        }
        else if (location.pathname==="/add"){
            setActiveTab("Adduser");
        }
        else if (location.pathname==="about"){
            setActiveTab("About");
        }
    })

  return (
    <div className="header">
      <p className="logo">User Management System</p>
      <div className="header-right">
        <Link to="/">
            <p className={`${ActiveTab === "Home" ? "active":""}`} onClick={()=>setActiveTab("Home")}>Home</p>
        </Link>
        <Link to="/add">
            <p className={`${ActiveTab==="Adduser" ? "active":""}`} onClick={()=>setActiveTab("Adduser")}>Add User</p>
        </Link>
        <Link to="/about">
            <p className={`${ActiveTab==="About" ? "active":""}`} onClick={()=>setActiveTab("About")}>About</p>
        </Link>
      </div>
    </div>
  )
}

export default Header
