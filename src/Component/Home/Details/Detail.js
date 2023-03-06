import React, { Component } from "react";
import "./Detail.css";
import DetailDisplay from "./DetailDisplay";
import axios from "axios";
import { Link } from "react-router-dom";

// const url = "http://localhost:1226/details";
const url = "https://marketresearch.onrender.com/details";


class Detail extends Component {
  constructor() {
    super();

    this.state = {
      details: "",
    };
  }
  proceed = () => {
    sessionStorage.setItem('Report',JSON.stringify(this.state.details.ReportNo))
    this.props.history.push(`/placeOrder?report=${this.state.details.ReportNo}`)
}
// /placeOrder?report=${details.ReportNo}
  render() {
    // let details = this.state.details
    let { details } = this.state;
    console.log(details);
    return (
      <>
      
        <div className="containermain">
          <div className="latestr">
            <div className="latestpub">
              <h2> &nbsp; {details.category}</h2>
            </div>
            <div className="latestr1">
              <span>Home</span> | {details.Keyword} Market Report
            </div>
          </div>
          <div className="lpc">
            <div className="reportsec">
              <DetailDisplay DetailReport={this.setState.Reports} />
              <div className="reportsec1">
                <div className="reportimg">
                  <img src="https://i.ibb.co/TcxV8dD/Market-Research-Img.jpg" alt="" />
                </div>
                <div className="reporttile">
                  <div className="reporttitle">{details.Report_name}</div>
                  <div className="reportinfo">
                    <div className="reportinfo1">
                      <span className="reportinfost">
                        <i className="fa fa-bookmark" aria-hidden="true"></i> Report
                        Code
                        <hr className="hrt" />
                      </span>
                      <span className="reportinfost2">{details.ReportId}</span>
                    </div>
                    <div className="reportinfo1">
                      <span className="reportinfost">
                        <i className="fas fa-layer-group" aria-hidden="true"></i>{" "}
                        Category
                        <hr className="hrt" />
                      </span>
                      <span className="reportinfost2">{details.category}</span>
                    </div>
                    <div className="reportinfo1">
                      <span className="reportinfost">
                        <i className="fas fa-calendar-minus" aria-hidden="true"></i>{" "}
                        Published Date
                        <hr className="hrt" />
                      </span>
                      <span className="reportinfost2">{details.PubDate}</span>
                    </div>
                    <div className="reportinfo1">
                      <span className="reportinfost">
                        <i className="fas fa-book-open" aria-hidden="true"></i>{" "}
                        Pages
                        <hr className="hrt" />
                      </span>
                      <span className="reportinfost2">{details.pages}</span>
                    </div>

                    <div className="reportinfo1">
                      <span className="reportinfost">
                        <i className="fa fa-file-text" aria-hidden="true"></i>{" "}
                        Format
                        <hr className="hrt" />
                      </span>
                      <span className="reportinfost2">PDF</span>
                    </div>
                  </div>
                  <div className="reportinqiry">
                    <div className="reportinqiry1">
                      <Link to={`/sampleReport?report=${details.ReportNo}`}>
                        {" "}
                        <div className="pat">
                          <p>Sample Request</p>
                        </div>
                      </Link>
                    </div>
                    <div className="reportinqiry2">
                      <Link to={`/CustmizationRequest?report=${details.ReportNo}`}>
                        {" "}
                        <div className="pat">
                          <p>Customization Request</p>
                        </div>
                      </Link>
                    </div>
                    <div className="reportinqiry2">
                      <Link to={`/Inquiry?report=${details.ReportNo}`}>
                        {" "}
                        <div className="pat">
                          <p>Inquiry Request</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reportrunning">
                <div className="reportrunning1">Customization</div>
                <marquee direction="left">
                We Provide Customized Solutions to cater your specific requirement services any region, product, or any specific market segment.
                </marquee>
              </div>

              <div className="reportsec2">
                <section
                  className="container-fluid container-md"
                  id="gtServicesSection"
                >
                  <div className="row">
                    <div className="col-12 justify-content-between">
                      <ul className="nav nav-tabs view nav-fill " role="tablist">
                        <li className="nav-item  px-2 mb-2">
                          <a
                            className="nav-link active "
                            id="syndicatedResearch-tab"
                            data-bs-toggle="tab"
                            href="#syndicatedResearch"
                          >
                            &nbsp;Report Details
                          </a>
                        </li>
                        <li className="nav-item  px-2 mb-2">
                          <a
                            className="nav-link  "
                            id="customSolutions-tab"
                            data-bs-toggle="tab"
                            href="#customSolutions"
                          >
                            <i className="fas fa-check-circle fs-6"></i>&nbsp;Table
                            Of Content
                          </a>
                        </li>
                        <li className="nav-item  px-2 mb-2">
                          <a
                            className="nav-link "
                            id="rapidresearch-tab"
                            data-bs-toggle="tab"
                            href="#rapidResearch"
                          >
                            <i className="fas fa-recycle fs-6"></i>&nbsp;Methodology
                          </a>
                        </li>
                      </ul>

                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active card-body"
                          id="syndicatedResearch"
                        >
                          The report covers forecast and analysis for the{" "}
                          {details.Keyword} market on a global and regional
                          level. The study provides historic data from 2018 to
                          2021 along with a forecast from 2022 to 2028 based on
                          revenue (USD Million). The study includes drivers and
                          restraints for the {details.Keyword} market along with
                          the impact they have on the demand over the forecast
                          period. Additionally, the report includes the study of
                          opportunities available in the {details.Keyword}{" "}
                          market on a global as well as regional level.
                          <br />
                          <br />
                          The global {details.Keyword} market was estimated at
                          XX (USD Million) in 2022 and is projected to be valued
                          at XX (USD Million) by 2028 at a CAGR of XX%.
                          <br />
                          <br />
                          <strong>
                            {" "}
                            {details.Keyword} Market Key Trends Analysis
                          </strong>
                          <br />
                          <br />
                          The report also provides an in-depth analysis of
                          different drivers, restraints and opportunities in the{" "}
                          {details.Keyword} Market. Key drivers are discussed in
                          the report, along with its impact on the growth of
                          this industry during the historic period as well as
                          throughout the forecast years.
                          <br />
                          <br />
                          The report will also help all the prospective readers
                          to identify major restraining factors for the industry
                          participants. As well, major growth opportunities
                          prevailing in the industry will help understand the
                          rapidly changing dynamics of industry and plan for the
                          future strategies accordingly.
                          <br />
                          <br />
                          <strong>The Major Players Covered;</strong>
                          <br />
                          {details.Companies}
                          <br />
                          <br />
                          <strong>Covid-19 Coverage</strong>
                          <br />
                          <br />
                          Due to the pandemic started during late 2019 and
                          started spreading in the first quarter of 2020 in
                          Europe and American countries led to forcible shutting
                          down of shops, industries, factories, movement
                          restrictions to stop the spread of deadly virus. The
                          travel restrictions for commercial and non-commercial
                          flights led to stop supply of raw materials of
                          non-essential goods, eventually, lessening the supply
                          chain. Shortage of labours and transport also
                          contributed towards declining the demand and supply of{" "}
                          {details.Keyword} products. Though, after the release
                          of vaccines and vaccination drives going on in various
                          countries, the virus is expected to have less effect
                          and the markets have started opening again.
                          Manufacturers are hopeful regarding growth in demand
                          of {details.Keyword} market during the forecast
                          period. Also, various rules and regulations by the
                          government are projected to promote and technical
                          develop the market towards high growth over the coming
                          years.
                          <br />
                          <br />
                          This report includes data analysis and invaluable
                          insight into how COVID-19 will affect the industry and
                          your company. Four COVID-19 recovery patterns and
                          their impact, namely, V, L, W and U are discussed in
                          this report.
                          <br />
                          <br />
                          <strong>Market Strategic Analysis&nbsp;</strong>
                          <br />
                          <br />
                          Also, the report covers key strategic developments of
                          the market including acquisitions &amp; mergers, new
                          type launch, agreements, partnerships, collaborations
                          &amp; joint ventures, research &amp; development,
                          regional expansion of major participants involved in
                          the {details.Keyword} market on a global and regional
                          basis.
                          <br />
                          <br />
                          To give the users of this report a comprehensive view
                          on the {details.Keyword} market competitive landscape
                          and analysis of Porter&rsquo;s Five Forces model for
                          the market are included in the report. The study
                          encompasses market attractiveness analysis, wherein
                          all segments are benchmarked based on their market
                          size, growth rate and general attractiveness.
                          <br />
                          <br />
                          <strong>Market Key Segment Analysis</strong>
                          <br />
                          <br />
                          The study provides a crucial view on the{" "}
                          {details.Keyword} by segmenting the market based on
                          product type, application, and region. All the
                          segments of {details.Keyword} market have been
                          analyzed based on present and future trends and the
                          market is estimated from 2022 to 2028. This report
                          will identify dominating sub-segments in terms of
                          revenue contribution for the base year as well as
                          during the forecast period. The fastest-growing
                          sub-segments with its major growth driving factors are
                          also presented in the report.
                          <br />
                          <br />
                          <strong>
                            Based on Product Type, global {details.Keyword}{" "}
                            market is bifurcated into,
                          </strong>
                          <br />
                          {details.Type}
                          <br />
                          <br />
                          <strong>
                            Detailed qualitative as well as quantitative product
                            type segment analysis will be provided in the report
                            from 2018 to 2028.
                          </strong>
                          <br />
                          <br />
                          <strong>
                            Based on Application market is segmented into,
                          </strong>
                          <br />
                          {details.Applications}
                          <br />
                          <br />
                          The market has huge growth prospects and this will
                          help industry players with different potential
                          opportunities to explore the market. The segment
                          analysis will help in determining how each segment
                          will influence the market growth in the coming years
                          will be displayed in the report.
                          <br />
                          <br />
                          <strong>
                            Market Regional Trends and Market Player&rsquo;s
                            Analysis
                          </strong>
                          <br />
                          Regionally, the market is divided into North America,
                          Europe, Asia Pacific, Latin America and the Middle
                          East and Africa. Wherein, North America dominated the
                          global {details.Keyword} market in 2019. Asia Pacific
                          region will be a rapidly growing market for{" "}
                          {details.Keyword} . On the other hand, Latin America
                          will experience moderate growth in the coming years.
                          The Middle East and Africa will register slower growth
                          in the years to come.
                          <br />
                          <br />
                          <strong>
                            Global {details.Keyword} Market: By Region
                          </strong>
                          <ul>
                            <li>
                              North America
                              <ul>
                                <li>U.S.</li>
                                <li>Canada</li>
                                <li>Rest of North America</li>
                              </ul>
                            </li>
                            <li>
                              Europe
                              <ul>
                                <li>UK</li>
                                <li>Germany</li>
                                <li>France</li>
                                <li>Italy</li>
                                <li>Spain</li>
                                <li>Rest of Europe</li>
                              </ul>
                            </li>
                            <li>
                              Asia Pacific
                              <ul>
                                <li>China&nbsp;</li>
                                <li>Japan</li>
                                <li>India</li>
                                <li>Southeast Asia</li>
                                <li>Rest of Asia Pacific</li>
                              </ul>
                            </li>
                            <li>
                              Latin America
                              <ul>
                                <li>Brazil</li>
                                <li>Argentina</li>
                                <li>Rest of Latin America</li>
                              </ul>
                            </li>
                            <li>
                              Middle East and Africa
                              <ul>
                                <li>GCC Countries</li>
                                <li>South Africa</li>
                                <li>Rest of Middle East &amp; Africa</li>
                              </ul>
                            </li>
                          </ul>
                          <strong>
                            Key Highlights &amp; Touch Points of the Global{" "}
                            {details.Keyword} Market for the Forecast Years
                            2022-2028:
                          </strong>
                          <ul>
                            <li>
                              CAGR of the market during the forecast period of
                              2022-2028
                            </li>
                            <li>
                              Extensive information on factors that will amplify
                              the growth of the {details.Keyword} market over
                              the upcoming seven years
                            </li>
                            <li>
                              Accurate estimation of the global{" "}
                              {details.Keyword} market size&nbsp;
                            </li>
                            <li>
                              Exact estimations of the upcoming trends and
                              changes observed in the consumer behavior
                            </li>
                            <li>
                              Growth of the global {details.Keyword} industry
                              across the North &amp; South America, EMEA, Asia
                              Pacific, and Latin America
                            </li>
                            <li>
                              Information about {details.Keyword} market growth
                              potential
                            </li>
                            <li>
                              In-depth analysis of the industry&rsquo;s
                              competitive landscape and detailed information
                              vis-a-vis on various vendors
                            </li>
                            <li>
                              Furnishing of detailed information on the factors
                              that will restrain the growth of the{" "}
                              {details.Keyword} manufacturers
                            </li>
                          </ul>
                          <u>
                            <strong>FAQs</strong>
                          </u>
                          &nbsp;
                          <ol>
                            <li>
                              Which product segment in the {details.Keyword}{" "}
                              market is the most profitable?
                            </li>
                            <li>
                              What are the main market players&#39; strategies
                              for {details.Keyword} ?
                            </li>
                            <li>
                              What reasons are causing the market for{" "}
                              {details.Keyword} to become more competitive?
                            </li>
                            <li>
                              What are the industry experts&#39; suggestions for{" "}
                              {details.Keyword} ?
                            </li>
                            <li>
                              During the predicted term, which region will have
                              lucrative growth?
                            </li>
                            <li>
                              What factors will limit the market for{" "}
                              {details.Keyword} ?
                            </li>
                            <li>
                              In the market for {details.Keyword} , which
                              product segment will expand at the highest rate?
                            </li>
                            <li>
                              Which developing developments will have an
                              influence on the market for {details.Keyword} ?
                            </li>
                            <li>
                              In the market for {details.Keyword} , what are the
                              high-impact rendering factors?
                            </li>
                          </ol>
                        </div>

                        <div
                          className="tab-pane fade  card-body"
                          id="customSolutions"
                        >
                          <strong>1.&nbsp;&nbsp;&nbsp;&nbsp;Preface</strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.1.&nbsp;&nbsp;&nbsp;&nbsp;Report
                          Scope and Description
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.&nbsp;&nbsp;&nbsp;&nbsp;Research
                          Methodology
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.1.&nbsp;&nbsp;&nbsp;&nbsp;Phase
                          I-Secondary Research
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.2.&nbsp;&nbsp;&nbsp;&nbsp;Phase
                          II-Primary Research
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.3.&nbsp;&nbsp;&nbsp;&nbsp;Phase
                          II-Expert Panel Review
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.4.&nbsp;&nbsp;&nbsp;&nbsp;Assumptions
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.5.&nbsp;&nbsp;&nbsp;&nbsp;Approach
                          Adopted
                          <br />
                          <strong>
                            2.&nbsp;&nbsp;&nbsp;&nbsp;Executive Summary
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword} Snapshot
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword}, By Type, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword}, By Application, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.3.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword}, By End-use, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.4.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword}, By Geography, 2021
                          <br />
                          <strong>
                            3.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
                            Dynamics
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Overview
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Inclination Insights Analysis
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.3.&nbsp;&nbsp;&nbsp;&nbsp;Drivers
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.4.&nbsp;&nbsp;&nbsp;&nbsp;Challenges
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.5.&nbsp;&nbsp;&nbsp;&nbsp;Future
                          Prospects
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.6.&nbsp;&nbsp;&nbsp;&nbsp;Impact
                          Analysis of Drivers and Challenges During the Forecast
                          Period, (2018-2028)
                          <br />
                          <strong>
                            4.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
                            Size (US$), By Type, 2018 � 2028{" "}
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Share Analysis By Type, 2021 vs 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Attractive
                          Investment Proposition By Type, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword} Size (US$), By Type, 2018 � 2028
                          <br />
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;4.2.1.&nbsp;&nbsp;&nbsp;
                          &nbsp;Laboratory GradeIndustrial Grade
                          <br />
                          <strong>
                            5.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
                            Size (US$), By Application, 2018 � 2028{" "}
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Share Analysis By Application, 2021 vs 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Attractive
                          Investment Proposition By Application, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword} Size (US$), By Application, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;5.2.1.&nbsp;&nbsp;&nbsp;
                          &nbsp;PetrochemicalPrinting TextileElectronics
                          IndustryOther
                          <br />
                          <strong>
                            6.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
                            Size (US$), By End-use, 2018 � 2028
                          </strong>{" "}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Share Analysis By End-use, 2021 vs 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.2.&nbsp;&nbsp;&nbsp;&nbsp;
                          Attractive Investment Proposition By End-use, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword} Size (US$), By End-use, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.1.&nbsp;&nbsp;&nbsp;&nbsp;End-use1
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.2.&nbsp;&nbsp;&nbsp;&nbsp;End-use2
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.3.&nbsp;&nbsp;&nbsp;&nbsp;End-use3
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.4.&nbsp;&nbsp;&nbsp;&nbsp;End-use4
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.5.&nbsp;&nbsp;&nbsp;&nbsp;End-use5
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.6.&nbsp;&nbsp;&nbsp;&nbsp;End-use6
                          <br />
                          <strong>
                            7.&nbsp;&nbsp;&nbsp;&nbsp;North America{" "}
                            {details.Keyword} Analysis, 2018 � 2028
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.1.&nbsp;&nbsp;&nbsp;&nbsp;North
                          America {details.Keyword} Size (US$), By Type, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.2.&nbsp;&nbsp;&nbsp;&nbsp;North
                          America {details.Keyword} Size (US$), By Application,
                          2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.3.&nbsp;&nbsp;&nbsp;&nbsp;North
                          America {details.Keyword} Size (US$), By End-use, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.&nbsp;&nbsp;&nbsp;&nbsp;North
                          America {details.Keyword} Size (US$), By Country, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.1.&nbsp;&nbsp;&nbsp;&nbsp;U.S.
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Canada
                          <br />
                          <strong>
                            8.&nbsp;&nbsp;&nbsp;&nbsp;Europe {details.Keyword}{" "}
                            Analysis, 2018 � 2028
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.1.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
                          {details.Keyword} Size (US$), By Type, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.2.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
                          {details.Keyword} Size (US$), By Application, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.3.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
                          {details.Keyword} Size (US$), By End-use, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
                          {details.Keyword} Size (US$), By Country, 2018 � 2028{" "}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.1.&nbsp;&nbsp;&nbsp;&nbsp;U.K.
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Germany
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.3.&nbsp;&nbsp;&nbsp;&nbsp;France
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.4.&nbsp;&nbsp;&nbsp;&nbsp;Rest
                          of Europe
                          <br />
                          <strong>
                            9.&nbsp;&nbsp;&nbsp;&nbsp;Asia Pacific{" "}
                            {details.Keyword} Analysis, 2018 � 2028
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.&nbsp;&nbsp;&nbsp;&nbsp;Asia
                          Pacific {details.Keyword} Size (US$), By Type, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.2.&nbsp;&nbsp;&nbsp;&nbsp;Asia
                          Pacific {details.Keyword} Size (US$), By Application,
                          2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.3.&nbsp;&nbsp;&nbsp;&nbsp;Asia
                          Pacific {details.Keyword} Size (US$), By End-use, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.&nbsp;&nbsp;&nbsp;&nbsp;Asia
                          Pacific {details.Keyword} Size (US$), By Country, 2018
                          � 2028 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.1.&nbsp;&nbsp;&nbsp;&nbsp;China
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Japan
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.3.&nbsp;&nbsp;&nbsp;&nbsp;India
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.4.&nbsp;&nbsp;&nbsp;&nbsp;Rest
                          of Asia Pacific
                          <br />
                          <strong>
                            10.&nbsp;&nbsp;&nbsp;&nbsp;Latin America{" "}
                            {details.Keyword} Analysis, 2018 � 2028
                          </strong>{" "}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.1.&nbsp;&nbsp;&nbsp;&nbsp;Latin
                          America {details.Keyword} Size (US$), By Type, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.2.&nbsp;&nbsp;&nbsp;&nbsp;Latin
                          America {details.Keyword} Size (US$), By Application,
                          2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.3.&nbsp;&nbsp;&nbsp;&nbsp;Latin
                          America {details.Keyword} Size (US$), By End-use, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.&nbsp;&nbsp;&nbsp;&nbsp;Latin
                          America {details.Keyword} Size (US$), By Country, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.1.&nbsp;&nbsp;&nbsp;&nbsp;
                          Brazil
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.2.&nbsp;&nbsp;&nbsp;&nbsp;
                          Mexico
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.3.&nbsp;&nbsp;&nbsp;&nbsp;
                          Rest of Latin America
                          <br />
                          <strong>
                            11.&nbsp;&nbsp;&nbsp;&nbsp;Middle East &amp; Africa
                            (MEA) {details.Keyword} Analysis, 2018 � 2028
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.1.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
                          {details.Keyword} Size (US$), By Type, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.2.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
                          {details.Keyword} Size (US$), By Application, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.3.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
                          {details.Keyword} Size (US$), By End-use, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
                          {details.Keyword} Size (US$), By Region, 2018 � 2028{" "}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.1.&nbsp;&nbsp;&nbsp;&nbsp;
                          GCC Countries
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.2.&nbsp;&nbsp;&nbsp;&nbsp;South
                          Africa
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.3.&nbsp;&nbsp;&nbsp;&nbsp;
                          Rest of MEA
                          <br />
                          <strong>
                            12.&nbsp;&nbsp;&nbsp;&nbsp;Company Profiles
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.1.&nbsp;&nbsp;&nbsp;&nbsp;Competitive
                          Analysis <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.2.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Positioning of Key Vendors <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.3.&nbsp;&nbsp;&nbsp;&nbsp;Key
                          Strategies adopted by the Leading Players
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.&nbsp;&nbsp;&nbsp;&nbsp;Key
                          Leading Players
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.1&nbsp;&nbsp;&nbsp;&nbsp;Business
                          Description
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.2&nbsp;&nbsp;&nbsp;&nbsp;Geographic
                          Operations
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.3&nbsp;&nbsp;&nbsp;&nbsp;Financial
                          Information
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.4&nbsp;&nbsp;&nbsp;&nbsp;Product
                          Positions/Portfolio
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.5&nbsp;&nbsp;&nbsp;&nbsp;Key
                          Developments
                          <br />
                        </div>

                        <div className="tab-pane fade card-body" id="rapidResearch">
                          <strong>
                          <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Research
                            Methodology</h3>
                          </strong>
                          <br />
                          <strong>1.&nbsp;&nbsp;&nbsp;&nbsp;Preface</strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.1.&nbsp;&nbsp;&nbsp;&nbsp;Report
                          Scope and Description
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.&nbsp;&nbsp;&nbsp;&nbsp;Research
                          Methodology
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.1.&nbsp;&nbsp;&nbsp;&nbsp;Phase
                          I-Secondary Research
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.2.&nbsp;&nbsp;&nbsp;&nbsp;Phase
                          II-Primary Research
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.3.&nbsp;&nbsp;&nbsp;&nbsp;Phase
                          II-Expert Panel Review
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.4.&nbsp;&nbsp;&nbsp;&nbsp;Assumptions
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.5.&nbsp;&nbsp;&nbsp;&nbsp;Approach
                          Adopted
                          <br />
                          <strong>
                            2.&nbsp;&nbsp;&nbsp;&nbsp;Executive Summary
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword} Snapshot
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword}, By Type, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword}, By Application, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.3.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword}, By End-use, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.4.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword}, By Geography, 2021
                          <br />
                          <strong>
                            3.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
                            Dynamics
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Overview
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Inclination Insights Analysis
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.3.&nbsp;&nbsp;&nbsp;&nbsp;Drivers
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.4.&nbsp;&nbsp;&nbsp;&nbsp;Challenges
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.5.&nbsp;&nbsp;&nbsp;&nbsp;Future
                          Prospects
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.6.&nbsp;&nbsp;&nbsp;&nbsp;Impact
                          Analysis of Drivers and Challenges During the Forecast
                          Period, (2018-2028)
                          <br />
                          <strong>
                            4.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
                            Size (US$), By Type, 2018 � 2028{" "}
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Share Analysis By Type, 2021 vs 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Attractive
                          Investment Proposition By Type, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword} Size (US$), By Type, 2018 � 2028
                          <br />
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;4.2.1.&nbsp;&nbsp;&nbsp;
                          &nbsp;Laboratory GradeIndustrial Grade
                          <br />
                          <strong>
                            5.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
                            Size (US$), By Application, 2018 � 2028{" "}
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Share Analysis By Application, 2021 vs 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Attractive
                          Investment Proposition By Application, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword} Size (US$), By Application, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;5.2.1.&nbsp;&nbsp;&nbsp;
                          &nbsp;PetrochemicalPrinting TextileElectronics
                          IndustryOther
                          <br />
                          <strong>
                            6.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
                            Size (US$), By End-use, 2018 � 2028
                          </strong>{" "}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Share Analysis By End-use, 2021 vs 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.2.&nbsp;&nbsp;&nbsp;&nbsp;
                          Attractive Investment Proposition By End-use, 2021
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
                          {details.Keyword} Size (US$), By End-use, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.1.&nbsp;&nbsp;&nbsp;&nbsp;End-use1
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.2.&nbsp;&nbsp;&nbsp;&nbsp;End-use2
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.3.&nbsp;&nbsp;&nbsp;&nbsp;End-use3
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.4.&nbsp;&nbsp;&nbsp;&nbsp;End-use4
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.5.&nbsp;&nbsp;&nbsp;&nbsp;End-use5
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.6.&nbsp;&nbsp;&nbsp;&nbsp;End-use6
                          <br />
                          <strong>
                            7.&nbsp;&nbsp;&nbsp;&nbsp;North America{" "}
                            {details.Keyword} Analysis, 2018 � 2028
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.1.&nbsp;&nbsp;&nbsp;&nbsp;North
                          America {details.Keyword} Size (US$), By Type, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.2.&nbsp;&nbsp;&nbsp;&nbsp;North
                          America {details.Keyword} Size (US$), By Application,
                          2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.3.&nbsp;&nbsp;&nbsp;&nbsp;North
                          America {details.Keyword} Size (US$), By End-use, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.&nbsp;&nbsp;&nbsp;&nbsp;North
                          America {details.Keyword} Size (US$), By Country, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.1.&nbsp;&nbsp;&nbsp;&nbsp;U.S.
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Canada
                          <br />
                          <strong>
                            8.&nbsp;&nbsp;&nbsp;&nbsp;Europe {details.Keyword}{" "}
                            Analysis, 2018 � 2028
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.1.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
                          {details.Keyword} Size (US$), By Type, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.2.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
                          {details.Keyword} Size (US$), By Application, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.3.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
                          {details.Keyword} Size (US$), By End-use, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
                          {details.Keyword} Size (US$), By Country, 2018 � 2028{" "}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.1.&nbsp;&nbsp;&nbsp;&nbsp;U.K.
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Germany
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.3.&nbsp;&nbsp;&nbsp;&nbsp;France
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.4.&nbsp;&nbsp;&nbsp;&nbsp;Rest
                          of Europe
                          <br />
                          <strong>
                            9.&nbsp;&nbsp;&nbsp;&nbsp;Asia Pacific{" "}
                            {details.Keyword} Analysis, 2018 � 2028
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.&nbsp;&nbsp;&nbsp;&nbsp;Asia
                          Pacific {details.Keyword} Size (US$), By Type, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.2.&nbsp;&nbsp;&nbsp;&nbsp;Asia
                          Pacific {details.Keyword} Size (US$), By Application,
                          2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.3.&nbsp;&nbsp;&nbsp;&nbsp;Asia
                          Pacific {details.Keyword} Size (US$), By End-use, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.&nbsp;&nbsp;&nbsp;&nbsp;Asia
                          Pacific {details.Keyword} Size (US$), By Country, 2018
                          � 2028 <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.1.&nbsp;&nbsp;&nbsp;&nbsp;China
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Japan
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.3.&nbsp;&nbsp;&nbsp;&nbsp;India
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.4.&nbsp;&nbsp;&nbsp;&nbsp;Rest
                          of Asia Pacific
                          <br />
                          <strong>
                            10.&nbsp;&nbsp;&nbsp;&nbsp;Latin America{" "}
                            {details.Keyword} Analysis, 2018 � 2028
                          </strong>{" "}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.1.&nbsp;&nbsp;&nbsp;&nbsp;Latin
                          America {details.Keyword} Size (US$), By Type, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.2.&nbsp;&nbsp;&nbsp;&nbsp;Latin
                          America {details.Keyword} Size (US$), By Application,
                          2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.3.&nbsp;&nbsp;&nbsp;&nbsp;Latin
                          America {details.Keyword} Size (US$), By End-use, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.&nbsp;&nbsp;&nbsp;&nbsp;Latin
                          America {details.Keyword} Size (US$), By Country, 2018
                          � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.1.&nbsp;&nbsp;&nbsp;&nbsp;
                          Brazil
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.2.&nbsp;&nbsp;&nbsp;&nbsp;
                          Mexico
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.3.&nbsp;&nbsp;&nbsp;&nbsp;
                          Rest of Latin America
                          <br />
                          <strong>
                            11.&nbsp;&nbsp;&nbsp;&nbsp;Middle East &amp; Africa
                            (MEA) {details.Keyword} Analysis, 2018 � 2028
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.1.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
                          {details.Keyword} Size (US$), By Type, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.2.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
                          {details.Keyword} Size (US$), By Application, 2018 �
                          2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.3.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
                          {details.Keyword} Size (US$), By End-use, 2018 � 2028
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
                          {details.Keyword} Size (US$), By Region, 2018 � 2028{" "}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.1.&nbsp;&nbsp;&nbsp;&nbsp;
                          GCC Countries
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.2.&nbsp;&nbsp;&nbsp;&nbsp;South
                          Africa
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.3.&nbsp;&nbsp;&nbsp;&nbsp;
                          Rest of MEA
                          <br />
                          <strong>
                            12.&nbsp;&nbsp;&nbsp;&nbsp;Company Profiles
                          </strong>
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.1.&nbsp;&nbsp;&nbsp;&nbsp;Competitive
                          Analysis <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.2.&nbsp;&nbsp;&nbsp;&nbsp;Market
                          Positioning of Key Vendors <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.3.&nbsp;&nbsp;&nbsp;&nbsp;Key
                          Strategies adopted by the Leading Players
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.&nbsp;&nbsp;&nbsp;&nbsp;Key
                          Leading Players
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.1&nbsp;&nbsp;&nbsp;&nbsp;Business
                          Description
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.2&nbsp;&nbsp;&nbsp;&nbsp;Geographic
                          Operations
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.3&nbsp;&nbsp;&nbsp;&nbsp;Financial
                          Information
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.4&nbsp;&nbsp;&nbsp;&nbsp;Product
                          Positions/Portfolio
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.5&nbsp;&nbsp;&nbsp;&nbsp;Key
                          Developments
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="catsec">
              <div className="catsec1">
                <div className="catsec2">
                  <p className="catseccc">SELECT USER FORMAT</p>
                </div>
                <div className="catsec5">
                  <div className="catseccs">
                    <span className="secbye">Price :-</span>
                    <span className="secbye1">&nbsp; $ {details.price}</span>
                  </div>
                </div>

                <div className="catsec4">
                  <button onClick={this.proceed}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;
                    {/* <Link
                      to={`/placeOrder?report=${details.ReportNo}`}
                      className="by1"
                    > */}
                      Bye Now
                    {/* </Link> */}
                  </button>
                </div>
              </div>
              <div className="slidedivv">
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="slidediv">
                        <div className="slidimg">
                          <img
                            src="https://i.ibb.co/JjtCxmr/did-you-know.png"
                            alt=""
                          />
                        </div>
                        <div className="slidconte">
                          Over 100 Fortune 500 companies rely on us
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="slidediv">
                        <div className="slidimg">
                          <img
                            src="https://i.ibb.co/JjtCxmr/did-you-know.png"
                            alt=""
                          />
                        </div>
                        <div className="slidconte">
                          50,000 people come to us for subscription
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="slidediv">
                        <div className="slidimg">
                          <img
                            src="https://i.ibb.co/JjtCxmr/did-you-know.png"
                            alt=""
                          />
                        </div>
                        <div className="slidconte">
                          Our library has over 17,000 reports on 100s of topics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customizationdiv">
                <span className="customizationdiv1">
                  Want to customize this report?
                </span>
                <p className="custum">
                  This report can be personalized according to your needs. Our
                  analysts and industry experts will work directly with you to
                  understand your requirements and provide you with customized
                  data in a short amount of time.
                </p>
                <div className="customizationdiv2">
                  We offer $1000 worth of FREE customization at the time of
                  purchase
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  //api with async await
  async componentDidMount() {
    let report = this.props.location.search.split("=")[1];
    let response = await axios.get(`${url}/${report}`);
    this.setState({ details: response.data[0] });
  }
}

