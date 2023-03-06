import React, { Component } from "react";
import "./Listing.css";
import axios from "axios"; ///for data fetching
import ListingDisplay from "./ListingDisplay";
import CategoryDisplay from "./ListCat";
// const url = "http://localhost:1226/Reports?utt=";
const url = "https://marketresearch.onrender.com/Reports?utt=";

// const curl = "http://localhost:1226/Category";
// import ListCat from "./ListCat";

class Listing extends Component {
  constructor() {
    super();
    this.state = {
      Reports: "",
    };
  }

  render() {
    console.log("this.state.Reports", this.state.Reports);

    return (
      <>
        <div className="containermain">
          <div className="latestr">
            <div className="latestpub">
              <h2>
                {" "}
                &nbsp;{" "}
                {this?.state?.Reports && this?.state?.Reports[0].category}{" "}
              </h2>
              {/*data from state has been binded*/}
            </div>
            <div className="latestr1">
              <span>Home</span> | Reports | Reports | Reports
            </div>
          </div>

          <div className="lpc">
            <div className="reportsec">
              <ListingDisplay ListReport={this.state.Reports} />{" "}
              {/*as a props data is passed*/}
            </div>
            <div className="catsecg">
              <div className="catseerch">
                <input type="text" placeholder="Search Keyword" />
              </div>
              <div className="catsec12">
                <div className="catsec2">
                  <div className="categ">Categories</div>
                </div>

                <CategoryDisplay />
              </div>

              <div className="whydiv">
                <div className="catsecc">
                  <div className="categ">Why Market Research?</div>
                </div>
                <div className="whydiv1">
                  <div className="whydiv3">Inflallible Methodology</div>
                  <div className="whydiv4">
                    <p>
                      To ensure high-level data integrity, accurate analysis,
                      and impeccable forecasts
                    </p>
                  </div>
                </div>
                <div className="whydiv2">
                  <div className="whydiv3">Analyst Support</div>
                  <div className="whydiv4">
                    <p>For complete satisfaction</p>
                  </div>
                </div>
                <div className="whydiv2">
                  <div className="whydiv3">Customization</div>
                  <div className="whydiv4">
                    <p>
                      On-demand customization of scope of the report to exactly
                      meet your needs
                    </p>
                  </div>
                </div>
                <div className="whydiv2">
                  <div className="whydiv3">Targeted Market View</div>
                  <div className="whydiv4">
                    <p>
                      Targeted market view to provide pertinent information and
                      save time of readers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    let utt = this.props.match.params.utt;
    sessionStorage.setItem("utt", utt);
    axios.get(`${url}${utt}`).then((res) => {
      this.setState({ Reports: res.data });
    });
  }
}

export default Listing;








//Original data till date 06/03/2023
// import React, { Component } from "react";
// import "./Listing.css";
// import axios from "axios"; ///for data fetching
// import ListingDisplay from "./ListingDisplay";
// import CategoryDisplay from "./ListCat";
// // const url = "http://localhost:1226/Reports?utt=";
// const url = "https://marketresearch.onrender.com/Reports?utt=";

// // const curl = "http://localhost:1226/Category";
// // import ListCat from "./ListCat";

// class Listing extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Reports: "",
//     };
//   }

//   render() {
//     console.log("this.state.Reports", this.state.Reports);

//     return (
//       <>
//         <div className="containermain">
//           <div className="latestr">
//             <div className="latestpub">
//               <h2>
//                 {" "}
//                 &nbsp;{" "}
//                 {this?.state?.Reports && this?.state?.Reports[0].category}{" "}
//               </h2>
//               {/*data from state has been binded*/}
//             </div>
//             <div className="latestr1">
//               <span>Home</span> | Reports | Reports | Reports
//             </div>
//           </div>

//           <div className="lpc">
//             <div className="reportsec">
//               <ListingDisplay ListReport={this.state.Reports} />{" "}
//               {/*as a props data is passed*/}
//             </div>
//             <div className="catsecg">
//               <div className="catseerch">
//                 <input type="text" placeholder="Search Keyword" />
//               </div>
//               <div className="catsec12">
//                 <div className="catsec2">
//                   <div className="categ">Categories</div>
//                 </div>

//                 <CategoryDisplay />
//               </div>

//               <div className="whydiv">
//                 <div className="catsecc">
//                   <div className="categ">Why Market Research?</div>
//                 </div>
//                 <div className="whydiv1">
//                   <div className="whydiv3">Inflallible Methodology</div>
//                   <div className="whydiv4">
//                     <p>
//                       To ensure high-level data integrity, accurate analysis,
//                       and impeccable forecasts
//                     </p>
//                   </div>
//                 </div>
//                 <div className="whydiv2">
//                   <div className="whydiv3">Analyst Support</div>
//                   <div className="whydiv4">
//                     <p>For complete satisfaction</p>
//                   </div>
//                 </div>
//                 <div className="whydiv2">
//                   <div className="whydiv3">Customization</div>
//                   <div className="whydiv4">
//                     <p>
//                       On-demand customization of scope of the report to exactly
//                       meet your needs
//                     </p>
//                   </div>
//                 </div>
//                 <div className="whydiv2">
//                   <div className="whydiv3">Targeted Market View</div>
//                   <div className="whydiv4">
//                     <p>
//                       Targeted market view to provide pertinent information and
//                       save time of readers
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   componentDidMount() {
//     let utt = this.props.match.params.utt;
//     sessionStorage.setItem("utt", utt);
//     axios.get(`${url}${utt}`).then((res) => {
//       this.setState({ Reports: res.data });
//     });
//   }
// }

// export default Listing;


