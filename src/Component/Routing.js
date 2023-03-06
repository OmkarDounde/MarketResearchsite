import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Category from './Home/Category/Category'
import Listing from './Home/Listing/Listing'
import Detail from './Home/Details/Detail'
import PlaceOrder from './Home/Orders/PlaceOrder'
import ViewBooking from './Home/Orders/viewOrders'
import SampleForm from './Home/Orders/SampleForm'
import viewSample from './Home/Orders/viewSample'
import Industries from './Home/Industries/Industris'
import PressRelease from './Home/Industries/PressRelease'
import blog from './Home/Industries/blog'
import  Einsights from './Home/Industries/Einsights'
import  Aboutus from './Aboutus'
import  Contactus from './Contactus'
import  Career from './Career'
import  FAQs from './FAQs'
import  Sitemap from './Sitemap'
import  RefundPolicy from './RefundPolicy'
import  Conditions from './Conditions'
import  PrivacyPolicy from './PrivacyPolicy'
import  RSS from './RSS'
import  XML from './XML'
import Custumization from './Home/Orders/Custumization'
import viewCustmization from './Home/Orders/viewCustmization'
import Inquiry from './Home/Orders/Inquiry'
import viewInquiry from './Home/Orders/viewInquiry'

const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Route exact path="/" component={Home}/>  
            <Route path="/Industries" component={Industries}/> 
            <Route path="/PressRelease" component={PressRelease}/>
            <Route path="/blog" component={blog}/>
            <Route path="/E-insights" component={Einsights}/>
            <Route path="/Aboutus" component={Aboutus}/>
            <Route path="/Contactus" component={Contactus}/>
            <Route path="/Career" component={Career}/>
            <Route path="/FAQs" component={FAQs}/>
            <Route path="/Sitemap" component={Sitemap}/>
            <Route path="/RefundPolicy" component={RefundPolicy}/>
            <Route path="/Conditions" component={Conditions}/>
            <Route path="/PrivacyPolicy" component={PrivacyPolicy}/>
            <Route path="/RSS" component={RSS}/>
            <Route path="/XML" component={XML}/>
            <Route path="/Listing/:utt" component={Listing}/> 
            <Route path="/Category/:utt" component={Category}/> 
            <Route path="/details" component={Detail}/> 
            <Route path="/placeOrder" component={PlaceOrder}/> 
            <Route path="/CustmizationRequest" component={Custumization}/> 
            <Route path="/Inquiry" component={Inquiry}/> 
            <Route path="/sampleReport" component={SampleForm}/> 
            <Route path="/viewSample" component={viewSample}/>
            <Route path="/viewCustmization" component={viewCustmization}/>
            <Route path="/ViewInquiry" component={viewInquiry}/>
            <Route path="/viewBooking" component={ViewBooking}/>
        <Footer/>
        </BrowserRouter>
    )

}



export default Routing;






































