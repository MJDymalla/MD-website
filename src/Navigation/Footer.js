import React, {Component} from 'react';
import "materialize-css/dist/css/materialize.min.css";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer bg-dark">
                <div className="container">
                    <div className="row">
                        <p>&copy; KIMJ Development</p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;