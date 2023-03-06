import React, { Component } from "react";
import './Header.css';

import { Link } from "react-router-dom";

class  HeaderDisplay extends Component {
    constructor(){
        super()
    this.state = {
        curDT : new Date().toLocaleString(),
    }
    }
    
      
    render(){
        return(
            <>
           
                        <div id="mainbox">
                            <div id="left">
                                <img src="https://i.ibb.co/n1MgbWJ/Logo-46.png" alt="" />
                                {/* https://i.ibb.co/n1MgbWJ/Logo-46.png
                                https://i.ibb.co/Yt4GLRP/logo-transparent.png
                                https://i.ibb.co/2ZT4dbG/logo23.png
                                https://i.ibb.co/2ZT4dbG/logo23.png
                                https://i.ibb.co/1RGzpZq/Logo45.png
                                https://i.ibb.co/Yt4GLRP/logo-transparent.png */}
                                {/* https://i.ibb.co/L1L4FZ8/Logot1.png  */}
                            </div>
                            <div id="right">
                                <div id="topbar">
                                    <div id="contactus">
                                    <span id="span">&#128222; US Toll Free: +11445789885</span>
                                        <span id="span">UK Toll Free: +15445789885</span>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <span id="span1">
                                            &#128231; Email: sales@marketresearch.com
                                        </span>
                                    </div>
                                </div>
                                <div id="botbar">
                                <Link to={`/`} >
                                    <div id="home">
                                        Home
                                    </div>
                                    </Link>
                                    <Link to={`/Industries`} >
                                    <div id="home">
                                        Industries
                                    </div>
                                    </Link>
                                    <Link to={`/PressRelease`} >
                                    <div id="home">
                                        Press Releases
                                    </div>
                                    </Link>
                                    <Link to={`/E-insights`} >
                                    <div id="home">
                                        e-Insights
                                    </div>
                                    </Link>
                                    <Link to={`/blog`} >
                                    <div id="home">
                                        Blog
                                    </div>
                                    </Link>
                                    <div id="regi">
                                    <p>Date And Time : {this.state.curDT}</p>
                                    </div>
                                </div>
        
                            </div>
                        </div>
                        
                    
            
            </>
        )
    }

}

export default HeaderDisplay;








































// import React from "react";
// import './Header.css';


// const HeaderDisplay = ()=>{
// return(
//     <>
//     <div id="slidesec">
//                 <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
//                     <div class="carousel-indicators">
//                         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
//                             aria-current="true" aria-label="Slide 1"></button>
//                         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
//                             aria-label="Slide 2"></button>
//                         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
//                             aria-label="Slide 3"></button>
//                     </div>
//                     <div class="carousel-inner ">
//                         <div class="carousel-item active slidedive" data-bs-interval="10000">
//                             <img src="https://i.ibb.co/nnmxtHY/pexels-j-shoots-234527.jpg" class="d-block w-100" alt="Omkar" />
//                             <div id="fistslide">
//                                 <div>
//                                     <h2 class="colr">The World’s Largest Market Research Store</h2>
//                                     <br />
//                                     <p class="colr">The Most Respected Publications Cite Research and Markets</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="carousel-item slidedive" data-bs-interval="2000">
//                             <img src="https://i.ibb.co/jGXfZRs/pexels-felix-mittermeier-956999.jpg" class="d-block w-100"
//                                 alt="Omkar" />
//                             <div id="fistslide">
//                                 <div>
//                                     <h2 class="colr">Why Choose Market Research?</h2>
//                                     <p class="colr">Discover Insights that drive growth. <br />Our goal is to provide trusted and effective
//                                         business solutions to all our clients.<br />

//                                         Delivering customized global market intelligence to top management in marketing, sales,
//                                         strategy, and product management. <br />Trusted by Fortune 500 companies.</p>
//                                     <br />

//                                 </div>
//                             </div>
//                         </div>


//                         <div class="carousel-item slidedive">
//                             <img src="https://i.ibb.co/NjKJJt2/pexels-mohamed-khaled-397998.jpg" class="d-block w-100"
//                                 alt="Omkar" />
//                             <div id="fistslide">
//                                 <div>
//                                     <h2 class="colr">Through our innovative research, we<br /> keep our clients first and deliver
//                                         <br />Value-added services
//                                     </h2>
//                                     <br />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
//                         data-bs-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Previous</span>
//                     </button>
//                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
//                         data-bs-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Next</span>
//                     </button>

//                 </div>
//                 <div id="mainbox">
//                     <div id="left">
//                         <img src="https://i.ibb.co/Yt4GLRP/logo-transparent.png" alt="" />
//                     </div>
//                     <div id="right">
//                         <div id="topbar">
//                             <div id="contactus">
//                                 &#128222; US Toll Free: +11445789885
//                                 <span id="span">UK Toll Free: +15445789885</span>
//                                 &nbsp; &nbsp; &nbsp; &nbsp;
//                                 <span id="span">
//                                     &#128231; Email: sales@marketresearch.com
//                                 </span>
//                             </div>
//                         </div>
//                         <div id="botbar">
//                             <div id="home">
//                                 Home
//                             </div>
//                             <div id="home">
//                                 Industries
//                             </div>
//                             <div id="home">
//                                 Press Releases
//                             </div>
//                             <div id="home">
//                                 e-Insights
//                             </div>
//                             <div id="home">
//                                 Blog
//                             </div>
//                             <div id="regi">
//                                 Register
//                             </div>
//                             <div id="login">
//                                 Login
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//                 <div id="searchi">
//                     <form id="form" role="search">
//                         <input  class="om" type="search" id="query" name="q" placeholder="Search by Keywords" aria-label="Search through site content" />
//                         <button type="submit"><i class="fa fa-search"></i></button>
//                     </form>
//                 </div>
//             </div>
    
//     </>
// )
// }

// export default HeaderDisplay;