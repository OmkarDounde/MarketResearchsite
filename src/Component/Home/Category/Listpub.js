import React, { Component } from "react";
import './Listing.css'
import axios from 'axios'
import ListPubDisplay from './ListPubDisplay';
// const url = "http://localhost:1226/categories?utt=";
const url = "https://marketresearch.onrender.com/categories?utt=";

class Listpub extends Component {

    constructor() {
        super()
        this.state = {
            omkar: ''
        }

    }

    render() {
        console.log('this.state.omkar',this.state.omkar)
        return (
            <>
            <div class="latestpub">
            <ListPubDisplay ListReport={this.state.omkar}/>
            </div>
                
            </>
        )
    }





    componentDidMount() {
        let utt = this.props.match.params.utt;
        sessionStorage.setItem('utt', utt);
        axios.get(`${url}${utt}`)
            .then((res) => { this.setState({omkar:res.data }) })
    }
}




export default Listpub;


//Listin Page data


// componentDidMount() {
//     let utt = this.props.match.params.utt;
//     let ut = this.props.match.params.ut;
//     sessionStorage.setItem('utt', utt);
//     sessionStorage.setItem('ut', ut);
//     const omkar = axios.get(`${url}${utt}`)
//     const sai = axios.get(`${ourl}${ut}`)
//     .then((res) => { this.setState(omkar={ Reports: res.data },sai={manu:res.data} ) })
// }











































// import React,{Component} from "react";
// import './Listing.css'
// import ListPubDisplay from "./ListPubDisplay";
// import axios from 'axios'

// const url = 'http://localhost:1226/category?ut=1'

// class  Listpub extends Component{
//     constructor() {
//         super()
//         this.state = {
//             category:''
//         }

//     }

//     render(){
//         return(
//             <>
//                 <ListPubDisplay ListReport={this.state.category}/>
//             </>
//         )
    
//     }

   
//     componentDidMount() {
//         let ut = this.props.match.params.ut;
//         sessionStorage.setItem('ut', ut);
//         axios.get(`${url}${ut}`)
//             .then((res) => { this.setState({ category: res.data }) })
//     }

// // componentDidMount(){
// //     fetch(`${url}`,{method:'GEt'})
// //     .then((res)=>res.json())
// //     .then((data)=>{
// //         this.setState({latepub:data})
// //     })
// // }


// }

// export default Listpub;