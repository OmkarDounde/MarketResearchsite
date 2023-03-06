import React, { Component } from "react";
import axios from "axios";
// import Display from './DisplayOrder';
// import Header from './Header';
import "./PlaceOrder.css";
import { Link } from "react-router-dom"
// const orderApi = "http://localhost:1226/viewOrder";
const orderApi = "https://marketresearch.onrender.com/viewOrder";

class ViewOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: "",
    };
  }

  render() {
    let lastvaluE = this.state.orders.length - 1;
    console.log(lastvaluE);

    let lastValue = this.state.orders.slice(-1);
    console.log(lastValue);
    // console.log("this.state.lastValue", this.state.lastValue);
    return (
      <>
      <div className="latestr">
          <div className="latestpub">
            <h2>
              {" "}
              &nbsp;{" "}
              {this?.state?.orders &&
                this?.state?.orders[lastvaluE].details.category}
            </h2>
          </div>
          <div className="latestr1">
            <span>Home</span> | Reports |{" "}
            {this?.state?.orders &&
              this?.state?.orders[lastvaluE].details.Keyword}{" "}
            Market
          </div>
        </div>
        <div className="container convieworder">
          <h1>Thank You</h1>
          <hr classNameName="hrt" />
          <br />
          <br />
          Your order for report Of{" "}
          <strong className="strong">
            "
            {this?.state?.orders &&
              this?.state?.orders[lastvaluE].details.Report_name}
            "
          </strong>{" "}
          Has Placed Successfully.
          <hr />
          <br />
          <br />
          <table classNameName="table">
            <thead>
              <tr>
                <th>OrderId</th>
                <th>Rname</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this?.state?.orders && this?.state?.orders[lastvaluE].id}
                </td>
                <td>
                  {" "}
                  Global{" "}
                  {this?.state?.orders &&
                    this?.state?.orders[lastvaluE].details.Keyword}{" "}
                  Market
                </td>
                <td>
                  {this?.state?.orders && this?.state?.orders[lastvaluE].name}
                </td>
                <td>
                  {this?.state?.orders && this?.state?.orders[lastvaluE].phone}
                </td>
                <td>
                  {this?.state?.orders && this?.state?.orders[lastvaluE].email}
                </td>
                <td>
                  Rs.
                  {this?.state?.orders &&
                    this?.state?.orders[lastvaluE].details.price}
                </td>
              </tr>
            </tbody>
          </table>
          
          {/* <h4 className="invoice">
            {" "}
            You Will Get Detailed Invoice On Registered E-Mail
          </h4> */}
          <br />
          <br />
          <div className="samplepage">
            <div className="samplepage1">
              <strong>Our representative will contact you shortly.</strong>
              <br />
              Thanks and Regards,
              <br />
              Rowelto Associates
              <br />
              Telephone No.: +1-650-515-3443
              <br />
              Mail: <Link>sales@roweltoassociates.com </Link> <br />
              Web:<Link> www.roweltoassociates.com</Link>
            </div>
            <div className="samplepage2"></div>
          </div>
        </div>
        {/* <Header/> */}
        {/* <Display orderData={this.state.orders}/> */}
      </>
    );
  }

  componentDidMount() {
    if (this.props.history) {
      let query = this.props.location.search.split("&");
      if (query) {
        let data = {
          status: query[0].split("=")[1],
          date: query[2].split("=")[1],
          bank_name: query[3].split("=")[1],
        };
        let id = query[1].split("=")[1].split("_")[1];
        fetch(`${orderApi}/${id}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
    }
    axios.get(orderApi).then((res) => {
      this.setState({ orders: res.data });
    });
  }
}

export default ViewOrder;

// Original Data Till Date 28\02\2023

// import React,{Component} from 'react';
// import axios from 'axios';
// // import Display from './DisplayOrder';
// // import Header from './Header';

// const orderApi = "http://localhost:1226/viewOrder";

// class ViewOrder extends Component {
//     constructor(props) {
//         super(props)

//         this.state={
//             orders:''
//         }
//     }

//     render(){

//         let lastvaluE = this.state.orders.length-1
//         console.log(lastvaluE)

//         let lastValue =  this.state.orders.slice(-1);
//         console.log(lastValue);
//         // console.log("this.state.lastValue", this.state.lastValue);
//         return(
//             <>
// your order for report has been placed {this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}<br/><br/>
// <br/>
// {this?.state?.orders && this?.state?.orders[lastvaluE].name}
// <br/><br/>
// <table className="table">
//                 <thead>
//                     <tr>
//                         <th>OrderId</th>
//                         <th>Rname</th>
//                         <th>Name</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Cost</th>
//                         <th>Date</th>
//                         <th>Status</th>
//                         <th>BankName</th>
//                         <th>Cost</th>
//                         <th>Date</th>
//                         <th>Status</th>
//                         <th>BankName</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 <tr >
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].id}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>Rs.{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>Rs.{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                         <td>{this?.state?.orders && this?.state?.orders[lastvaluE].details.Report_name}</td>
//                     </tr>
//                 </tbody>
//             </table>
//                 {/* <Header/> */}
//                 {/* <Display orderData={this.state.orders}/> */}
//             </>
//         )
//     }

//     componentDidMount(){
//         if(this.props.history){
//             let query = this.props.location.search.split('&');
//             if(query){
//                 let data = {
//                     "status":query[0].split('=')[1],
//                     "date":query[2].split('=')[1],
//                     "bank_name":query[3].split('=')[1]
//                 }
//                 let id = query[1].split('=')[1].split('_')[1];
//                 fetch(`${orderApi}/${id}`,{
//                     method:'PATCH',
//                     headers:{
//                         'Accept':'application/json',
//                         'Content-Type':'application/json'
//                     },
//                     body:JSON.stringify(data)
//                 })
//             }
//         }
//         axios.get(orderApi).then((res) => {this.setState({orders:res.data})} )
//     }

// }

// export default ViewOrder;

//original data till date 28/02/2023

// import React,{Component} from 'react';
// import axios from 'axios';
// import Display from './DisplayOrder';
// // import Header from './Header';

// const orderApi = "http://localhost:1226/viewOrder";

// class ViewOrder extends Component {
//     constructor(props) {
//         super(props)

//         this.state={
//             orders:''
//         }
//     }

//     render(){

//         console.log("this.state.orders", this.state.orders);
//         return(
//             <>

//                 {/* <Header/> */}
//                 <Display orderData={this.state.orders}/>
//             </>
//         )
//     }

//     componentDidMount(){
//         // if(this.props.history){
//         //     let query = this.props.location.search.split('&');
//         //     if(query){
//         //         let data = {
//         //             "status":query[0].split('=')[1],
//         //             "date":query[2].split('=')[1],
//         //             "bank_name":query[3].split('=')[1]
//         //         }
//         //         let id = query[1].split('=')[1].split('_')[1];
//         //         fetch(`${orderApi}/${id}`,{
//         //             method:'PATCH',
//         //             headers:{
//         //                 'Accept':'application/json',
//         //                 'Content-Type':'application/json'
//         //             },
//         //             body:JSON.stringify(data)
//         //         })
//         //     }
//         // }
//         axios.get(orderApi).then((res) => {this.setState({orders:res.data})} )
//     }

// }

// export default ViewOrder;

//original data till date 28/02/2023

// import React,{Component} from 'react';
// import axios from 'axios';
// import Display from './DisplayOrder';
// // import Header from './Header';

// const orderApi = "http://localhost:1226/viewOrder";

// class ViewOrder extends Component {
//     constructor(props) {
//         super(props)

//         this.state={
//             orders:''
//         }
//     }

//     render(){

//         console.log("this.state.orders", this.state.orders);
//         return(
//             <>

//                 {/* <Header/> */}
//                 <Display orderData={this.state.orders}/>
//             </>
//         )
//     }

//     componentDidMount(){
//         // if(this.props.history){
//         //     let query = this.props.location.search.split('&');
//         //     if(query){
//         //         let data = {
//         //             "status":query[0].split('=')[1],
//         //             "date":query[2].split('=')[1],
//         //             "bank_name":query[3].split('=')[1]
//         //         }
//         //         let id = query[1].split('=')[1].split('_')[1];
//         //         fetch(`${orderApi}/${id}`,{
//         //             method:'PATCH',
//         //             headers:{
//         //                 'Accept':'application/json',
//         //                 'Content-Type':'application/json'
//         //             },
//         //             body:JSON.stringify(data)
//         //         })
//         //     }
//         // }
//         axios.get(orderApi).then((res) => {this.setState({orders:res.data})} )
//     }

// }

// export default ViewOrder;
