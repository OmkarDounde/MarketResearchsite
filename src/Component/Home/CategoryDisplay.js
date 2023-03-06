import React from "react";
import { Link } from "react-router-dom";
const CategoryDisplay = (props) => {


    const cateData = ({ CategoryData }) => {

        if (CategoryData) {
            return CategoryData.map((item) => {
                return (
                    <>
                        <Link to={`/Listing/${item.category_id}`} key={item._id}>
                        <div className="cate" key={item.id}>
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











export default CategoryDisplay;