import React, { Component } from 'react';
import { container, item } from '../TransitionVariants';

import HeaderBox from '../Components/HeaderBox';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Survey entry component
class Survey extends Component {
    render() {
        return (
            <div>
                <HeaderBox />
                <div className="origin">
                    <motion.div className="center header-position" variants={container} initial="hidden" animate="visible">
                        <i className="medium material-icons icon-color">blur_on</i>
                        <header className="pageHeaders white-text">Assess your mindset</header>
                    </motion.div>
                    <motion.div variants={container} initial="hidden" animate="visible">
                        <motion.div className="container center floating-container z-depth-2" variants={item}>
                            <div className="floating-content flow-text" >
                                <div className="grey-text text-darken-2 visualRow">
                                    Clicking the button below will begin the mindset profile.<br />
                                    You will be presented with a series of questions to assess the way you think.<br />
                                    In order to achieve the best results we ask that you ensure each question is answered,
                                    and answered truthfully.
                                </div>

                                <i className="small material-icons icon-color">linear_scale</i>

                                <div className="grey-text text-darken-1">
                                    <i>We feel it is important to let you know that your answers will not be
                                shown to anyone.</i>
                                </div><hr className="style" />
                                <motion.p variants={item}>
                                    <Link to="/questions">
                                        <a className="btn-small waves-effect waves-light" href="#!">BEGIN</a>
                                    </Link>
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        );
    }
}
export default Survey;