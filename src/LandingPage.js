import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Image1 from "./Images/bg1.jpg";
import Image2 from "./Images/bg2.jpg";

class LandingPage extends Component {
    componentDidMount() {
        M.Parallax.init(this.Parallax1);
        M.Parallax.init(this.Parallax2);

        window.onscroll = function() {myFunction()};

        var header = document.getElementById("head");
        var sticky = document.getElementById('parallax-container1').offsetHeight - 100;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }

    render() {
        return (
            <div>
                <div className="parallax-container" id='parallax-container1'>
                    <h2 className="flow-text head" id='head'>
                        Explore your entrepreneurial mindset with <b>Mass Diplomacy</b>
                    </h2>
                    <div
                        ref={Parallax => {
                            this.Parallax1 = Parallax;
                        }}
                        className="parallax"
                    >
                        <div className="landing-image">
                            <img src={Image2} alt="#!"/>
                        </div>
                    </div>
                </div>

                <div className="row center valign-wrapper landing-info">
                    <div className="col m4">
                        <i className="large material-icons icon-color">enhanced_encryption</i>
                        <h5 className="subHeader white-text">
                            Secure
                        </h5>
                        <p className="grey-text">
                            <i>User information is kept secure and private.</i>
                        </p>
                    </div>

                    <div className="col m4">
                        <i className="large material-icons icon-color">fingerprint</i>
                        <h5 className="subHeader white-text">
                            Researched
                        </h5>
                        <p className="grey-text">
                            <i>Profile based on psychological research.</i>
                        </p>
                    </div>

                    <div className="col m4">
                        <i className="large material-icons icon-color">repeat</i>
                        <h5 className="subHeader white-text">
                            Continuous Improvement
                        </h5>
                        <p className="grey-text">
                            <i>Emphasis on continuous improvement and education.</i>
                        </p>
                    </div>
                </div>

                <div className="parallax-container">
                    <p className="landing-text center white-text">
                        <i>Anyone who has never made a mistake has never tried anything new.</i>
                    </p>
                    <p className="landing-para center white-text">
                        Whatever <i className="tiny material-icons icon-color">linear_scale</i> It <i className="tiny material-icons icon-color">linear_scale</i> Takes
                    </p>

                    <div className="begin center white-text">
                        <Link to='/login'>BEGIN</Link>
                    </div>

                    <div
                        ref={Parallax => {
                            this.Parallax2 = Parallax;
                        }}
                        className="parallax"
                    >
                        <div className="bg1">
                            <img src={Image1} alt="#!"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  export default LandingPage;