export default Detail;












//original code upto 27/02/20223
// import React, { Component } from "react";
// import "./Detail.css";
// import DetailDisplay from "./DetailDisplay";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const url = "http://localhost:1226/details";

// class Detail extends Component {
//   constructor() {
//     super();

//     this.state = {
//       details: "",
//     };
//   }

//   render() {
//     // let details = this.state.details
//     let { details } = this.state;
//     console.log(details);
//     return (
//       <>
//         <div class="containermain">
//           <div class="latestr">
//             <div class="latestpub">
//               <h2> &nbsp; {details.category}</h2>
//             </div>
//             <div class="latestr1">
//               <span>Home</span> | {details.Keyword} Market Report
//             </div>
//           </div>
//           <div class="lpc">
//             <div class="reportsec">
//               <DetailDisplay DetailReport={this.setState.Reports} />
//               <div class="reportsec1">
//                 <div class="reportimg">
//                   <img src="https://i.ibb.co/CBRRZSt/reportimage.jpg" alt="" />
//                 </div>
//                 <div class="reporttile">
//                   <div class="reporttitle">{details.Report_name}</div>
//                   <div class="reportinfo">
//                     <div class="reportinfo1">
//                       <span class="reportinfost">
//                         <i class="fa fa-bookmark" aria-hidden="true"></i> Report
//                         Code
//                         <hr class="hrt" />
//                       </span>
//                       <span class="reportinfost2">{details.ReportId}</span>
//                     </div>
//                     <div class="reportinfo1">
//                       <span class="reportinfost">
//                         <i class="fas fa-layer-group" aria-hidden="true"></i>{" "}
//                         Category
//                         <hr class="hrt" />
//                       </span>
//                       <span class="reportinfost2">{details.category}</span>
//                     </div>
//                     <div class="reportinfo1">
//                       <span class="reportinfost">
//                         <i class="fas fa-calendar-minus" aria-hidden="true"></i>{" "}
//                         Published Date
//                         <hr class="hrt" />
//                       </span>
//                       <span class="reportinfost2">{details.PubDate}</span>
//                     </div>
//                     <div class="reportinfo1">
//                       <span class="reportinfost">
//                         <i class="fas fa-book-open" aria-hidden="true"></i>{" "}
//                         Pages
//                         <hr class="hrt" />
//                       </span>
//                       <span class="reportinfost2">{details.pages}</span>
//                     </div>

