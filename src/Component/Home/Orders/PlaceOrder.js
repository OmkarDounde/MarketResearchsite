import React, { Component } from "react";
import "./PlaceOrder.css";

import axios from "axios";
// const url = "http://localhost:1226/details";
const url = "https://marketresearch.onrender.com/details";
// const placeOrder = "http://localhost:1226/Orders";
const placeOrder = "https://marketresearch.onrender.com/Orders";

class PlaceOrder extends Component {
  constructor(props) {
    console.log("details");
    super(props);
    let userData = JSON.parse(sessionStorage.getItem("userInfo"));
    this.state = {
      id: Math.floor(Math.random() * 100000000),
      Report_name: this.props.match.params.Report_name,
      name: userData ? userData.name : "",
      email: userData ? userData.email : "",
      company: userData ? userData.company : "",
      price: 0,
      Designation: userData ? userData.Designation : "",
      phone: userData ? userData.phone : "",
      Requirements: userData ? userData.Requirements : "",
      details: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  checkout = () => {
    let obj = this.state;
    // obj.menuItem = sessionStorage.getItem('menu');
    fetch(placeOrder, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then(console.log("order added"))
      // .then(this.props.history.push("/viewBooking"));
  };

  render() {
    let details = this.state.details;
    // console.log("this.state.details", this.state.details.Report_name);
    console.log("this.state.details", this.state.details.price);
    // console.log("this.state.details", this.state.details)
    return (
      <>
      <div className="latestr">
            <div className="latestpub">
              <h2>
                {" "}
                &nbsp;{" "}
                {details.category}
              </h2>
              {/*data from state has been binded*/}
            </div>
            <div className="latestr1">
              <span>Home</span> | {details.Keyword} Market
            </div>
          </div>
      <div className="reportrunning">
                <div className="reportrunning1">Customization</div>
                <marquee direction="left">
                We Provide Customized Solutions to cater your specific requirement services any region, product, or any specific market segment.
                </marquee>
                {/* <p className="moving-text">We Provide Customized Solutions to cater your specific requirement services any region, product, or any specific market segment.</p> */}
              </div>
        <div id="mainformbody">
          <div id="formbody">
            <div className="formtitle">
              To Get {details.Keyword} Market Report Plz Fill The Form
            </div>
<form action="https://marketresearchpaytm.onrender.com/paynow" method="POST">

            <div className="formtile">
                                <input type="hidden" name="price" value={this.state.details.price}/>
                                <input type="hidden" name="id" value={this.state.id}/>
                                <input type="hidden" name="Report_name" value={this.state.details.Report_name}/>
              <div>
                <h6>Name* :</h6>
              </div>
              <div className="formimg" id="fdiv">
                <img src="https://i.ibb.co/LJznXYM/Namered.png" alt="" />
              </div>
              <div className="forminp" id="forminput">
                <input
                  type="text"
                  id="fname"
                  placeholder="  Please  Enter  Your  Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="formtile">
              <div>
                <h6>Email* :</h6>
              </div>
              <div className="formimg">
                <img src="https://i.ibb.co/vL3yyVj/Emailred.png" alt="" />
              </div>
              <div className="forminp" id="forminput">
                <input
                  type="text"
                  id="email"
                  placeholder="  Please  Enter  Your  Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p id="fout"></p>
              </div>
            </div>

            <div className="formtile">
              <div>
                <h6>Company Name* :</h6>
              </div>
              <div className="formimg">
                <img src="https://i.ibb.co/QfXXK4G/Companyred.png" alt="" />
              </div>
              <div className="forminp" id="forminput">
                <input
                  type="text"
                  id="pwd"
                  placeholder="  Please  Enter  Your  Company  Name"
                  name="company"
                  value={this.state.company}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="formtile">
              <div>
                <h6>Title/Designation* :</h6>
              </div>
              <div className="formimg">
                <img src="https://i.ibb.co/LJznXYM/Namered.png" alt="" />
              </div>
              <div className="forminp" id="forminput">
                <input
                  type="text"
                  placeholder="  Please  Enter  Your  Title/Designation"
                  name="Designation"
                  value={this.state.Designation}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="formtile">
              <div>
                <h6>Phone no.* :</h6>
              </div>
              <div className="formimg">
                <img src="https://i.ibb.co/qxn8Fzg/Phonered.png" alt="" />
              </div>
              <div className="forminp" id="forminput">
                <input
                  type="text"
                  placeholder="  Please  Enter  Your  Phone  no."
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="formtile">
              <div>
                <h6>Share Your Requirements With</h6>
              </div>
              <div className="formimg">
                <img
                  src="https://i.ibb.co/cLxQb4G/About-red.png
                    "
                  alt=""
                />
              </div>
              <div className="forminp" id="forminput">
                <input
                  type="text"
                  placeholder="  Please  Enter  Your  Phone  no."
                  name="Requirements"
                  value={this.state.Requirements}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div id="btn">
              <button onClick={this.checkout} type="submit">
                Submit
              </button>
            </div>
</form>



          </div>








          <div id="formleftside">
            <div id="samplereportname">
              <div className="reporttle">
                <img src="https://i.ibb.co/S0z6QfW/Write.png" alt="" />
                <span className="site">Report Name</span>
              </div>
              <div className="formreportcontent">
                <p id="formreportcontent">
                {details.Report_name}
                </p>
              </div>
            </div>
            <div id="formbenifits">
              <div className="formbenifit1">
                <div className="ben1">
                  <img src="https://i.ibb.co/yQYT9dw/Benifits.png" alt="" />
                  <span className="ben03">
                    Benefits of Buying From Rowelto Associates
                  </span>
                  <p></p>
                </div>
              </div>
              <div className="formbenifit2">
                <div className="ben01">
                  <img src="https://i.ibb.co/wdrqYp9/Supportred.png" alt="" />
                </div>
                <div className="ben02">
                  <h6 className="ben03">Analyst Support</h6>
                  <p className="ben14">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis modi tempora, vel harum atque voluptatem mollitia
                    quaerat?
                  </p>
                </div>
              </div>
              <div className="formbenifit2">
                <div className="ben01">
                  <img src="https://i.ibb.co/ZN3cCKQ/Customerred.png" alt="" />
                </div>
                <div className="ben02">
                  <h6 className="ben03">Customer's Satisfaction</h6>
                  <p className="ben14">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis modi tempora, vel harum atque voluptatem mollitia
                    quaerat?
                  </p>
                </div>
              </div>
              <div className="formbenifit2">
                <div className="ben01">
                  <img src="https://i.ibb.co/2SM8nVz/Inimitablered.png" alt="" />
                </div>
                <div className="ben02">
                  <h6 className="ben03">Inimitable Expertise</h6>
                  <p className="ben14"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis modi tempora, vel harum atque voluptatem mollitia
                    quaerat?
                  </p>
                </div>
              </div>
              <div className="formbenifit2">
                <div className="ben01">
                  <img src="https://i.ibb.co/x6g3z0z/Qyalityred.png" alt="" />
                </div>
                <div className="ben02">
                  <h6 className="ben03">Assured Quality</h6>
                  <p className="ben14">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis modi tempora, vel harum atque voluptatem mollitia
                    quaerat?
                  </p>
                </div>
              </div>
              <div className="formbenifit2">
                <div className="ben01">
                  <img src="https://i.ibb.co/MhN720g/Quick-Delhivery.png" alt="" />
                </div>
                <div className="ben02">
                  <h6 className="ben03">Quick delivery</h6>
                  <p className="ben14">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis modi tempora, vel harum atque voluptatem mollitia
                    quaerat?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </>
    );
  }

  async componentDidMount() {
//     let mealId = JSON.parse(sessionStorage.getItem('Report'))
//     fetch(url,{
//         method: 'POST',
//         headers:{
//             'Accept':'application/json',
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(mealId)
//     })
//     .then((res) =>  res.json())
//     .then((data) => {
//         console.log(data)
//         let totalPrice = 0;
//         data.map((item) => {
//             totalPrice = totalPrice + parseFloat(item.price);
//             return 'ok'
//         })
//         this.setState({menuItem:data,price:totalPrice})
//     })
// }
    let report = this.props.location.search.split("=")[1];
    let response = await axios.get(`${url}/${report}`);
    this.setState({ details: response.data[0] });
  }
}

export default PlaceOrder;







//original data till date 27/02/2023


// import React, { Component } from "react";
// import "./PlaceOrder.css";

// import axios from "axios";
// const url = "http://localhost:1226/placeOrder";
// const placeOrder = "http://localhost:1226/Orders";

// class PlaceOrder extends Component {
//   constructor(props) {
//     console.log("details");
//     super(props);
//     let userData = JSON.parse(sessionStorage.getItem("userInfo"));
//     this.state = {
//       id: Math.floor(Math.random() * 100000000),
//       hotel_name: this.props.match.params.restName,
//       name: userData ? userData.name : "",
//       email: userData ? userData.email : "",
//       company: userData ? userData.company : "",
//       cost: 0,
//       Designation: userData ? userData.Designation : "",
//       phone: userData ? userData.phone : "",
//       Requirements: userData ? userData.Requirements : "",
//       details: "",
//     };
//   }
//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };
//   checkout = () => {
//     let obj = this.state;
//     // obj.menuItem = sessionStorage.getItem('menu');
//     fetch(placeOrder, {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(obj),
//     })
//       .then(console.log("order added"))
//       .then(this.props.history.push("/viewBooking"));
//   };

//   render() {
//     let details = this.state.details;
//     console.log("this.state.details", this.state.details);
//     return (
//       <>
//         <div id="mainformbody">
//           <div id="formbody">
//             <div class="formtitle">
//               To Get {details.Keyword} Market Report Plz Fill The Form
//             </div>
// <form action="/viewBooking" method="POST">
//             <div class="formtile">
//               <div>
//                 <h6>Name* :</h6>
//               </div>
//               <div class="formimg" id="fdiv">
//                 <img src="https://i.ibb.co/LJznXYM/Namered.png" alt="" />
//               </div>
//               <div class="forminp" id="forminput">
//                 <input
//                   type="text"
//                   id="fname"
//                   placeholder="  Please  Enter  Your  Name"
//                   name="name"
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>

//             <div class="formtile">
//               <div>
//                 <h6>Email* :</h6>
//               </div>
//               <div class="formimg">
//                 <img src="https://i.ibb.co/vL3yyVj/Emailred.png" alt="" />
//               </div>
//               <div class="forminp" id="forminput">
//                 <input
//                   type="text"
//                   id="email"
//                   placeholder="  Please  Enter  Your  Email"
//                   name="email"
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div>
//                 <p id="fout"></p>
//               </div>
//             </div>

//             <div class="formtile">
//               <div>
//                 <h6>Company Name* :</h6>
//               </div>
//               <div class="formimg">
//                 <img src="https://i.ibb.co/QfXXK4G/Companyred.png" alt="" />
//               </div>
//               <div class="forminp" id="forminput">
//                 <input
//                   type="text"
//                   id="pwd"
//                   placeholder="  Please  Enter  Your  Company  Name"
//                   name="company"
//                   value={this.state.company}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <div class="formtile">
//               <div>
//                 <h6>Title/Designation* :</h6>
//               </div>
//               <div class="formimg">
//                 <img src="https://i.ibb.co/LJznXYM/Namered.png" alt="" />
//               </div>
//               <div class="forminp" id="forminput">
//                 <input
//                   type="text"
//                   placeholder="  Please  Enter  Your  Title/Designation"
//                   name="Designation"
//                   value={this.state.Designation}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>

//             <div class="formtile">
//               <div>
//                 <h6>Phone no.* :</h6>
//               </div>
//               <div class="formimg">
//                 <img src="https://i.ibb.co/qxn8Fzg/Phonered.png" alt="" />
//               </div>
//               <div class="forminp" id="forminput">
//                 <input
//                   type="text"
//                   placeholder="  Please  Enter  Your  Phone  no."
//                   name="phone"
//                   value={this.state.phone}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <div class="formtile">
//               <div>
//                 <h6>Share Your Requirements With</h6>
//               </div>
//               <div class="formimg">
//                 <img
//                   src="https://i.ibb.co/cLxQb4G/About-red.png
//                     "
//                   alt=""
//                 />
//               </div>
//               <div class="forminp" id="forminput">
//                 <input
//                   type="text"
//                   placeholder="  Please  Enter  Your  Phone  no."
//                   name="Requirements"
//                   value={this.state.Requirements}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <div id="btn">
//               <button onClick={this.checkout} type="submit">
//                 Submit
//               </button>
//             </div>
// </form>



//           </div>








//           <div id="formleftside">
//             <div id="samplereportname">
//               <div class="reporttle">
//                 <img src="https://i.ibb.co/S0z6QfW/Write.png" alt="" />
//                 <span class="site">Report Name</span>
//               </div>
//               <div class="formreportcontent">
//                 <p id="formreportcontent">
//                 {details.Report_name}
//                 </p>
//               </div>
//             </div>
//             <div id="formbenifits">
//               <div class="formbenifit1">
//                 <div class="ben1">
//                   <img src="https://i.ibb.co/yQYT9dw/Benifits.png" alt="" />
//                   <span class="ben03">
//                     Benefits of Buying From Rowelto Associates
//                   </span>
//                   <p></p>
//                 </div>
//               </div>
//               <div class="formbenifit2">
//                 <div class="ben01">
//                   <img src="https://i.ibb.co/wdrqYp9/Supportred.png" alt="" />
//                 </div>
//                 <div class="ben02">
//                   <h6 class="ben03">Analyst Support</h6>
//                   <p class="ben14">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Nobis modi tempora, vel harum atque voluptatem mollitia
//                     quaerat?
//                   </p>
//                 </div>
//               </div>
//               <div class="formbenifit2">
//                 <div class="ben01">
//                   <img src="https://i.ibb.co/ZN3cCKQ/Customerred.png" alt="" />
//                 </div>
//                 <div class="ben02">
//                   <h6 class="ben03">Customer's Satisfaction</h6>
//                   <p class="ben14">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Nobis modi tempora, vel harum atque voluptatem mollitia
//                     quaerat?
//                   </p>
//                 </div>
//               </div>
//               <div class="formbenifit2">
//                 <div class="ben01">
//                   <img src="https://i.ibb.co/2SM8nVz/Inimitablered.png" alt="" />
//                 </div>
//                 <div class="ben02">
//                   <h6 class="ben03">Inimitable Expertise</h6>
//                   <p class="ben14"> 
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Nobis modi tempora, vel harum atque voluptatem mollitia
//                     quaerat?
//                   </p>
//                 </div>
//               </div>
//               <div class="formbenifit2">
//                 <div class="ben01">
//                   <img src="https://i.ibb.co/x6g3z0z/Qyalityred.png" alt="" />
//                 </div>
//                 <div class="ben02">
//                   <h6 class="ben03">Assured Quality</h6>
//                   <p class="ben14">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Nobis modi tempora, vel harum atque voluptatem mollitia
//                     quaerat?
//                   </p>
//                 </div>
//               </div>
//               <div class="formbenifit2">
//                 <div class="ben01">
//                   <img src="https://i.ibb.co/MhN720g/Quick-Delhivery.png" alt="" />
//                 </div>
//                 <div class="ben02">
//                   <h6 class="ben03">Quick delivery</h6>
//                   <p class="ben14">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Nobis modi tempora, vel harum atque voluptatem mollitia
//                     quaerat?
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

        
//       </>
//     );
//   }

//   async componentDidMount() {
//     let report = this.props.location.search.split("=")[1];
//     let response = await axios.get(`${url}/${report}`);
//     this.setState({ details: response.data[0] });
//   }
// }

// export default PlaceOrder;





















// import React,{Component} from 'react';
// import './PlaceOrder.css';

// const url = "http://localhost:1226/Reports"
// const placeOrder = "http://localhost:1226/placeOrder"

// class PlaceOrder extends Component {
//     constructor(props) {
//         super(props)
//         let userData = JSON.parse(sessionStorage.getItem('userInfo'))
//         this.state={
//             id:Math.floor(Math.random()*10000),
//             Report_name:this.props.match.params.restName,
//             name:userData?userData.name:'',
//             email:userData?userData.email:'',
//             cost:0,
//             phone:userData?userData.phone:'',
//             address:'77 K Delhi',
//             menuItem:''
//         }
//     }

//     handleChange = (event) => {
//         this.setState({[event.target.name]:event.target.value})
//     }

//     checkout=()=>{
//         let obj = this.state
//         obj.menuItem = sessionStorage.getItem('menu');
//         fetch(placeOrder,{
//             method:'POST',
//             headers:{
//                 'accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(obj)
//         })
//         .then(console.log('order added'))
//         //.then(this.props.history.push('/viewBooking'))
//     }

//     renderItem = (data) => {
//         if(data){
//             return data.map((item) => {
//                 return(
//                     <div className="orderItems" key={item.menu_id}>
//                         <img src={item.menu_image} alt={item.menu_name}/>
//                         <h3>{item.menu_name}</h3>
//                         <h4>Rs. {item.menu_price}</h4>
//                     </div>
//                 )
//             })
//         }
//     }

//     render(){

//         if(sessionStorage.getItem('ltk') == null){
//             return(
//                 <>

//                     <center>
//                         <h2>Login First To Place Booking</h2>
//                     </center>

//                 </>
//             )
//         }
//         return(
//             <>

//                 <div className="container omi">
//                     <hr/>
//                     <div className="panel panel-primary">
//                         <div className="panel-heading">
//                             <h3>Order for {this.state.Report_name}</h3>
//                         </div>
//                         <div className='panel-body'>
//                             <form action="http://localhost:4100/paynow" method="POST">
//                                 <input type="hidden" name="cost" value={this.state.cost}/>
//                                 <input type="hidden" name="id" value={this.state.id}/>
//                                 <input type="hidden" name="Report_name" value={this.state.Report_name}/>
//                                 <div className='row'>
//                                     <div className='form-group col-md-6'>
//                                         <label for="fname" className='control-label'>FirstName</label>
//                                         <input className='form-control' id="fname" name="name" value={this.state.name} onChange={this.handleChange}/>

//                                     </div>
//                                     <div className='form-group col-md-6'>
//                                         <label for="email" className='control-label'>Email</label>
//                                         <input className='form-control' id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
//                                     </div>
//                                     <div className='form-group col-md-6'>
//                                         <label for="phone" className='control-label'>Phone</label>
//                                         <input className='form-control' id="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
//                                     </div>
//                                     <div className='form-group col-md-6'>
//                                         <label for="address" className='control-label'>Address</label>
//                                         <input className='form-control' id="address" name="address" value={this.state.address} onChange={this.handleChange}/>
//                                     </div>
//                                 </div>
//                                 {this.renderItem(this.state.menuItem)}
//                                 <div className='row'>
//                                     <div className='col-md-12'>
//                                         <h2>Total Price is Rs.{this.state.cost}</h2>
//                                     </div>
//                                 </div>
//                                 <button className='btn btn-success' onClick={this.checkout}
//                                 type="submit">
//                                     PlaceOrder
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }

//     componentDidMount(){
//         let mealId = JSON.parse(sessionStorage.getItem('menu'))
//         fetch(url,{
//             method: 'POST',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(mealId)
//         })
//         .then((res) =>  res.json())
//         .then((data) => {
//             console.log(data)
//             let totalPrice = 0;
//             data.map((item) => {
//                 totalPrice = totalPrice + parseFloat(item.menu_price);
//                 return 'ok'
//             })
//             this.setState({menuItem:data,cost:totalPrice})
//         })
//     }

// }

// export default PlaceOrder;

// import React, { Component } from "react";
// import './PlaceOrder.css'

// const url = "http://localhost:1226/Reports"

// class PlaceOrder extends Component {

// constructor(props){
//     super(props)

// this.state={
//                 id:Math.floor(Math.random()*10000),
//                 Report_name:this.props.match.params.Report_name,
// }

// }

// render(){
// console.log('>>>','Omkar')

//     return(
//         <>

//             <div className="container omi">
//             <hr/>
//             <div className="panel panel-primary">
//                 <div className="panel-heading">
//                     <h3>Order for {this.state.Report_name}</h3>
//                 </div>
//                 <div className='panel-body'>
//                     <form action="http://localhost:4100/paynow" method="POST">
//                         <input type="hidden" name="cost" value={this.state.cost}/>
//                         <input
//                         />
//                         <input type="hidden" name="Report_name" value={this.state.Report_name}/>
//                         <div className='row'>
//                             <div className='form-group col-md-6'>
//                                 <label for="fname" className='control-label'>FirstName</label>
//                                 <input className='form-control' id="fname" name="name" value={this.state.name} onChange={this.handleChange}/>

//                             </div>
//                             <div className='form-group col-md-6'>
//                                 <label for="email" className='control-label'>Email</label>
//                                 <input className='form-control' id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
//                             </div>
//                             <div className='form-group col-md-6'>
//                                 <label for="phone" className='control-label'>Phone</label>
//                                 <input className='form-control' id="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
//                             </div>
//                             <div className='form-group col-md-6'>
//                                 <label for="address" className='control-label'>Address</label>
//                                 <input className='form-control' id="address" name="address" value={this.state.address} onChange={this.handleChange}/>
//                             </div>
//                         </div>
//                         {this.renderItem(this.state.menuItem)}
//                         <div className='row'>
//                             <div className='col-md-12'>
//                                 <h2>Total Price is Rs.{this.state.cost}</h2>
//                             </div>
//                         </div>
//                         <button className='btn btn-success' onClick={this.checkout}
//                         type="submit">
//                             PlaceOrder
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </>
//     )
// }

//     componentDidMount(){
//         let mealId = JSON.parse(sessionStorage.getItem('menu'))
//         fetch(url,{
//             method: 'POST',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(mealId)
//         })
//         .then((res) =>  res.json())
//         .then((data) => {
//             console.log(data)
//             let totalPrice = 0;
//             data.map((item) => {
//                 totalPrice = totalPrice + parseFloat(item.menu_price);
//                 return 'ok'
//             })
//             this.setState({menuItem:data,cost:totalPrice})
//         })
//     }

// }

// export default PlaceOrder;
