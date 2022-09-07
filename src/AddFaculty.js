import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function AddFaculty(){
    const navigate = useNavigate();
    const apiUrl = "https://63160b9733e540a6d38b5643.mockapi.io/FacultyData";
  
    const [data, setData] = useState({FacultyName:""});
    return(<>
      <input type="text" onChange={(e)=>{
        setData({...data,FacultyName:e.target.value});
      }} />
  
      <input type="text" onChange={(e)=>{
        setData({...data,FacultyImage:e.target.value});
      }} />
      
      <input type="text" onChange={(e)=>{
        setData({...data,FacultyDepartment:e.target.value});
      }} />
  
      <input type="text" onChange={(e)=>{
        setData({...data,FacultySalary:e.target.value});
      }} />
  
      <input type="button" value="Add Faculty" onClick={()=>{
  
        fetch(apiUrl,{
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            "Content-Type":"application/json"
          }
        })
        .then((res)=>{
          navigate('/FacultyData');
        })
      }} />
    </>);
}