//                     <div class="reportinfo1">
//                       <span class="reportinfost">
//                         <i class="fa fa-file-text" aria-hidden="true"></i>{" "}
//                         Format
//                         <hr class="hrt" />
//                       </span>
//                       <span class="reportinfost2">PDF</span>
//                     </div>
//                   </div>
//                   <div class="reportinqiry">
//                     <div class="reportinqiry1">
//                       <Link to={`/sampleReport?report=${details.ReportNo}`}>
//                         {" "}
//                         <div class="pat">
//                           <p>REQUEST FOR SAMPLE</p>
//                         </div>
//                       </Link>
//                     </div>
//                     <div class="reportinqiry2">
//                       <Link to={`/sampleReport?report=${details.ReportNo}`}>
//                         {" "}
//                         <div class="pat">
//                           <p>REQUEST FOR SAMPLE</p>
//                         </div>
//                       </Link>
//                     </div>
//                     <div class="reportinqiry2">
//                       <Link to={`/sampleReport?report=${details.ReportNo}`}>
//                         {" "}
//                         <div class="pat">
//                           <p>REQUEST FOR SAMPLE</p>
//                         </div>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="reportrunning">
//                 <div class="reportrunning1">Customization</div>
//                 <marquee direction="left">
//                   We Provide Customization As Per Your REQUEST
//                 </marquee>
//               </div>

