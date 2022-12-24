import React,{useState,useEffect} from 'react'
import {useNavigate,useLocation, useParams} from 'react-router-dom'
import './AddEdit.css'
import {toast} from "react-toastify"
import axios from 'axios'

const initialState={
  name:"",
  email:"",
  contact:"",
  Gender:""
}

const AddEdit=()=> {
  const [state,setState]=useState(initialState);
  const {name,email,contact,Gender}=state;

  const history= useNavigate();
  const addContact=async(data)=>{
    const responce=await axios.post("http://localhost:5000/users",data);
    if(responce.status===200){
      toast.success(responce.data)
    }
  };

  const UpdateContact=async(data,id)=>{
    const responce=await axios.put(`http://localhost:5000/users/${id}`,data);
    if(responce.status===200){
      toast.success(responce.data)
    }
  };

  const handeSubmit=(e)=>{
    e.preventDefault();
    if(!name || !email || !contact || !Gender){
        toast.error("Please Provide all the value");
    }
    else{
      if(!id){
        addContact(state)
        history.push("/");
      }
      else{
        UpdateContact(state,id)
        history.push("/");
      }
      
    }    
  };

  const {id} =useParams();
  useEffect(()=>{
    if(id){
      getSingleUser(id);
    }
  })

  const getSingleUser=async (id)=>{
    const responce=await axios.get(`http://localhost:5000/users/${id}`);
      if(responce.status === 200){
        setState({...responce.data[0]});
      }
  }

  const handelInputChange=(e)=>{
    let {name,value}=e.target.value;
    setState({...state,[name]:value});
  }

  return (
    <div style={{marginTop:"100px"}}>
      <form style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center",       
      }}
      onSubmit={handeSubmit}
    >
    <label htmlFor='name'>Name</label>
    <input type="text" id="name" name="name" placeholder='Enter Name'
    onChange={handelInputChange} value={name}></input>
    <label htmlFor='email'>Email</label>
    <input type="text" id="email" name="email" placeholder='Enter email'
    onChange={handelInputChange} value={email}></input>
    <label htmlFor='contact'>contact</label>
    <input type="text" id="contact" name="contact" placeholder='Enter contact'
    onChange={handelInputChange} value={contact}></input>
    <label htmlFor='Gender'>Gender</label>
    <input type="text" id="Gender" name="Gender" placeholder='Enter Gender'
    onChange={handelInputChange} value={Gender}></input>

    <input type="submit" value={id ? "Update":"Add"}></input>
    </form>
    </div>
  )
}

export default AddEdit
