import React, { Component } from "react";
import "./aboutus.css";

class Aboutus extends Component {
  render() {
    return (
      <>
        <div className="containermain">
          <div className="latestr">
            <div className="latestpub">
              <h2> &nbsp; About Us</h2>
            </div>
            <div className="latestr1">
              <span>Home</span> | About Us
            </div>
          </div>
        </div>
        <div className="aboutus">
          <div className="aboutus1">
            <div className="aboutus2">
              <h1> About Us</h1>
              <hr />
            </div>
            <div className="aboutus3">
            <br />
              <h3>What is Lorem Ipsum?</h3>
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              <h3>Where does it come from?</h3>
              <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classNameical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <br/>
              <br/>
              <h3>Why do we use it?</h3>
              <br />
              It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Aboutus;