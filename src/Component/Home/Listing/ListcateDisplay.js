import React from "react";
import { Link } from "react-router-dom";
import './Listing.css'
const ListcateDisplay = (props) => {


    const cateData = ({ CategoryData }) => {

        if (CategoryData) {
            return CategoryData.map((item) => {
                return (
                    <Link to={`/Category/${item.category_id}`} key={item.category_id}>
                    <div className="catsec34">
                       <div className="cataaa">
                       <span className="Pharmacate">{item.category}</span>
                       <span className="pharmalogo"><img src={item.category_image} alt={item.category_image} /></span>
                       </div>
                    
                            
                    </div>
                    </Link>
                        
                    
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











export default ListcateDisplay;















// import React from "react";
// import './Listing.css';

// const ListcateDisplay = (props) => {
//     // console.log(">>>",props)
//    // console.log(props.match.params.utt)

//     const ListCate = ({ categorydata }) => {
//         if (categorydata) {
//             if(categorydata.length > 0){return categorydata.map((item) => {
//                 return (
                    
//                     <>
                                
//                                     <span class="Pharmacate">Omkar</span>
//                                     <span class="pharmalogo">Omkar </span>
                                
//                     </>
                   
//                 )
//             })
//         }
//         }
//     }


//     return (
//         <><div className="main">
//             {ListCate(props)}
//         </div>
            
//         </>


//     )
// }
 
// export default ListcateDisplay;



