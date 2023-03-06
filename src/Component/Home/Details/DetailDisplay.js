import React from "react";
// import { Link } from "react-router-dom";

import "./Detail.css";
// import { Link } from "react-router-dom";
const DetailDisplay = (props) => {
    // console.log(">>>",props)
   // console.log(props.match.params.utt)

    const DetailData = ({ DetailReport }) => {
        if (DetailReport) {
            if(DetailReport.length > 0){return DetailReport.map((item) => {
                return (
                    <>
<div class="reportsec1">
                                <div className="reportimg">
                                    <img src="https://i.ibb.co/CBRRZSt/reportimage.jpg" alt="" />
                                </div>
                                <div className="reporttile">
                                    <div className="reporttitle">
                                        Global Lab-on-a-chip (LOC) Market By Product Type (In Silicon, In Glass) And By
                                        End-Users/Application (Genomics and Proteomics, Diagnostics) Global Market Share, Forecast
                                        Data, In-Depth Analysis, And Detailed Overview, and Forecast, 2022 - 2028 
                                    </div>
                                    <div className="reportinfo">
                                        <div className="reportinfo1">
                                            <span className="reportinfost">
                                                <i className="fa fa-bookmark" aria-hidden="true"></i>
                                                Report Code
                                                <hr className="hrt" />
                                            </span>
                                            <span className="reportinfost2">
                                                PM-21563
                                            </span>
                                        </div>
                                        <div className="reportinfo1">
                                            <span className="reportinfost">
                                                <i className="fas fa-layer-group" aria-hidden="true"></i> Category
                                                <hr className="hrt" />
                                            </span>
                                            <span className="reportinfost2">
                                                Medical Devices
                                            </span>
                                        </div>
                                        <div className="reportinfo1">
                                            <span className="reportinfost">
                                                <i className="fas fa-calendar-minus" aria-hidden="true"></i> Published Date
                                                <hr className="hrt" />
                                            </span>
                                            <span className="reportinfost2">
                                                21 December 2022
                                            </span>
                                        </div>
                                        <div className="reportinfo1">
                                            <span className="reportinfost">
                                                <i className="fas fa-book-open" aria-hidden="true"></i> Pages
                                                <hr className="hrt" />
                                            </span>
                                            <span className="reportinfost2">
                                                110
                                            </span>
                                        </div>

                                        <div className="reportinfo1">
                                            <span className="reportinfost">
                                                <i className="fa fa-file-text" aria-hidden="true"></i> Format
                                                <hr className="hrt" />
                                            </span>
                                            <span className="reportinfost2">
                                                PDF
                                            </span>
                                        </div>




                                    </div>
                                    <div className="reportinqiry">
                                        <div className="reportinqiry1">
                                            <p>REQUEST FOR SAMPLE</p>
                                        </div>
                                        <div className="reportinqiry2">
                                            <p>REQUEST FOR SAMPLE</p>
                                        </div>
                                        <div className="reportinqiry2">
                                            <p>REQUEST FOR SAMPLE</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    </>
                )
            })
        }
        }
    }


    return (
        <><div className="main">
            {DetailData(props)}
        </div>
            
        </>


    )
}
 
export default DetailDisplay;














// import React from "react";
// import "./Detail.css";


// const DetailDisplay =()=>{

// return(
//    <>
//    <div class="reportsec1">
//                                 <div class="reportimg">
//                                     <img src="https://i.ibb.co/CBRRZSt/reportimage.jpg" alt="" />
//                                 </div>
//                                 <div class="reporttile">
//                                     <div class="reporttitle">
//                                         Global Lab-on-a-chip (LOC) Market By Product Type (In Silicon, In Glass) And By
//                                         End-Users/Application (Genomics and Proteomics, Diagnostics) Global Market Share, Forecast
//                                         Data, In-Depth Analysis, And Detailed Overview, and Forecast, 2022 - 2028 
//                                     </div>
//                                     <div class="reportinfo">
//                                         <div class="reportinfo1">
//                                             <span class="reportinfost">
//                                                 <i class="fa fa-bookmark" aria-hidden="true"></i>
//                                                 Report Code
//                                                 <hr class="hrt" />
//                                             </span>
//                                             <span class="reportinfost2">
//                                                 PM-21563
//                                             </span>
//                                         </div>
//                                         <div class="reportinfo1">
//                                             <span class="reportinfost">
//                                                 <i class="fas fa-layer-group" aria-hidden="true"></i> Category
//                                                 <hr class="hrt" />
//                                             </span>
//                                             <span class="reportinfost2">
//                                                 Medical Devices
//                                             </span>
//                                         </div>
//                                         <div class="reportinfo1">
//                                             <span class="reportinfost">
//                                                 <i class="fas fa-calendar-minus" aria-hidden="true"></i> Published Date
//                                                 <hr class="hrt" />
//                                             </span>
//                                             <span class="reportinfost2">
//                                                 21 December 2022
//                                             </span>
//                                         </div>
//                                         <div class="reportinfo1">
//                                             <span class="reportinfost">
//                                                 <i class="fas fa-book-open" aria-hidden="true"></i> Pages
//                                                 <hr class="hrt" />
//                                             </span>
//                                             <span class="reportinfost2">
//                                                 110
//                                             </span>
//                                         </div>

//                                         <div class="reportinfo1">
//                                             <span class="reportinfost">
//                                                 <i class="fa fa-file-text" aria-hidden="true"></i> Format
//                                                 <hr class="hrt" />
//                                             </span>
//                                             <span class="reportinfost2">
//                                                 PDF
//                                             </span>
//                                         </div>




//                                     </div>
//                                     <div class="reportinqiry">
//                                         <div class="reportinqiry1">
//                                             <p>REQUEST FOR SAMPLE</p>
//                                         </div>
//                                         <div class="reportinqiry2">
//                                             <p>REQUEST FOR SAMPLE</p>
//                                         </div>
//                                         <div class="reportinqiry2">
//                                             <p>REQUEST FOR SAMPLE</p>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//    </>
// )

// }


// export default DetailDisplay;





