import React from "react";
import './Services.css'
const Services = () => {
    return (
        <>
            <div id="services">
                <h2 className="pp">
                   Our Services Provide The
                    <p className="ppp">Solutions To Grow Your Business</p>
                </h2>
                <hr className="hr"/>
                    <hr className="hrt2"/>
                        <p className="ppp">Market Research creates and offers accurate syndicated
                            and customized research reports across all markets, domains,industries,<br />sectors and verticals, and
                            assists organizations in meeting their specific and unique
                            business objectives.</p>

                        <section className="container-fluid container-md" id="gtServicesSection">
                            <div className="row">

                                <div className="col-12 justify-content-between">

                                    <ul className="nav nav-tabs nav-fill " role="tablist">
                                        <li className="nav-item vav px-2 mb-2">
                                            <a className="nav-link active vav" id="syndicatedResearch-tab" data-bs-toggle="tab"
                                                href="#syndicatedResearch">
                                                <i className="fas fa-search fs-6"></i>&nbsp;Syndicated Research</a>
                                        </li>
                                        <li className="nav-item vav px-2 mb-2">
                                            <a className="nav-link vav" id="customSolutions-tab" data-bs-toggle="tab"
                                                href="#customSolutions">
                                                <i className="fas fa-check-circle fs-6"></i>&nbsp;Custom Solutions</a>
                                        </li>
                                        <li className="nav-item vav px-2 mb-2">
                                            <a className="nav-link vav" id="rapidresearch-tab" data-bs-toggle="tab" href="#rapidResearch">
                                                <i className="fas fa-recycle fs-6"></i>&nbsp;Rapid Research</a>
                                        </li>
                                        <li className="nav-item vav px-2 mb-2">
                                            <a className="nav-link vav" id="subscriptionservices-tab" data-bs-toggle="tab"
                                                href="#subscriptionServices">
                                                <img src="https://i.ibb.co/RTqnrj2/new-icon-gif-2.gif" alt="New" width="40" height="25"/>
                                                <i className="fas fa-cogs fs-6"></i>&nbsp;Subscription Services</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="myTabContent">

                                        <div className="tab-pane fade show active card-body maintab" id="syndicatedResearch">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-8 col-12">
                                                    <div className="gt-service-text">The Market Research syndicated research service
                                                        provides complete solution to the client requirements through their
                                                        experienced analyst team. Each report provides in-depth analysis on the
                                                        topic and discuss drivers, restraints and opportunities available in the
                                                        market. The service is designed to help our clients in their decision
                                                        support system. The analysis also covers the complete spectrum of the
                                                        research topic to help our clients meeting their business objective.
                                                        <br />
                                                        {/* <a className="btn mt-4 mb-3 float-end" href="Listing.html">Read More </a> */}
                                                        </div>
                                                    <br />
                                                   
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-12 image1">
                                                    <img src="https://i.ibb.co/M28P6z3/mar.jpg" width="320" height="200"
                                                        alt="syndicated research" className="img-fluid me-2 mb-3 mb-sm-0" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade card-body" id="customSolutions">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-8 col-12">
                                                    <div className="gt-service-text">We help our clients in making smarter decisions
                                                        through our custom solutions. We are expert in delivering high quality
                                                        custom projects in Technology and Telecom industry. We are helping our
                                                        clients by creating solutions as per their research requirements. This gives
                                                        our client an advantage to procure a report tailor made for them. The
                                                        research industry has evolved over a period of time and most of the
                                                        customers are interested in research as per their requirements. The Insight
                                                        Partners help clients in achieving their business objectives through
                                                        experienced analyst support.</div>
                                                    {/* <a className="btn mt-4 mb-3 float-end" href="Listing.html">Read More </a> */}
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-12 image1" >
                                                    <img alt="custom solution" className="img-fluid"
                                                        src="https://i.ibb.co/SBMCc67/marketresearch1.jpg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade card-body" id="rapidResearch">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-8 col-12">
                                                    <div className="gt-service-text">Our rapid research solutions help clients in
                                                        getting quick solutions without burning much of their approved budgets. We
                                                        work with agile research approach to meet specific client requirements in
                                                        short turnaround time, our domain expertise, reports repository, databases,
                                                        integrated with project management skills makes it different from the rest!
                                                        We have expertise in delivering custom/rapid research solutions in shortest
                                                        turnaround time. You pay for what you need as we confine the scope to meet
                                                        your exact requirements, unlike buying report with large scope.</div>
                                                    {/* <a className="btn mt-4 mb-3 float-end" href="Listing.html">Read More </a> */}
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-12 image1">
                                                    <img alt="Rapid Research" className="img-fluid"
                                                        src="https://i.ibb.co/nwHkDPZ/Market-Research.jpg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade card-body" id="subscriptionServices">
                                            <div className="row">
                                                <div className="col-md-8 col-sm-8 col-12">
                                                    <div className="gt-service-text">e-Insights is the one stop solution for all your
                                                        market research needs. It includes market size and forecast of millions of
                                                        market nodes along with thousands of company profiles and live news feed.
                                                        The e-Insights includes repository of over thousands of reports spread
                                                        across various domains. Company section in the report covers the global
                                                        players (existing and emerging). We bone up all the companies listed in the
                                                        report post our desk research based on parameters such as company revenue,
                                                        product portfolio, and geographic presence.</div>
                                                    {/* <a className="btn mt-4 mb-3 float-end" href="Listing.html">Read More </a> */}
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-12 image1">
                                                    <img alt="subscription services" className="img-fluid"
                                                        src="https://i.ibb.co/0tmnZPf/market.png"/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </section>

            </div>

                </>
                )
}


                export default Services;