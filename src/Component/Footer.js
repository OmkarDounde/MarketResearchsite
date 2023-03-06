import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = ()=>{
    return(
        <>
<footer>
    <div id="company">
        <h5>Company</h5>
        <Link to={`/Aboutus`} >  <h5>About Us</h5></Link>
        <Link to={`/Contactus`} >  <h5>Contact Us</h5></Link>
        <Link to={`/Career`} >  <h5>Career</h5></Link>
        <Link to={`/FAQs`} >  <h5>FAQs</h5></Link>
        <Link to={`/Sitemap`} >  <h5>Sitemap</h5></Link>
    </div>
    <div id="companee">
    <Link to={`/RefundPolicy`} ><h5>Refund Policy</h5></Link>
    <Link to={`/Conditions`} ><h5>Terms & Conditions</h5></Link>
    <Link to={`/PrivacyPolicy`} ><h5>Privacy Policy</h5> </Link>      
    <Link to={`/RSS`} >   <h5>RSS</h5></Link>
    <Link to={`/XML`} >   <h5>XML</h5></Link>
    </div>
    <div id="follow">
        <h5>Follow Us</h5>
        
        <p className="follow"><img src="https://i.ibb.co/61LQ0GN/link.png" alt="Linkdin"/></p>
        <p className="follow"><img src="https://i.ibb.co/G9qBcTb/twitter.png" alt="Twitter"/></p>
        <p className="follow"><img src="https://i.ibb.co/BTpDyFv/Facebook-Logo.png" alt="Facebook"/></p>
        <p className="follow"><img src="https://i.ibb.co/k52Jj55/youtube.png" alt="Youtube"/></p>

    </div>
    {/* <div id="newsletter">
        <h5>Suscribe Our Newsletter</h5>
        <select>
            <option>----Select Industry----</option>
            <option>--Select Industry--</option>
            <option>--Select Industry--</option>
            <option>--Select Industry--</option>
            <option>--Select Industry--</option>
            <option>--Select Industry--</option>
        </select>
        <p></p>
        <div className="form-group mb-2">
            <input className="form-control" type="email" placeholder="Your Email" name="newsletteremail"
                id="newsletteremail" required=""/>
        </div>
        <p></p>
        <button>Sign Up</button>
    </div> */}
    <div id="paypal">
        <h5>We accept all major credit cards and bank cards</h5>
        <img src="https://i.ibb.co/2843FXH/paypal.png" alt="PaymentMethod"/>
    </div>

</footer>
        </>
    )
}

export default Footer;