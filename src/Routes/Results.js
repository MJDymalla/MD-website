import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.js';
import Undraw1 from "../Images/undraw_message_sent_1030.png";
import Undraw2 from '../Images/undraw_progress_data_4ebj.png';


class Results extends Component {
    render() {
        return (
            
          <div className="origin">
            <Navigation />
            <div className="container center">
              <header className="pageHeaders">Results</header>

              <div className="row resultRow">
                <h1 className="left-aligned flow-text grey-text darken-4 text-accent-1">
                  Introduction
                </h1>
                <p class="flow-text">
                  High Self-Confidence – Architects trust their rationalism
                  above all else, so when they decide something, they have no
                  reason to doubt their decisions or insights. This creates an
                  honest, direct style of communication that isn’t held back by
                  what others expect of them. When Architects are right, they’re
                  right, and nothing will change that fact. Whether it’s a
                  person, a process, or themselves whose course needs to be
                  corrected, they’ll hold their ground and have it no other way.
                </p>

                <h1 className="flow-text grey-text darken-4 text-accent-1">
                  The Right Attitude for Meeting Goals
                </h1>
                <p class="flow-text">
                  Independent and Decisive – This creativity, logic, and
                  confidence form individuals who stand on their own and take
                  responsibility for their actions. Authority figures don’t
                  impress Architects, and neither do social conventions. And no
                  matter how popular something is, if they have a better idea,
                  Architects stand against anyone they must to promote their
                  plan. Either an idea is rational, or it’s wrong – and they’re
                  happy to apply that standard to themselves.
                </p>
                <blockquote className="about-text align left">
                  With a natural thirst for knowledge that shows itself early in
                  life, other kids at school often call Architects “bookworms.”
                  While their peers may intend to insult them, those with this
                  personality type likely identify with the label. Throughout
                  their lives, they’re proud of how much they know, and
                  Architects enjoy sharing the knowledge they gain. They’re
                  confident in their mastery of their chosen subjects. They are
                  serious and prefer to design and carry out effective plans
                  rather than waste their time with foolish distractions like
                  gossip.
                </blockquote>
                <h2 className="flow-text grey-text darken-4 text-accent-1">
                  Strengths
                </h2>
                <p class="flow-text">
                  Hard-Working and Determined – If something grabs their
                  interest, Architect personalities can be very dedicated to
                  their work. They often put in long hours and intense effort.
                  Architects are goal-oriented, and if tasks lead to something
                  clear and relevant, they strive to accomplish those tasks.
                </p>
              </div>
              <hr />
              <div className="row visualRow">
                <div className="col s6 resultText">
                  <h3 className="flow-text grey-text darken-4 text-accent-1">
                    Prefer Visuals?
                  </h3>
                  <p className="flow-text">
                    Click here for a breakdown of your results through a series
                    of graphs and informatics
                  </p>
                </div>
                <div className="col s6">
                  <img
                    className="responsive-img resultimg"
                    src={Undraw2}
                    alt=""
                  />
                </div>
              </div>

              <div className="row visualRow">
                <div className="col s6">
                
                  <img
                    className="responsive-img resultimg"
                    src={Undraw1}
                    alt=""
                  />
                </div>
                <div className="col s6">
                  <h3 className="flow-text grey-text darken-4 text-accent-1">
                    Want to stay informed?
                  </h3>
                  <p className="flow-text">
                    Click here to get your results emailed to your registered
                    email address
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Results;