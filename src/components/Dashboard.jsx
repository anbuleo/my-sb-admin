import React from 'react'
import Tile from './Tile'
import { Button, Table } from 'react-bootstrap'

function Dashboard({data,setData}) {
    
    
   let handleSubmit=(index)=>{
    let newArray=[...data]
    newArray.splice(index,1)
        setData(newArray)
    }
    let dashboardData = [
        {
            color:'primary',
            title:'Earnings (Monthly)',
            value:'$40,000',
            icon:'fa-calendar'

        },
        {
            color:'success',
            title:'Earnings (Annual)',
            value:'$215,000',
            icon:'fa-dollar-sign'

        },
        {
            color:'info',
            title:'Tasks',
            value:'50',
            icon:'fa-clipboard-list',
            isPrograss:true

        },
        {
            color:'info',
            title:'Tasks',
            value:'50',
            icon:'fa-clipboard-list',
           

        },
    ]

  return  <>
  <div  className="container-fluid">

  {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>


   <div className="row">
        {
          dashboardData.map((e,i)=>{
                return <Tile color={e.color}
                             title={e.title}
                             icon={e.icon}
                             isPrograss={e.isPrograss}
                             value={e.value}
                            key={i} />
            })
        }

</div>
<div className="row">
    <Table striped bordered hover>
    <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((e,i)=>{
            return   <tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.username}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.batch}</td>
            <td>
                <Button variant='primary' >Edit</Button>
                &nbsp;&nbsp;
                <Button variant='danger' onClick={()=>handleSubmit(i)}>Delete</Button>
            </td>
          </tr>
        })
      }
        
      </tbody>

    </Table>
</div>
</div>
  
  </>
}

export default Dashboard