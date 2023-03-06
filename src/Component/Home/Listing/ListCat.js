import React, { Component } from 'react';
import './Listing.css'
import ListcateDisplay from './ListcateDisplay';

// const curl = 'http://localhost:1226/Category?ut'
const curl = 'https://marketresearch.onrender.com/Category?ut'




class ListCat extends Component {
    constructor() {
        super()
        this.state = {
            category:''
        }
    }


    render(){

        console.log('this.state.category',this.state.category)
        return (
            <>
        
            <ListcateDisplay CategoryData ={this.state.category}/>
         
             
            </>
        )
    }

    



    componentDidMount(){
        fetch(`${curl}`, {method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({category:data})
        })
    }


}

export default ListCat;




























// import React, { Component } from "react";
// import './Listing.css'
// import axios from 'axios' ///for data fetching
// import ListcateDisplay from "./ListcateDisplay";
// const url = "http://localhost:1226/catg";

// class ListCat extends Component {

//     constructor() {
//         super()
//         this.state = {
//             Reports: ''
//         }

//     }

//     render() {
// console.log('this.state.Reports',this.state.Reports)


//         return (
//             <><div class="catsec3">
//                 <ListcateDisplay categorydata={this.state.Reports}/>
//                 </div>
//             </>
//         )
//     }


//     componentDidMount() {
//         let utt = this.props.match.params.utt;
//         sessionStorage.setItem('utt', utt);
//         axios.get(`${url}${utt}`)
//             .then((res) => { this.setState({ Reports: res.data }) })
//     }

// }




// export default ListCat;