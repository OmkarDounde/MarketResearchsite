import React, { Component } from "react";
import axios from "axios";
// import SampleView from './SampleView';
// import Header from './Header';
import "./PlaceOrder.css";
import { Link } from "react-router-dom";

// const orderApi = "http://localhost:1226/viewSample";
const orderApi = "https://marketresearch.onrender.com/viewSample";
// setTimeout(function(){
//     window.location.reload(1);
//   }, 7000);
class viewSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: "",
      details: "",
    };
  }
  // componentDidMount(){
  //     window.location.reload();
  // }
  // componentWillUnmount(){
  //    this.setstate({orders:'',
  //     details:''})
  // }
  componentDidMount() {
    axios.get(orderApi).then((res) => {
      this.setState({ orders: res.data });
    });
  }
  render() {
    console.log(this.orders);
    let lastvaluE = this.state.orders.length - 1;
    console.log(lastvaluE);
    // let orders = this.state.orders;
    // let lastvaluE = orders[orders.length-1];
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
          Your Request For Sample Pages Of{" "}
          <strong className="strong">
            "
            {this?.state?.orders &&
              this?.state?.orders[lastvaluE].details.Report_name}
            "
          </strong>{" "}
          Has Been Successfully Placed. You Will Receive, The Sample Pages As
          Soon As Possible
          <hr />
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
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default viewSample;

//This all code tryed out and then i get the result

//  let Omkar = this.state.orders.length-1
// let orders = this.state.orders;
// let lastvaluE = orders[orders.length-1];
// let  = lastvaluE[].details;
// console.log(orders)
// console.log(lastvaluE)
// console.log(JSON.parse('lastvaluE'))

// console.log(orders)
// let lastvaluE = orders[orders.length-1];
// console.log(lastvaluE)
// let lastValue = array.slice(-1);
// console.log(lastValue);
// let omkar = this.state.lastvaluE

//   {/* {array[0].details.Keyword} */}
//            {/* {omkar.Keyword} */}
//            {/* {this?.state?.orders && this?.state?.orders[0].details.Keyword} */}
//            {/* {this?.state?.lastvaluE && this?.state?.lastvaluE[0].details.Keyword} */}

//all Old Code

// import React,{Component} from 'react';
// import axios from 'axios';
// // import SampleView from './SampleView';
// // import Header from './Header';

// const orderApi = "http://localhost:1226/viewSample";

// class ViewOrder extends Component {
//     constructor(props) {
//         super(props)

//         this.state={
//             orders:'',
//             lastvaluE:''
//         }
//     }

//     render(){

//         let orders = this.state.orders;
//         let lastvaluE = orders[orders.length-1];
//         console.log(lastvaluE)
//         // let lastValue = array.slice(-1);
//         // console.log(lastValue);
//         // let omkar = this.state.lastvaluE

//         return(
//             <>
//             <br/><br/>
//             <br/>
//            <h1 key="lastvaluE.id"> THANK YOU </h1>
//            <br/>

//            <center>
//            {/* {array[0].details.Keyword} */}
//            {/* {omkar.Keyword} */}
//            {/* {this?.state?.orders && this?.state?.orders[0].details.Keyword} */}
//            You Will Receive  Market.{this?.state?.lastvaluE && this?.state?.lastvaluE[0].details.Keyword} The Sample Pages As Soon As Possible
//            </center>
//            <br/>
//            <br/>
//            <br/>
//            <br/>
//            <br/>
//            <br/>
//            <br/>
//            <br/>
//            <br/>
//            <br/>
//            <br/>
//             </>
//         )
//     }

//     componentDidMount(){
//         axios.get(orderApi).then((res) => {this.setState({orders:res.data})} )
//     }

// }

// export default ViewOrder;

// {this?.state?.lastValue && this?.state?.lastValue[0].details[0].Keyword}

// const arr12 =lastValue
// const ftaan = arr12.flatMap(nun=>nun);
// console.log(ftaan);

// const arr1 =[1,2,3,[4,5],[5,9,8],87,89,89]
// const ftan = arr1.flatMap(nun=>nun);
// console.log(ftan);
// let orders=this.state.orders;
// console.log(orders)

// import React,{Component} from 'react';
// import axios from 'axios';
// // import SampleView from './SampleView';
// // import Header from './Header';

// const orderApi = "http://localhost:1226/ViewSample";

// class viewSample extends Component {
//     constructor(props) {
//         super(props)

//         this.state={
//             order:''
//         }
//     }

//     render(){
//         let order=this.state.order
//         console.log("this.state.order",this.state.order);
//         return(
//             <>
//              <div class="containermain" key="orders.id">

//                     <div class="latestr">
//                     <div class="latestpub">
//                     <h2> &nbsp; {this?.state?.order.details && this?.state?.order.details.category}  </h2>{/*data from state has been binded*/}
//                     </div>
//                         <div class="latestr1">
//                             <span>Home</span> | Reports | Reports | Reports
//                         </div>
//                     </div>

//                     <h1 key={order.id}>THANK YOU</h1>
//                     We have received your request for our "{order.details.Report_name}"  report.

//                     </div>

//             </>
//         )
//     }

//     componentDidMount(){
//     axios.get(orderApi).then((res) => {this.setState({order:res.data})} )
//     }

// }

// export default viewSample;

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

// {
//   /* <h1 key="lastvaluE.id"> THANK YOU </h1>
//         <br />

//         <center>
//           Your Request For Sample Pages Of
//           <br />
//           <h1>
//             {/* {this?.state?.lastvaluE && this?.state?.lastvaluE.details.Keyword} */
// }
//     {this?.state?.orders &&
//       this?.state?.orders[lastvaluE].details.Report_name}{" "}
//     Market
//     {/* {this?.state?.orders && this?.state?.orders[0].details.Keyword} */}
//   </h1>
//   Has Been Successfully Placed. You Will Receive, The Sample Pages As
//   Soon As Possible
// </center>
// <br />
// <br />
// <br />
// <br />
// <br />
// <br />
// <br />
// <br />
// <br />
// <br />
// <br /> */}
