import React from "react";
import './searchproduct.css';
import { Link } from "react-router-dom";
// setTimeout(function(){
//     window.location.reload(1);
//   }, 15000);
const SearchResult = (props) => {
    console.log(props)
    const listMeal = ({mealData}) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    
                    <div className="cardss">
                       
                       <Link to={`/details?report=${item.ReportNo}`}> <p>{item.Keyword} Market</p></Link>
                         
                        
                    </div>
                    
                    
                )
            })
        }
    }


    return (
        <>
        <div className="mainss">
            {listMeal(props)}
        </div>
            
        </>


    )
}

export default SearchResult;