//               <div class="reportsec2">
//                 <section
//                   class="container-fluid container-md"
//                   id="gtServicesSection"
//                 >
//                   <div class="row">
//                     <div class="col-12 justify-content-between">
//                       <ul class="nav nav-tabs view nav-fill " role="tablist">
//                         <li class="nav-item  px-2 mb-2">
//                           <a
//                             class="nav-link active "
//                             id="syndicatedResearch-tab"
//                             data-bs-toggle="tab"
//                             href="#syndicatedResearch"
//                           >
//                             &nbsp;Report Details
//                           </a>
//                         </li>
//                         <li class="nav-item  px-2 mb-2">
//                           <a
//                             class="nav-link  "
//                             id="customSolutions-tab"
//                             data-bs-toggle="tab"
//                             href="#customSolutions"
//                           >
//                             <i class="fas fa-check-circle fs-6"></i>&nbsp;Table
//                             Of Content
//                           </a>
//                         </li>
//                         <li class="nav-item  px-2 mb-2">
//                           <a
//                             class="nav-link "
//                             id="rapidresearch-tab"
//                             data-bs-toggle="tab"
//                             href="#rapidResearch"
//                           >
//                             <i class="fas fa-recycle fs-6"></i>&nbsp;Methodology
//                           </a>
//                         </li>
//                       </ul>

