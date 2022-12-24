import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Home.css'
import { toast } from 'react-toastify'

const Home= ()=> {
  const [data,setData]=useState([])

  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers=async ()=>{
    const responce=await axios.get("http://localhost:5000/users");
    if(responce.status===200){
      setData(responce.data);
    }
  };

  const onDeleteUser=(id)=>{
    if(window.confirm("Are you sure you wanted to delete that user record")){
      const responce=axios.delete(`http://localhost:5000/users/${id}`);
      if(responce.status === 200){
        toast.success(responce.data);
        getUsers();
      }
    }
  }

  //console.log("data=>",data);

  return (
    <div style={{marginTop:"150px"}}>
      <table class="styled-table">
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>No.</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Email</th>
            <th style={{textAlign:"center"}}>Contact</th>
            <th style={{textAlign:"center"}}>Gender</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && 
            data.map((item,index)=>{
                return(
                  <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>{item.Gender}</td>
                      <td>
                        <Link to={`/update/${item.id}`}>
                          <button className="btn btn-edit">Edit</button>
                        </Link>
                        <button className="btn btn-delete" onClick={()=>onDeleteUser(item.id)} >Delete</button>
                        <Link to={`/view/${item.id}`}>
                          <button className="btn btn-view">View</button>
                        </Link>
                      </td>
                  </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home