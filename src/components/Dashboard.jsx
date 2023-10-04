import React from 'react'
import Tile from './Tile'

function Dashboard() {
    let data = [
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
            data.map((e,i)=>{
                return <Tile color={e.color}
                             title={e.title}
                             icon={e.icon}
                             isPrograss={e.isPrograss}
                             value={e.value}
                            key={i} />
            })
        }

</div>
</div>
  
  </>
}

export default Dashboard