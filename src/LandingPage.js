import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Image1 from "./Images/bg1.jpg";
import Image2 from "./Images/bg2.jpg";

class LandingPage extends Component {
    componentDidMount() {
        M.Parallax.init(this.Parallax1);
        M.Parallax.init(this.Parallax2);
    }

    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div
                        ref={Parallax => {
                            this.Parallax1 = Parallax;
                        }}
                        className="parallax"
                    >
                        <img src={Image2} />
                    </div>
                </div>
                <div className="section dark">
                    <div className="row container">

                        <p className="navy-text">
                            <i>“Obsessed is a word used often by the lazy, in order to describe the dedicated.”</i> – Tai Lopez
                        </p>
                    </div>
                </div>
                <div className="parallax-container">
                    <div
                        ref={Parallax => {
                            this.Parallax2 = Parallax;
                        }}
                        className="parallax"
                    >
                        <img src={Image1} />
                    </div>
                </div>
            </div>
        );
    }
}
  export default LandingPage;