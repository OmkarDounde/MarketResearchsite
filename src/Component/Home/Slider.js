import React, { Component } from "react";
import './Slider.css';



class  Slider extends Component {
      

    constructor(){
        super()

        this.state={
            title:'This Is Zomato App',
            userInput:'User Txt Here'
        }
    } 
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({userInput:event.target.value})
        this.props.userInput(event.target.value)
    }
    
    render(){
        return(
            <>
            <div id="slidesec">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner ">
                                <div className="carousel-item active slidedive" data-bs-interval="10000">
                                    <img src="https://i.ibb.co/nnmxtHY/pexels-j-shoots-234527.jpg" className="d-block w-100" alt="Omkar" />
                                    {/* https://i.ibb.co/31gQNCz/bg.jpg */}
                                    <div id="fistslide">
                                        <div>
                                            <h2 className="colr">The World’s Largest Market Research Store</h2>
                                            <br />
                                            <p className="colr">The Most Respected Publications Cite Research and Markets</p>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="carousel-item slidedive" data-bs-interval="2000">
                                    <img src="https://i.ibb.co/jGXfZRs/pexels-felix-mittermeier-956999.jpg" className="d-block w-100"
                                        alt="Omkar" />
                                    <div id="fistslide">
                                        <div>
                                            <h2 className="colr">Why Choose Market Research?</h2>
                                            <p className="colr">Discover Insights that drive growth. <br />Our goal is to provide trusted and effective
                                                business solutions to all our clients.<br />
        
                                                Delivering customized global market intelligence to top management in marketing, sales,
                                                strategy, and product management. <br />Trusted by Fortune 500 companies.</p>
                                            <br />
        
                                        </div>
                                    </div>
                                </div>
        
        
                                <div className="carousel-item slidedive">
                                    <img src="https://i.ibb.co/NjKJJt2/pexels-mohamed-khaled-397998.jpg" className="d-block w-100"
                                        alt="Omkar" />
                                    <div id="fistslide">
                                        <div>
                                            <h2 className="colr">Through our innovative research, we<br /> keep our clients first and deliver
                                                <br />Value-added services
                                            </h2>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
        
                        </div>
                        <div id="searchi">
                            <form id="form" role="search">
                                <input onChange={this.handleChange} className="homesearch" type="search" id="query" name="q" placeholder="Search by Keywords" aria-label="Search through site content" />
                            </form>  
                                            
                        </div>
                    </div>
            
            </>
        )
    }

}

export default Slider;