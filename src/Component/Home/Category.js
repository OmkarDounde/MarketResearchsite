import React, { Component } from 'react';
import './Category.css'
import CategoryDisplay from './CategoryDisplay';
// const url = "http://localhost:1226/Category?ut"
const url = 'https://marketresearch.onrender.com/Category?ut'





class Category extends Component {
    constructor() {
        super()
        this.state = {
            category:''
        }
    }


    render(){
        return (
            <>
            <div id="Categor">
                    <div className='oidiv'>
                        <h1 >Our Industries</h1>
                        <hr className="hr" />
                        <hr className="hrt2" />
                        <p >The Market Research is a one stop industry research
                            provider of actionable intelligence. <br />We are
                            committed to providing highest quality research and consulting services to our customers and <br />help
                            them
                            understand key market trends, identify opportunities, and make informed decisions by providing market
                            research solutions at an affordable cost.
    
                            <br /> We help our clients in getting solutions to their research requirements through our syndicated and
                            consulting research services and specialize in industries exhibited below,
                        </p>
    
                    </div>
                    <div className='catdiv'>
                    <CategoryDisplay CategoryData ={this.state.category} />
                    </div>
            </div>
            </>
        )
    }

    



    componentDidMount(){
        fetch(`${url}`, {method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({category:data})
        })
    }


}

export default Category;