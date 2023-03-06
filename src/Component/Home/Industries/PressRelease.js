import React, { Component } from "react";
import "./PressRelease.css";
// import PressReleaseDisplay from './PressReleaseDisplay';

class PressRelease extends Component {
  render() {
    return (
      <>
        <div class="container contain">
          <h1>Our PressRelease</h1>
          <hr />
          <div class="mainblok">
            <div class="mainblog">
              <div class="blogimg">
                <img src="https://i.ibb.co/TcxV8dD/Market-Research-Img.jpg" alt="" />
              </div>
              <div class="blogcontent">
                <div class="contentdiv">
                  <h3>
                    {" "}
                    Industrial Absorbents Market- Rising Demand from Oil & Gas
                    Industry Supporting Market Growth
                  </h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. and
                  scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
            <div class="mainblog">
              <div class="blogimg">
                <img src="https://i.ibb.co/TcxV8dD/Market-Research-Img.jpg" alt="" />
              </div>
              <div class="blogcontent">
                <div class="contentdiv">
                  <h3>
                    Industrial Absorbents Market- Rising Demand from Oil & Gas
                    Industry Supporting Market Growth
                  </h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. and
                  scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
            <div class="mainblog">
              <div class="blogimg">
                <img src="https://i.ibb.co/TcxV8dD/Market-Research-Img.jpg" alt="" />
              </div>
              <div class="blogcontent">
                <div class="contentdiv">
                  <h3>
                    Industrial Absorbents Market- Rising Demand from Oil & Gas
                    Industry Supporting Market Growth
                  </h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. and
                  scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PressRelease;

// import React, { Component } from 'react';
// import './Industries.css'
// import PressReleaseDisplay from './PressReleaseDisplay';

// const url = 'http://localhost:1226/Category?ut'

// class PressRelease extends Component {
//     constructor() {
//         super()
//         this.state = {
//             category:''
//         }
//     }

//     render(){
//         return (
//             <>
//             <div id="Categor">
//                     <div className='oidiv' >
//                         <h1 >Our Industries</h1>
//                         <hr class="hrs" />
//                         <hr class="hrtt" />
//                         <p >The Market Research is a one stop industry research
//                             provider of actionable intelligence. <br />We are
//                             committed to providing highest quality research and consulting services to our customers and <br />help
//                             them
//                             understand key market trends, identify opportunities, and make informed decisions by providing market
//                             research solutions at an affordable cost.

//                             <br /> We help our clients in getting solutions to their research requirements through our syndicated and
//                             consulting research services and specialize in industries exhibited below,
//                         </p>

//                     </div>
//                     <div className='catdiv'>
//                     <PressReleaseDisplay CategoryData ={this.state.category} />
//                     </div>
//             </div>
//             </>
//         )
//     }

//     componentDidMount(){
//         fetch(`${url}`, {method:'GET'})
//         .then((res)=> res.json())
//         .then((data)=>{
//             this.setState({category:data})
//         })
//     }

// }

// export default PressRelease;