//                       <div class="tab-content" id="myTabContent">
//                         <div
//                           class="tab-pane fade show active card-body"
//                           id="syndicatedResearch"
//                         >
//                           The report covers forecast and analysis for the{" "}
//                           {details.Keyword} market on a global and regional
//                           level. The study provides historic data from 2018 to
//                           2021 along with a forecast from 2022 to 2028 based on
//                           revenue (USD Million). The study includes drivers and
//                           restraints for the {details.Keyword} market along with
//                           the impact they have on the demand over the forecast
//                           period. Additionally, the report includes the study of
//                           opportunities available in the {details.Keyword}{" "}
//                           market on a global as well as regional level.
//                           <br />
//                           <br />
//                           The global {details.Keyword} market was estimated at
//                           XX (USD Million) in 2022 and is projected to be valued
//                           at XX (USD Million) by 2028 at a CAGR of XX%.
//                           <br />
//                           <br />
//                           <strong>
//                             {" "}
//                             {details.Keyword} Market Key Trends Analysis
//                           </strong>
//                           <br />
//                           <br />
//                           The report also provides an in-depth analysis of
//                           different drivers, restraints and opportunities in the{" "}
//                           {details.Keyword} Market. Key drivers are discussed in
//                           the report, along with its impact on the growth of
//                           this industry during the historic period as well as
//                           throughout the forecast years.
//                           <br />
//                           <br />
//                           The report will also help all the prospective readers
//                           to identify major restraining factors for the industry
//                           participants. As well, major growth opportunities
//                           prevailing in the industry will help understand the
//                           rapidly changing dynamics of industry and plan for the
//                           future strategies accordingly.
//                           <br />
//                           <br />
//                           <strong>The Major Players Covered;</strong>
//                           <br />
//                           {details.Companies}
//                           <br />
//                           <br />
//                           <strong>Covid-19 Coverage</strong>
//                           <br />
//                           <br />
//                           Due to the pandemic started during late 2019 and
//                           started spreading in the first quarter of 2020 in
//                           Europe and American countries led to forcible shutting
//                           down of shops, industries, factories, movement
//                           restrictions to stop the spread of deadly virus. The
//                           travel restrictions for commercial and non-commercial
//                           flights led to stop supply of raw materials of
//                           non-essential goods, eventually, lessening the supply
//                           chain. Shortage of labours and transport also
//                           contributed towards declining the demand and supply of{" "}
//                           {details.Keyword} products. Though, after the release
//                           of vaccines and vaccination drives going on in various
//                           countries, the virus is expected to have less effect
//                           and the markets have started opening again.
//                           Manufacturers are hopeful regarding growth in demand
//                           of {details.Keyword} market during the forecast
//                           period. Also, various rules and regulations by the
//                           government are projected to promote and technical
//                           develop the market towards high growth over the coming
//                           years.
//                           <br />
//                           <br />
//                           This report includes data analysis and invaluable
//                           insight into how COVID-19 will affect the industry and
//                           your company. Four COVID-19 recovery patterns and
//                           their impact, namely, V, L, W and U are discussed in
//                           this report.
//                           <br />
//                           <br />
//                           <strong>Market Strategic Analysis&nbsp;</strong>
//                           <br />
//                           <br />
//                           Also, the report covers key strategic developments of
//                           the market including acquisitions &amp; mergers, new
//                           type launch, agreements, partnerships, collaborations
//                           &amp; joint ventures, research &amp; development,
//                           regional expansion of major participants involved in
//                           the {details.Keyword} market on a global and regional
//                           basis.
//                           <br />
//                           <br />
//                           To give the users of this report a comprehensive view
//                           on the {details.Keyword} market competitive landscape
//                           and analysis of Porter&rsquo;s Five Forces model for
//                           the market are included in the report. The study
//                           encompasses market attractiveness analysis, wherein
//                           all segments are benchmarked based on their market
//                           size, growth rate and general attractiveness.
//                           <br />
//                           <br />
//                           <strong>Market Key Segment Analysis</strong>
//                           <br />
//                           <br />
//                           The study provides a crucial view on the{" "}
//                           {details.Keyword} by segmenting the market based on
//                           product type, application, and region. All the
//                           segments of {details.Keyword} market have been
//                           analyzed based on present and future trends and the
//                           market is estimated from 2022 to 2028. This report
//                           will identify dominating sub-segments in terms of
//                           revenue contribution for the base year as well as
//                           during the forecast period. The fastest-growing
//                           sub-segments with its major growth driving factors are
//                           also presented in the report.
//                           <br />
//                           <br />
//                           <strong>
//                             Based on Product Type, global {details.Keyword}{" "}
//                             market is bifurcated into,
//                           </strong>
//                           <br />
//                           {details.Type}
//                           <br />
//                           <br />
//                           <strong>
//                             Detailed qualitative as well as quantitative product
//                             type segment analysis will be provided in the report
//                             from 2018 to 2028.
//                           </strong>
//                           <br />
//                           <br />
//                           <strong>
//                             Based on Application market is segmented into,
//                           </strong>
//                           <br />
//                           {details.Applications}
//                           <br />
//                           <br />
//                           The market has huge growth prospects and this will
//                           help industry players with different potential
//                           opportunities to explore the market. The segment
//                           analysis will help in determining how each segment
//                           will influence the market growth in the coming years
//                           will be displayed in the report.
//                           <br />
//                           <br />
//                           <strong>
//                             Market Regional Trends and Market Player&rsquo;s
//                             Analysis
//                           </strong>
//                           <br />
//                           Regionally, the market is divided into North America,
//                           Europe, Asia Pacific, Latin America and the Middle
//                           East and Africa. Wherein, North America dominated the
//                           global {details.Keyword} market in 2019. Asia Pacific
//                           region will be a rapidly growing market for{" "}
//                           {details.Keyword} . On the other hand, Latin America
//                           will experience moderate growth in the coming years.
//                           The Middle East and Africa will register slower growth
//                           in the years to come.
//                           <br />
//                           <br />
//                           <strong>
//                             Global {details.Keyword} Market: By Region
//                           </strong>
//                           <ul>
//                             <li>
//                               North America
//                               <ul>
//                                 <li>U.S.</li>
//                                 <li>Canada</li>
//                                 <li>Rest of North America</li>
//                               </ul>
//                             </li>
//                             <li>
//                               Europe
//                               <ul>
//                                 <li>UK</li>
//                                 <li>Germany</li>
//                                 <li>France</li>
//                                 <li>Italy</li>
//                                 <li>Spain</li>
//                                 <li>Rest of Europe</li>
//                               </ul>
//                             </li>
//                             <li>
//                               Asia Pacific
//                               <ul>
//                                 <li>China&nbsp;</li>
//                                 <li>Japan</li>
//                                 <li>India</li>
//                                 <li>Southeast Asia</li>
//                                 <li>Rest of Asia Pacific</li>
//                               </ul>
//                             </li>
//                             <li>
//                               Latin America
//                               <ul>
//                                 <li>Brazil</li>
//                                 <li>Argentina</li>
//                                 <li>Rest of Latin America</li>
//                               </ul>
//                             </li>
//                             <li>
//                               Middle East and Africa
//                               <ul>
//                                 <li>GCC Countries</li>
//                                 <li>South Africa</li>
//                                 <li>Rest of Middle East &amp; Africa</li>
//                               </ul>
//                             </li>
//                           </ul>
//                           <strong>
//                             Key Highlights &amp; Touch Points of the Global{" "}
//                             {details.Keyword} Market for the Forecast Years
//                             2022-2028:
//                           </strong>
//                           <ul>
//                             <li>
//                               CAGR of the market during the forecast period of
//                               2022-2028
//                             </li>
//                             <li>
//                               Extensive information on factors that will amplify
//                               the growth of the {details.Keyword} market over
//                               the upcoming seven years
//                             </li>
//                             <li>
//                               Accurate estimation of the global{" "}
//                               {details.Keyword} market size&nbsp;
//                             </li>
//                             <li>
//                               Exact estimations of the upcoming trends and
//                               changes observed in the consumer behavior
//                             </li>
//                             <li>
//                               Growth of the global {details.Keyword} industry
//                               across the North &amp; South America, EMEA, Asia
//                               Pacific, and Latin America
//                             </li>
//                             <li>
//                               Information about {details.Keyword} market growth
//                               potential
//                             </li>
//                             <li>
//                               In-depth analysis of the industry&rsquo;s
//                               competitive landscape and detailed information
//                               vis-a-vis on various vendors
//                             </li>
//                             <li>
//                               Furnishing of detailed information on the factors
//                               that will restrain the growth of the{" "}
//                               {details.Keyword} manufacturers
//                             </li>
//                           </ul>
//                           <u>
//                             <strong>FAQs</strong>
//                           </u>
//                           &nbsp;
//                           <ol>
//                             <li>
//                               Which product segment in the {details.Keyword}{" "}
//                               market is the most profitable?
//                             </li>
//                             <li>
//                               What are the main market players&#39; strategies
//                               for {details.Keyword} ?
//                             </li>
//                             <li>
//                               What reasons are causing the market for{" "}
//                               {details.Keyword} to become more competitive?
//                             </li>
//                             <li>
//                               What are the industry experts&#39; suggestions for{" "}
//                               {details.Keyword} ?
//                             </li>
//                             <li>
//                               During the predicted term, which region will have
//                               lucrative growth?
//                             </li>
//                             <li>
//                               What factors will limit the market for{" "}
//                               {details.Keyword} ?
//                             </li>
//                             <li>
//                               In the market for {details.Keyword} , which
//                               product segment will expand at the highest rate?
//                             </li>
//                             <li>
//                               Which developing developments will have an
//                               influence on the market for {details.Keyword} ?
//                             </li>
//                             <li>
//                               In the market for {details.Keyword} , what are the
//                               high-impact rendering factors?
//                             </li>
//                           </ol>
//                         </div>

