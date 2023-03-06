
import React from 'react';

const Display = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.details.Report_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs.{item.details.price}</td>
                        <td>{item.Designation}</td>
                        <td>{item.company}</td>
                        <td>{item.Requirements}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Rname</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )

}

export default Display

















// import React from 'react';
// import './PlaceOrder.css'
// const Display = (props) => {

//     return(
//         <>
//         {props.Report_name}
//         </>
//     )

// }

// export default Display







// const renderTable = ({orderData}) => {
//     if(orderData){
//         return orderData.map((item) => {
//             return(
//                 <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.Report_name}</td>
//                     <td>{item.name}</td>
//                     <td>{item.phone}</td>
//                     <td>{item.email}</td>
//                     <td>Rs.{item.price}</td>
//                     <td>{item.Designation}</td>
//                     <td>{item.company}</td>
//                     <td>{item.Requirements}</td>
//                 </tr>
//             )
//         })
//     }
// }

// return(
//     <div className="container">
//         <center><h3>Orders</h3></center>
//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>OrderId</th>
//                     <th>Rname</th>
//                     <th>Name</th>
//                     <th>Phone</th>
//                     <th>Email</th>
//                     <th>Cost</th>
//                     <th>Date</th>
//                     <th>Status</th>
//                     <th>BankName</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {renderTable(props)}
//             </tbody>
            
//         </table>
        
//     </div>
// )




























// import React from 'react';

// const SampleView = (props) => {

//     const renderTable = ({orderData}) => {
//         if(orderData){
//             return orderData.map((item) => {
//                 return(
//                     <>
//                     <h1 key={item.id}>THANK YOU</h1>
//                     We have received your request for our "{item.details.Report_name}"  report.
                        
//                         </>
//                 )
//             })
//         }
//     }

//     return(
        
//         <div class="containermain">

//                     <div class="latestr">
//                     <div class="latestpub">
//                     <h2> &nbsp; {this?.state?.Reports && this?.state?.Reports[0].category}  </h2>{/*data from state has been binded*/}      
//                     </div>
//                         <div class="latestr1">
//                             <span>Home</span> | Reports | Reports | Reports
//                         </div>
//                     </div>
            
            
//                     {renderTable(props)}
                
                
           
           
//                     </div>
        
//     )

// }

// export default SampleView;