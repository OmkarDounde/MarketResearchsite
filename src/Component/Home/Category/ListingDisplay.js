import React from "react";
import { Link } from "react-router-dom";

import './Listing.css';
// import { Link } from "react-router-dom";
const ListingDisplay = (props) => {
    // console.log(">>>",props)
   // console.log(props.match.params.utt)

    const ReportList = ({ ListReport }) => {
        if (ListReport) {
            if(ListReport.length > 0){return ListReport.map((item) => {
                return (
                    
                    <div className="reportdiv" key={item._id}>
                                <div className="reportimgg">
                                <img src="https://i.ibb.co/CBRRZSt/reportimage.jpg" alt="Omkar"/>
                                </div>
                                <div className="reporttile">
                                    <div className="reporttitle">
                                        <p> {item.Report_name}</p>
                                    </div>
                                    <div className="reporttitle1">
                                        <div className="cattile1">
                                            <div className="cattile2">
                                                <span className="contentstyle"> Category: </span> <span className="contentstyle2">{item.category}</span>
                                            </div>
                                            <div className="cattile3">
                                                <span className="contentstyle">&nbsp;| Pages:</span> <span className="contentstyle2">{item.pages} </span>
                                            </div>
                                            <div className="cattile3">
                                                <span className="contentstyle">&nbsp;|&nbsp; Date:</span> <span className="contentstyle2"> {item.PubDate}</span>
                                            </div>
                                            <div className="cattile4">
                                            <Link to={`/details?report=${item.ReportNo}`}>  <button>ReadMore</button></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                    </div>
                   
                )
            })
        }else{
            return(
                <div><h1>No Data As Per Filter</h1></div>

            )
        }
            
        }else{
            return(
                <div>
                    <img src = "Image/loader.gif" alt="Loader"/>
                    <h1>Loading......</h1>
                </div>
            )
        }
    }


    return (
        <><div className="main">
            {ReportList(props)}
        </div>
            
        </>


    )
}
 
export default ListingDisplay;