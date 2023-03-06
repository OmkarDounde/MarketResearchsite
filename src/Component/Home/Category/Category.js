import React, { Component } from "react";
import './Listing.css'
import axios from 'axios' //for data fetching
import CategoryDisplay from './CategoryDisplay'
// import ListcateDisplay from './ListcateDisplay'
// import ListCat from './ListCat'
// const url = "http://localhost:1226/categories?utt=";
const url = "https://marketresearch.onrender.com/categories?utt=";



class Category extends Component {

    constructor() {
        super()
        this.state = {
            category1: ''
        }

    }

    render() {
        console.log('this.state.category1', this.state.category1)
        // 

        return (
            <>
                <div className="containermain">

                    <div className="latestr">
                        <div className="latestpub">
                            <h2> &nbsp; {this?.state?.category1 && this?.state?.category1[0].category}  </h2>{/*data from state has been binded*/}
                        </div>
                        <div className="latestr1">
                            <span>Home</span> | Reports | Reports | Reports
                        </div>
                    </div>


                    <div className="lpc">
                        <div className="reportsec">
                            <CategoryDisplay CateReport={this.state.category1} />  {/*as a props data is passed*/}

                        </div>
                        <div className="catsecg">
                            <div className="catseerch">
                                <input type="text" placeholder="Search Keyword" />
                            </div>
                            <div className="catsec1">
                                <div className="catsec2">
                                    <div className="categ">
                                        Categories
                                    </div>
                                </div>
                                <div className="catsec34">
                                    <div className="cataaaa">
                                    <span className="Pharmacate1">{this?.state?.category1 && this?.state?.category1[0].category}</span>
                                    <span className="pharmalogo1"><img src={this?.state?.category1 && this?.state?.category1[0].image} alt="" /></span>
                                    </div>
                                    
                                </div>

                            </div>

                            <div className="whydiv">
                                <div className="catsecc23">
                                    <div className="categ1">
                                        Why Market Research?
                                    </div>
                                </div>
                                <div className="whydiv1">
                                    <div className="whydiv3">
                                        Inflallible Methodology
                                    </div>
                                    <div className="whydiv4">
                                        <p>To ensure high-level data integrity,
                                            accurate analysis, and impeccable
                                            forecasts</p>
                                    </div>
                                </div>
                                <div className="whydiv2">
                                    <div className="whydiv3">
                                        Analyst Support
                                    </div>
                                    <div className="whydiv4">
                                        <p>For complete satisfaction</p>
                                    </div>
                                </div>
                                <div className="whydiv2">
                                    <div className="whydiv3">
                                        Customization
                                    </div>
                                    <div className="whydiv4">
                                        <p>On-demand customization of scope of the report to exactly meet your needs</p>
                                    </div>
                                </div>
                                <div className="whydiv2">
                                    <div className="whydiv3">
                                        Targeted Market View
                                    </div>
                                    <div className="whydiv4">
                                        <p>Targeted market view to provide pertinent information and save time of readers</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }


    componentDidMount() {
        let utt = this.props.match.params.utt;
        sessionStorage.setItem('utt', utt);
        axios.get(`${url}${utt}`)
            .then((res) => { this.setState({ category1: res.data }) })




    }

}




export default Category;