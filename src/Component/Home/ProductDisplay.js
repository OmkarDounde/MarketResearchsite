import React, { Component } from "react";
import './Home.css'
import Product from './Product';


// const url = "http://localhost:1226/Reports"
const url = "https://marketresearch.onrender.com/LReport"



class Home extends Component {
    constructor() {
        super()
        this.state = {
            Report_name: ''
        }
    }

  
    render() {
        return (
            <>
                <div id="lreport"  >
                    <h1>Latest Reports</h1>
                    <hr className="hr" />
                    <hr className="hrt2" />
                    <br/>
                    <div className="freport">
                    <Product/>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        fetch(`${url}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ Report_name: data })
            })
    }
}


export default Home;





















































//Original data till date 06/03/2023

// import React, { Component } from "react";
// import './Home.css'
// import Product from './Product';


// // const url = "http://localhost:1226/Reports"
// const url = "https://marketresearch.onrender.com/LReport"



// class Home extends Component {
//     constructor() {
//         super()
//         this.state = {
//             Report_name: ''
//         }
//     }

  
//     render() {
//         return (
//             <>
//                 <div id="lreport"  >
//                     <h1>Latest Reports</h1>
//                     <hr className="hr" />
//                     <hr className="hrt2" />
//                     <br/>
//                     <div className="freport">
//                     <Product reportList={this.state.Report_name} />
//                     </div>
//                 </div>
//             </>
//         )
//     }
//     componentDidMount() {
//         fetch(`${url}`, { method: 'GET' })
//             .then((res) => res.json())
//             .then((data) => {
//                 this.setState({ Report_name: data })
//             })
//     }
// }


// export default Home;
