import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.js';

class Results extends Component {
    render() {
        return (
            <div className="origin">
                <Navigation/>
                <div className="container center">
                    <div>
                        <i className="medium material-icons icon-color">pie_chart_outlined</i>
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

            </div>
        );
    }
}
export default Results;