//                         <div
//                           class="tab-pane fade  card-body"
//                           id="customSolutions"
//                         >
//                           <strong>1.&nbsp;&nbsp;&nbsp;&nbsp;Preface</strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.1.&nbsp;&nbsp;&nbsp;&nbsp;Report
//                           Scope and Description
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.&nbsp;&nbsp;&nbsp;&nbsp;Research
//                           Methodology
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.1.&nbsp;&nbsp;&nbsp;&nbsp;Phase
//                           I-Secondary Research
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.2.&nbsp;&nbsp;&nbsp;&nbsp;Phase
//                           II-Primary Research
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.3.&nbsp;&nbsp;&nbsp;&nbsp;Phase
//                           II-Expert Panel Review
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.4.&nbsp;&nbsp;&nbsp;&nbsp;Assumptions
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.5.&nbsp;&nbsp;&nbsp;&nbsp;Approach
//                           Adopted
//                           <br />
//                           <strong>
//                             2.&nbsp;&nbsp;&nbsp;&nbsp;Executive Summary
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword} Snapshot
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword}, By Type, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword}, By Application, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.3.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword}, By End-use, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.4.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword}, By Geography, 2021
//                           <br />
//                           <strong>
//                             3.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
//                             Dynamics
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Overview
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Inclination Insights Analysis
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.3.&nbsp;&nbsp;&nbsp;&nbsp;Drivers
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.4.&nbsp;&nbsp;&nbsp;&nbsp;Challenges
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.5.&nbsp;&nbsp;&nbsp;&nbsp;Future
//                           Prospects
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.6.&nbsp;&nbsp;&nbsp;&nbsp;Impact
//                           Analysis of Drivers and Challenges During the Forecast
//                           Period, (2018-2028)
//                           <br />
//                           <strong>
//                             4.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
//                             Size (US$), By Type, 2018 � 2028{" "}
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Share Analysis By Type, 2021 vs 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Attractive
//                           Investment Proposition By Type, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword} Size (US$), By Type, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
//                           &nbsp;&nbsp;&nbsp; &nbsp;4.2.1.&nbsp;&nbsp;&nbsp;
//                           &nbsp;Laboratory GradeIndustrial Grade
//                           <br />
//                           <strong>
//                             5.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
//                             Size (US$), By Application, 2018 � 2028{" "}
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Share Analysis By Application, 2021 vs 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Attractive
//                           Investment Proposition By Application, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword} Size (US$), By Application, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
//                           &nbsp;&nbsp;&nbsp; &nbsp;5.2.1.&nbsp;&nbsp;&nbsp;
//                           &nbsp;PetrochemicalPrinting TextileElectronics
//                           IndustryOther
//                           <br />
//                           <strong>
//                             6.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
//                             Size (US$), By End-use, 2018 � 2028
//                           </strong>{" "}
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Share Analysis By End-use, 2021 vs 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.2.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Attractive Investment Proposition By End-use, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword} Size (US$), By End-use, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.1.&nbsp;&nbsp;&nbsp;&nbsp;End-use1
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.2.&nbsp;&nbsp;&nbsp;&nbsp;End-use2
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.3.&nbsp;&nbsp;&nbsp;&nbsp;End-use3
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.4.&nbsp;&nbsp;&nbsp;&nbsp;End-use4
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.5.&nbsp;&nbsp;&nbsp;&nbsp;End-use5
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.6.&nbsp;&nbsp;&nbsp;&nbsp;End-use6
//                           <br />
//                           <strong>
//                             7.&nbsp;&nbsp;&nbsp;&nbsp;North America{" "}
//                             {details.Keyword} Analysis, 2018 � 2028
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.1.&nbsp;&nbsp;&nbsp;&nbsp;North
//                           America {details.Keyword} Size (US$), By Type, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.2.&nbsp;&nbsp;&nbsp;&nbsp;North
//                           America {details.Keyword} Size (US$), By Application,
//                           2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.3.&nbsp;&nbsp;&nbsp;&nbsp;North
//                           America {details.Keyword} Size (US$), By End-use, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.&nbsp;&nbsp;&nbsp;&nbsp;North
//                           America {details.Keyword} Size (US$), By Country, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.1.&nbsp;&nbsp;&nbsp;&nbsp;U.S.
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Canada
//                           <br />
//                           <strong>
//                             8.&nbsp;&nbsp;&nbsp;&nbsp;Europe {details.Keyword}{" "}
//                             Analysis, 2018 � 2028
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.1.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
//                           {details.Keyword} Size (US$), By Type, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.2.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
//                           {details.Keyword} Size (US$), By Application, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.3.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
//                           {details.Keyword} Size (US$), By End-use, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
//                           {details.Keyword} Size (US$), By Country, 2018 � 2028{" "}
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.1.&nbsp;&nbsp;&nbsp;&nbsp;U.K.
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Germany
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.3.&nbsp;&nbsp;&nbsp;&nbsp;France
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.4.&nbsp;&nbsp;&nbsp;&nbsp;Rest
//                           of Europe
//                           <br />
//                           <strong>
//                             9.&nbsp;&nbsp;&nbsp;&nbsp;Asia Pacific{" "}
//                             {details.Keyword} Analysis, 2018 � 2028
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.&nbsp;&nbsp;&nbsp;&nbsp;Asia
//                           Pacific {details.Keyword} Size (US$), By Type, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.2.&nbsp;&nbsp;&nbsp;&nbsp;Asia
//                           Pacific {details.Keyword} Size (US$), By Application,
//                           2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.3.&nbsp;&nbsp;&nbsp;&nbsp;Asia
//                           Pacific {details.Keyword} Size (US$), By End-use, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.&nbsp;&nbsp;&nbsp;&nbsp;Asia
//                           Pacific {details.Keyword} Size (US$), By Country, 2018
//                           � 2028 <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.1.&nbsp;&nbsp;&nbsp;&nbsp;China
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Japan
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.3.&nbsp;&nbsp;&nbsp;&nbsp;India
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.4.&nbsp;&nbsp;&nbsp;&nbsp;Rest
//                           of Asia Pacific
//                           <br />
//                           <strong>
//                             10.&nbsp;&nbsp;&nbsp;&nbsp;Latin America{" "}
//                             {details.Keyword} Analysis, 2018 � 2028
//                           </strong>{" "}
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.1.&nbsp;&nbsp;&nbsp;&nbsp;Latin
//                           America {details.Keyword} Size (US$), By Type, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.2.&nbsp;&nbsp;&nbsp;&nbsp;Latin
//                           America {details.Keyword} Size (US$), By Application,
//                           2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.3.&nbsp;&nbsp;&nbsp;&nbsp;Latin
//                           America {details.Keyword} Size (US$), By End-use, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.&nbsp;&nbsp;&nbsp;&nbsp;Latin
//                           America {details.Keyword} Size (US$), By Country, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.1.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Brazil
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.2.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Mexico
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.3.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Rest of Latin America
//                           <br />
//                           <strong>
//                             11.&nbsp;&nbsp;&nbsp;&nbsp;Middle East &amp; Africa
//                             (MEA) {details.Keyword} Analysis, 2018 � 2028
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.1.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
//                           {details.Keyword} Size (US$), By Type, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.2.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
//                           {details.Keyword} Size (US$), By Application, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.3.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
//                           {details.Keyword} Size (US$), By End-use, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
//                           {details.Keyword} Size (US$), By Region, 2018 � 2028{" "}
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.1.&nbsp;&nbsp;&nbsp;&nbsp;
//                           GCC Countries
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.2.&nbsp;&nbsp;&nbsp;&nbsp;South
//                           Africa
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.3.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Rest of MEA
//                           <br />
//                           <strong>
//                             12.&nbsp;&nbsp;&nbsp;&nbsp;Company Profiles
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.1.&nbsp;&nbsp;&nbsp;&nbsp;Competitive
//                           Analysis <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.2.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Positioning of Key Vendors <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.3.&nbsp;&nbsp;&nbsp;&nbsp;Key
//                           Strategies adopted by the Leading Players
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.&nbsp;&nbsp;&nbsp;&nbsp;Key
//                           Leading Players
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.1&nbsp;&nbsp;&nbsp;&nbsp;Business
//                           Description
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.2&nbsp;&nbsp;&nbsp;&nbsp;Geographic
//                           Operations
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.3&nbsp;&nbsp;&nbsp;&nbsp;Financial
//                           Information
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.4&nbsp;&nbsp;&nbsp;&nbsp;Product
//                           Positions/Portfolio
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.5&nbsp;&nbsp;&nbsp;&nbsp;Key
//                           Developments
//                           <br />
//                         </div>

