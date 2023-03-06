import React from "react";
import { Link } from "react-router-dom";
const IndustriesDisplay = (props) => {


    const cateData = ({ CategoryData }) => {

        if (CategoryData) {
            return CategoryData.map((item) => {
                return (
                    <>
                        <Link to={`/Listing/${item.category_id}`} key={item.category_id}>
                        <div className="cate" >
                                <img src={item.category_image} alt={item.category_image} />
                                <div className="incat">
                                    <h2 >{item.category}</h2>
                                </div>
                            </div>
                        </Link>
                            
                        
                    </>
                )
            })
        }
    }
    return (
     <>
     {cateData(props)}
     </>
            
   
    )

}











export default IndustriesDisplay;