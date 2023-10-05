import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function create({data,setData}) {
  let [name,setName]= useState("")
  let [username,setUserName]= useState("")
  let [email,setEamil]= useState("")
  let [mobile,setMobile]= useState("")
  let [batch,setBatch]= useState("")
let navigate = useNavigate()
  let handleSave=()=>{
      let newdata =[...data]
      newdata.push({
        name,
        email,
        username,
        mobile,
        batch
      })
      
      setData(newdata)
      navigate('/dashboard')
  }

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Create</h1>
        
        </div>
        <div className="row">
          <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />        
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter UserName" onChange={(e)=>setUserName(e.target.value)}/>        
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEamil(e.target.value)}/>        
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="tel" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>        
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Batch</Form.Label>
            <Form.Control type="text" placeholder="Enter Batch Name" onChange={(e)=>setBatch(e.target.value)} />        
          </Form.Group>     
      <Button variant="primary" onClick={()=>handleSave()}>
        Submit
      </Button>
          </Form>

        </div>
      </div>
    </>
  );
}

export default create;
