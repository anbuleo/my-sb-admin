import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./components/create"
import Edit from "./components/Edit"
import { useState } from "react"
import { Navigate } from "react-router-dom"


function App() {
  let [data, setData]= useState([
    {
      name:'anbu',
      username: 'anbu1234',
      email: 'anbu@gmail.com',
      mobile:'7894561230',
      batch:'B50WD2T'
    },
    {
      name:'leo',
      username: 'leo1234',
      email: 'leo@gmail.com',
      mobile:'9876543210',
      batch:'B50WD2T'
    }
  ])

  return <>
 <div id="wrapper">
  <BrowserRouter>
  <Sidebar/>
  <Routes>
    <Route path="/dashboard" element={<Dashboard data={data} setData={setData} />} />
    <Route path="/create" element={<Create data={data} setData={setData}/>}/>
    <Route path="/edit/:id" element={<Edit  data={data} setData={setData}/>} />
    <Route path='/*' element={<Navigate to='/dashboard'/>}/>
  </Routes>
  </BrowserRouter>
 </div>
  
  </>
}

export default App
