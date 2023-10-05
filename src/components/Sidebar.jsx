import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active" >
    <div className="nav-link" style={{color:'white'}}>
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <Link to={'/dashboard'} style={{color:'white',textDecoration:'none'}}> Dashboard</Link></div>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider" />

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <div className="nav-link " >
        <i className="fas fa-fw fa-cog"></i>
        <Link to={'/create'} style={{color:'white',textDecoration:'none'}}>Add User</Link>
    </div>
   
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <div className="nav-link " >
        <i className="fas fa-fw fa-wrench"></i>
        <Link to={'/*'} style={{color:'white',textDecoration:'none'}}>View User</Link>
    </div>
   
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider" />

{/* <!-- Heading --> */}



</ul>
  </>
}

export default Sidebar