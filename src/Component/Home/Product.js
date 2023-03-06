import React, { Component } from "react";
import "./Home.css";
import "./Product.css";
import axios from "axios";
// import Product from './Product';
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

// const url = "http://localhost:1226/Reports"
// const url = "https://marketresearch.onrender.com/LReport"

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Report_name: "",
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios.get(`https://marketresearch.onrender.com/Reports`).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((item) => (
        <React.Fragment>
          <div id="containermain" key={item.category_id}>
            <div id="imgc">
              <img src={item.image} alt={item.image} />
            </div>

            <div id="lefside">
              <h6 className="rehead">{item.Report_name}</h6>
              <div id="re">
                <div className="cat15">
                  Category :- {item.category} |&nbsp; ReportId :-{" "}
                  {item.ReportId} |&nbsp; Published On :- {item.PubDate}
                </div>
                <div className="redmore">
                  <button>
                    <Link
                      to={`/details?report=${item.ReportNo}`}
                      key={item.ReportNo}
                    >
                      ReadMore
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),

        postData,
      });
    });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
    
    
  }
  render() {
    return (
      <>
        <div>
          {this.state.postData}
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </>
    );
  }
}

export default Home;

// import React from "react";
// import './Home.css';
// import { Link } from 'react-router-dom';

// const Product = (props) => {
//     const listRepo = ({ reportList }) => {
//         if (reportList) {
//             return reportList.map((item) => {
//                 return (
//                     <>

//                         <div id="containermain" key={item.category_id} >

//                                 <div id="imgc">
//                                     <img src={item.image} alt={item.image} />
//                                 </div>

//                             <div id="lefside">
//                                 <h6 className="rehead">{item.Report_name}</h6>
//                                 <div id="re">
//                                     <div className="cat15">Category :- {item.category}  |&nbsp; ReportId :- {item.ReportId} |&nbsp; Published On :- {item.PubDate}
//                                     </div>
//                                     <div className="redmore">
//                                     <button>
//                                     <Link to={`/details?report=${item.ReportNo}`} key={item.ReportNo}>Read More</Link></button>
//                                     </div>

//                                 </div>
//                             </div>

//                         </div>
//                     </>

//                 )
//             })

//         }
//     }

//     return (
//         <>
//             {listRepo(props)}
//         </>

//     )
// }

// export default Product;

//Original data till date 06/03/2023

// import React from "react";
// import './Home.css';
// import { Link } from 'react-router-dom';

// const Product = (props) => {
//     const listRepo = ({ reportList }) => {
//         if (reportList) {
//             return reportList.map((item) => {
//                 return (
//                     <>

//                         <div id="containermain" key={item.category_id} >

//                                 <div id="imgc">
//                                     <img src={item.image} alt={item.image} />
//                                 </div>

//                             <div id="lefside">
//                                 <h6 className="rehead">{item.Report_name}</h6>
//                                 <div id="re">
//                                     <div className="cat15">Category :- {item.category}  |&nbsp; ReportId :- {item.ReportId} |&nbsp; Published On :- {item.PubDate}
//                                     </div>
//                                     <div className="redmore">
//                                     <button>
//                                     <Link to={`/details?report=${item.ReportNo}`} key={item.ReportNo}>Read More</Link></button>
//                                     </div>

//                                 </div>
//                             </div>

//                         </div>
//                     </>

//                 )
//             })

//         }
//     }

//     return (
//         <>
//             {listRepo(props)}
//         </>

//     )
// }

// export default Product;