//                         <div class="tab-pane fade card-body" id="rapidResearch">
//                           <strong>
//                           <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Research
//                             Methodology</h3>
//                           </strong>
//                           <br />
//                           <strong>1.&nbsp;&nbsp;&nbsp;&nbsp;Preface</strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.1.&nbsp;&nbsp;&nbsp;&nbsp;Report
//                           Scope and Description
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.&nbsp;&nbsp;&nbsp;&nbsp;Research
//                           Methodology
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.1.&nbsp;&nbsp;&nbsp;&nbsp;Phase
//                           I-Secondary Research
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.2.&nbsp;&nbsp;&nbsp;&nbsp;Phase
//                           II-Primary Research
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.3.&nbsp;&nbsp;&nbsp;&nbsp;Phase
//                           II-Expert Panel Review
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.4.&nbsp;&nbsp;&nbsp;&nbsp;Assumptions
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.2.5.&nbsp;&nbsp;&nbsp;&nbsp;Approach
//                           Adopted
//                           <br />
//                           <strong>
//                             2.&nbsp;&nbsp;&nbsp;&nbsp;Executive Summary
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword} Snapshot
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword}, By Type, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword}, By Application, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.3.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword}, By End-use, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1.4.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword}, By Geography, 2021
//                           <br />
//                           <strong>
//                             3.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
//                             Dynamics
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Overview
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Inclination Insights Analysis
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.3.&nbsp;&nbsp;&nbsp;&nbsp;Drivers
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.4.&nbsp;&nbsp;&nbsp;&nbsp;Challenges
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.5.&nbsp;&nbsp;&nbsp;&nbsp;Future
//                           Prospects
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.6.&nbsp;&nbsp;&nbsp;&nbsp;Impact
//                           Analysis of Drivers and Challenges During the Forecast
//                           Period, (2018-2028)
//                           <br />
//                           <strong>
//                             4.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
//                             Size (US$), By Type, 2018 � 2028{" "}
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Share Analysis By Type, 2021 vs 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Attractive
//                           Investment Proposition By Type, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword} Size (US$), By Type, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
//                           &nbsp;&nbsp;&nbsp; &nbsp;4.2.1.&nbsp;&nbsp;&nbsp;
//                           &nbsp;Laboratory GradeIndustrial Grade
//                           <br />
//                           <strong>
//                             5.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
//                             Size (US$), By Application, 2018 � 2028{" "}
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Share Analysis By Application, 2021 vs 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1.2.&nbsp;&nbsp;&nbsp;&nbsp;Attractive
//                           Investment Proposition By Application, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword} Size (US$), By Application, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
//                           &nbsp;&nbsp;&nbsp; &nbsp;5.2.1.&nbsp;&nbsp;&nbsp;
//                           &nbsp;PetrochemicalPrinting TextileElectronics
//                           IndustryOther
//                           <br />
//                           <strong>
//                             6.&nbsp;&nbsp;&nbsp;&nbsp;Global {details.Keyword}{" "}
//                             Size (US$), By End-use, 2018 � 2028
//                           </strong>{" "}
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.&nbsp;&nbsp;&nbsp;&nbsp;Overview
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.1.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Share Analysis By End-use, 2021 vs 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.1.2.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Attractive Investment Proposition By End-use, 2021
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.&nbsp;&nbsp;&nbsp;&nbsp;Global{" "}
//                           {details.Keyword} Size (US$), By End-use, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.1.&nbsp;&nbsp;&nbsp;&nbsp;End-use1
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.2.&nbsp;&nbsp;&nbsp;&nbsp;End-use2
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.3.&nbsp;&nbsp;&nbsp;&nbsp;End-use3
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.4.&nbsp;&nbsp;&nbsp;&nbsp;End-use4
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.5.&nbsp;&nbsp;&nbsp;&nbsp;End-use5
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.2.6.&nbsp;&nbsp;&nbsp;&nbsp;End-use6
//                           <br />
//                           <strong>
//                             7.&nbsp;&nbsp;&nbsp;&nbsp;North America{" "}
//                             {details.Keyword} Analysis, 2018 � 2028
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.1.&nbsp;&nbsp;&nbsp;&nbsp;North
//                           America {details.Keyword} Size (US$), By Type, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.2.&nbsp;&nbsp;&nbsp;&nbsp;North
//                           America {details.Keyword} Size (US$), By Application,
//                           2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.3.&nbsp;&nbsp;&nbsp;&nbsp;North
//                           America {details.Keyword} Size (US$), By End-use, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.&nbsp;&nbsp;&nbsp;&nbsp;North
//                           America {details.Keyword} Size (US$), By Country, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.1.&nbsp;&nbsp;&nbsp;&nbsp;U.S.
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Canada
//                           <br />
//                           <strong>
//                             8.&nbsp;&nbsp;&nbsp;&nbsp;Europe {details.Keyword}{" "}
//                             Analysis, 2018 � 2028
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.1.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
//                           {details.Keyword} Size (US$), By Type, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.2.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
//                           {details.Keyword} Size (US$), By Application, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.3.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
//                           {details.Keyword} Size (US$), By End-use, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.&nbsp;&nbsp;&nbsp;&nbsp;Europe{" "}
//                           {details.Keyword} Size (US$), By Country, 2018 � 2028{" "}
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.1.&nbsp;&nbsp;&nbsp;&nbsp;U.K.
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Germany
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.3.&nbsp;&nbsp;&nbsp;&nbsp;France
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.4.4.&nbsp;&nbsp;&nbsp;&nbsp;Rest
//                           of Europe
//                           <br />
//                           <strong>
//                             9.&nbsp;&nbsp;&nbsp;&nbsp;Asia Pacific{" "}
//                             {details.Keyword} Analysis, 2018 � 2028
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.&nbsp;&nbsp;&nbsp;&nbsp;Asia
//                           Pacific {details.Keyword} Size (US$), By Type, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.2.&nbsp;&nbsp;&nbsp;&nbsp;Asia
//                           Pacific {details.Keyword} Size (US$), By Application,
//                           2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.3.&nbsp;&nbsp;&nbsp;&nbsp;Asia
//                           Pacific {details.Keyword} Size (US$), By End-use, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.&nbsp;&nbsp;&nbsp;&nbsp;Asia
//                           Pacific {details.Keyword} Size (US$), By Country, 2018
//                           � 2028 <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.1.&nbsp;&nbsp;&nbsp;&nbsp;China
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.2.&nbsp;&nbsp;&nbsp;&nbsp;Japan
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.3.&nbsp;&nbsp;&nbsp;&nbsp;India
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.4.4.&nbsp;&nbsp;&nbsp;&nbsp;Rest
//                           of Asia Pacific
//                           <br />
//                           <strong>
//                             10.&nbsp;&nbsp;&nbsp;&nbsp;Latin America{" "}
//                             {details.Keyword} Analysis, 2018 � 2028
//                           </strong>{" "}
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.1.&nbsp;&nbsp;&nbsp;&nbsp;Latin
//                           America {details.Keyword} Size (US$), By Type, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.2.&nbsp;&nbsp;&nbsp;&nbsp;Latin
//                           America {details.Keyword} Size (US$), By Application,
//                           2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.3.&nbsp;&nbsp;&nbsp;&nbsp;Latin
//                           America {details.Keyword} Size (US$), By End-use, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.&nbsp;&nbsp;&nbsp;&nbsp;Latin
//                           America {details.Keyword} Size (US$), By Country, 2018
//                           � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.1.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Brazil
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.2.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Mexico
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.4.3.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Rest of Latin America
//                           <br />
//                           <strong>
//                             11.&nbsp;&nbsp;&nbsp;&nbsp;Middle East &amp; Africa
//                             (MEA) {details.Keyword} Analysis, 2018 � 2028
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.1.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
//                           {details.Keyword} Size (US$), By Type, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.2.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
//                           {details.Keyword} Size (US$), By Application, 2018 �
//                           2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.3.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
//                           {details.Keyword} Size (US$), By End-use, 2018 � 2028
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.&nbsp;&nbsp;&nbsp;&nbsp;MEA{" "}
//                           {details.Keyword} Size (US$), By Region, 2018 � 2028{" "}
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.1.&nbsp;&nbsp;&nbsp;&nbsp;
//                           GCC Countries
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.2.&nbsp;&nbsp;&nbsp;&nbsp;South
//                           Africa
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.4.3.&nbsp;&nbsp;&nbsp;&nbsp;
//                           Rest of MEA
//                           <br />
//                           <strong>
//                             12.&nbsp;&nbsp;&nbsp;&nbsp;Company Profiles
//                           </strong>
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.1.&nbsp;&nbsp;&nbsp;&nbsp;Competitive
//                           Analysis <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.2.&nbsp;&nbsp;&nbsp;&nbsp;Market
//                           Positioning of Key Vendors <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.3.&nbsp;&nbsp;&nbsp;&nbsp;Key
//                           Strategies adopted by the Leading Players
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.&nbsp;&nbsp;&nbsp;&nbsp;Key
//                           Leading Players
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.1&nbsp;&nbsp;&nbsp;&nbsp;Business
//                           Description
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.2&nbsp;&nbsp;&nbsp;&nbsp;Geographic
//                           Operations
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.3&nbsp;&nbsp;&nbsp;&nbsp;Financial
//                           Information
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.4&nbsp;&nbsp;&nbsp;&nbsp;Product
//                           Positions/Portfolio
//                           <br />
//                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.4.5&nbsp;&nbsp;&nbsp;&nbsp;Key
//                           Developments
//                           <br />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//             <div class="catsec">
//               <div class="catsec1">
//                 <div class="catsec2">
//                   <p class="catseccc">SELECT USER FORMAT</p>
//                 </div>
//                 <div class="catsec5">
//                   <div class="catseccs">
//                     <span class="secbye">Price :-</span>
//                     <span class="secbye1">&nbsp; $ {details.price}</span>
//                   </div>
//                 </div>

