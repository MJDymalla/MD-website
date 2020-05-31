import '../CSS/header_box.css';

import React, {Component} from 'react';

import M from 'materialize-css';
import header_image from '../Images/header_image.jpg';

class HeaderBox extends Component {
    componentDidMount() {
        M.Parallax.init(this.Parallax1);
    }
    render() {
        return (
            <div className="header-img-height">
                <div className="parallax-container header-img-container">
                    <div
                        ref={Parallax => {
                            this.Parallax1 = Parallax;
                        }}
                        className="parallax"
                    >
                        <div>
                            <img src={header_image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderBox;