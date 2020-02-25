import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer page-footer">
                <div className="container">
                    <div className="row center">
                        <p>&copy; KIMJ Development</p>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2014 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;