import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Navigation/Footer.js';

class Results extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container center">
                    <div>
                        <header className="pageHeaders">
                            Results
                            </header><hr />
                        <p>
                            Thank you for completing the Mindset Profile <br />
                            Your results are displayed below <br />
                            [ results here ]
                            </p>

                        <p>
                            Click here for a graphical representation of your results<br />
                            <button className="btn waves-effect waves-light blue">Graph</button>
                        </p>

                        <p>
                            Click here to generate an e-mail of your results to be sent to your provided Google account<br />
                            <button className="btn waves-effect waves-light blue">E-mail</button>
                        </p>

                        <p><i>If you choose not to have your results e-mailed to you, they will still be available to access via your account </i></p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Results;