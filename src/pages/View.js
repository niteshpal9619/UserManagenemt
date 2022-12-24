import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import './View.css'



const View=()=> {
  const {user,setUserData}=useState(null);

  const {id} =useParams();
  useEffect(()=>{
    if(id){
      getSingleUser(id);
    }
  })

  const getSingleUser=async (id)=>{
    const responce=await axios.get(`http://localhost:5000/users/${id}`);
    if(responce.status === 200){
        setUserData({...responce.data[0]});        
    }
  };

  return (
    <div style={{marginTop:"15px"}}>
      <div className="card">
          <div className="card-header">
            <p>User Contact Details</p>
          </div>
          <div className="container">
              <strong>ID:</strong>
              <span>{id}</span>
              <br/>
              <br/>
              <strong>Name:</strong>
              <span>{user && user.name}</span>
              <br/>
              <br/>
              <strong>Email ID:</strong>
              <span>{user && user.email}</span>
              <br/>
              <br/>
              <strong>Contact:</strong>
              <span>{user && user.contact}</span>
              <br/>
              <br/>
              <strong>Gender:</strong>
              <span>{user && user.Gender}</span>
              <br/>
              <br/>

              <Link to="/">
                <button className='btn btn-edit'>Go Back</button>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default View