//                 <div class="catsec4">
//                   <button>
//                     <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;
//                     <Link
//                       to={`/placeOrder?report=${details.ReportNo}`}
//                       class="by1"
//                     >
//                       Bye Now
//                     </Link>
//                   </button>
//                 </div>
//               </div>
//               <div class="slidedivv">
//                 <div
//                   id="carouselExampleSlidesOnly"
//                   class="carousel slide"
//                   data-bs-ride="carousel"
//                 >
//                   <div class="carousel-inner">
//                     <div class="carousel-item active">
//                       <div class="slidediv">
//                         <div class="slidimg">
//                           <img
//                             src="https://i.ibb.co/JjtCxmr/did-you-know.png"
//                             alt=""
//                           />
//                         </div>
//                         <div class="slidconte">
//                           Over 100 Fortune 500 companies rely on us
//                         </div>
//                       </div>
//                     </div>
//                     <div class="carousel-item">
//                       <div class="slidediv">
//                         <div class="slidimg">
//                           <img
//                             src="https://i.ibb.co/JjtCxmr/did-you-know.png"
//                             alt=""
//                           />
//                         </div>
//                         <div class="slidconte">
//                           50,000 people come to us for subscription
//                         </div>
//                       </div>
//                     </div>
//                     <div class="carousel-item">
//                       <div class="slidediv">
//                         <div class="slidimg">
//                           <img
//                             src="https://i.ibb.co/JjtCxmr/did-you-know.png"
//                             alt=""
//                           />
//                         </div>
//                         <div class="slidconte">
//                           Our library has over 17,000 reports on 100s of topics
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div class="customizationdiv">
//                 <span class="customizationdiv1">
//                   Want to customize this report?
//                 </span>
//                 <p class="custum">
//                   This report can be personalized according to your needs. Our
//                   analysts and industry experts will work directly with you to
//                   understand your requirements and provide you with customized
//                   data in a short amount of time.
//                 </p>
//                 <div class="customizationdiv2">
//                   We offer $1000 worth of FREE customization at the time of
//                   purchase
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   //api with async await
//   async componentDidMount() {
//     let report = this.props.location.search.split("=")[1];
//     let response = await axios.get(`${url}/${report}`);
//     this.setState({ details: response.data[0] });
//   }
// }

// export default Detail;

