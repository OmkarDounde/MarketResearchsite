import React, { Component } from "react";
import ProductDisplay from "./ProductDisplay";
import Ourservices from "./ourservices"
import Category from './Category';
import Services from './Services';
import Slider from './Slider';
import SearchResult from './Searchresult';
// const url="http://localhost:1226/Reports"
const url="https://marketresearch.onrender.com/Reports"
class Home extends Component {

    constructor() {
        super()
        this.state = {
            Report: '',
            filteredData:''
        }
        
    }
    
    filterData = (userInput) =>{
        console.log(userInput)
        let output = this.state.Report.filter((item)=>{
          return (item.Report_name.toLowerCase().indexOf(userInput.toLowerCase())>-1)
        })
        this.setState({filteredData:output})
      }

    
render(){
    return(
        <>
        <Slider userInput={(data)=>{this.filterData(data)}}/>
        <SearchResult mealData={this.state.filteredData}/>
        <Ourservices/>
        <Category/>
        <Services/>
        <ProductDisplay />
        </>
    )
}


componentDidMount(){
    fetch(`${url}`,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({Report:data})
    })
  }
  
   
}


export default Home;
























// //original code
// import React, { Component } from "react";
// import ProductDisplay from "./ProductDisplay";
// import Category from './Category';
// import Services from './Services';
// import Slider from './Slider';


// const url="http://localhost:1226/Reports"

// class Home extends Component {

//     constructor() {
//         super()
//         this.state = {
//             Report: ''
//         }
//     }

//     filterData = (omkar) =>{
//         console.log('>>>',omkar)
//         let output = this.state.filteredData.filter((item)=>{
//           return (item.name.toLowerCase().indexOf(omkar.toLowerCase())>-1)
//         })
//         this.setState({filteredData:output})
//       }

    
// render(){
//     return(
//         <>
//         <Slider userInput={(data)=>{this.filterData(data)}}/>
//         <Category/>
//         <Services/>
//         <ProductDisplay />
//         </>
//     )
// }


// componentDidMount(){
//     fetch(`${url}`,{method:'GET'})
//     .then((res)=>res.json())
//     .then((data)=>{
//       this.setState({Report:data,filteredData:data})
//     })
//   }
   
// }


// export default Home;








// import React from "react";
// import ProductDisplay from "./ProductDisplay";
// import Category from './Category';
// import Services from './Services';
// import Slider from './Slider';




// const Home = () =>{






    
//     return(
//         <>
//         <Slider userInput={(data)=>{this.filterData(data)}}/>
//         <Category/>
//         <Services/>
//         <ProductDisplay />
//         </>
//     )
// }


// export default Home;





//Imp code

// const Home = () =>{
//     return(
//         <>
//         <Header/>
//         <Category/>
//         <Services/>
//         <ProductDisplay />
//         <Footer/>
//         </>
//     )
// }


// export default Home;





// import React, { Component } from "react";
// import './Home.css'
// import Product from './Product';

// const url = "http://localhost:1226/report"



// class Home extends Component{
//     constructor(){
//         super()
//         this.state={
//             Report_name:''
//         }
//     }
//     render(){
//         return(
//             <>
//             <div id="lreport">
//             <h1>Latest Reports</h1>
//             <hr class="hr"/>
//             <hr class="hrt"/>
//             <br/>

//             <Product reportList={this.state.Report_name}/>
            
//         </div>
//             </>
//         )
//     }
//     componentDidMount(){
//         fetch(`${url}`,{method:'GET'})
//         .then((res)=>res.json())
//         .then((data)=>{
//             this.setState({Report_name:data})
//         })
//     }
// }


// export default Home;



// const Home = ()=>{


    
//     return(
//         <>
//         <div id="lreport">
//             <h1>Latest Reports</h1>
//             <hr class="hr"/>
//             <hr class="hrt"/>
//             <br/>
//             <div id="containermain">
               
//                 <Product/>

//             </div>
            
//         </div>
//         </>
//     )
// }

// export default Home;






// import React from "react";
// import ProductDisplay from "./ProductDisplay";
// import Category from './Category';
// import Services from './Services';
// import Slider from './Slider';




// const Home = () =>{






    
//     return(
//         <>
//         <Slider userInput={(data)=>{this.filterData(data)}}/>
//         <Category/>
//         <Services/>
//         <ProductDisplay />
//         </>
//     )
// }


// export default Home;





//Imp code

// const Home = () =>{
//     return(
//         <>
//         <Header/>
//         <Category/>
//         <Services/>
//         <ProductDisplay />
//         <Footer/>
//         </>
//     )
// }


// export default Home;





// import React, { Component } from "react";
// import './Home.css'
// import Product from './Product';

// const url = "http://localhost:1226/report"



// class Home extends Component{
//     constructor(){
//         super()
//         this.state={
//             Report_name:''
//         }
//     }
//     render(){
//         return(
//             <>
//             <div id="lreport">
//             <h1>Latest Reports</h1>
//             <hr class="hr"/>
//             <hr class="hrt"/>
//             <br/>

//             <Product reportList={this.state.Report_name}/>
            
//         </div>
//             </>
//         )
//     }
//     componentDidMount(){
//         fetch(`${url}`,{method:'GET'})
//         .then((res)=>res.json())
//         .then((data)=>{
//             this.setState({Report_name:data})
//         })
//     }
// }


// export default Home;



// const Home = ()=>{


    
//     return(
//         <>
//         <div id="lreport">
//             <h1>Latest Reports</h1>
//             <hr class="hr"/>
//             <hr class="hrt"/>
//             <br/>
//             <div id="containermain">
               
//                 <Product/>

//             </div>
            
//         </div>
//         </>
//     )
// }

// export default Home;