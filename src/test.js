import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './test.css'
import ashu from './ashutosh.jpeg'
import sumit from './summit.jpeg'
import sushil from './sushil.jpeg'
class flip extends Component {
    render() {
        return (
            <div className="row">
                
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{overflow:'hidden'}}>
                            <img src={ashu} style={{ width: '350px', height: '350px' }} />
                        </div>
                        <div class="flip-card-back">
                            <h4>Ashutosh Basnyat</h4>
                            <p>Executive Director</p>
                            <h7>Following the path of our passion is what I believe in.
                                Every opportunities are like a new experience and with
                                every experience comes new ideas, which makes the only
                                remaining thing called executing. Because without the
                                will to execute the ideas, there’s no point of having
                                an opportunity.</h7>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{overflow:'hidden'}}>
                            <img src={sushil} style={{ width: '350px', height: '350px' }} />
                        </div>
                        <div class="flip-card-back">
                            <h4>Sushil Bhandari</h4>
                            <p>Senior Developer</p>
                            <h7>The best part of life is performing. If you put up a
                                good performance you’ll get the applause, and if it
                                turns out to be bad, the point is not to give up but
                                to keep on working more harder “both physically and
                                technically”.</h7>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{overflow:'hidden'}}>
                            <img src={sumit} style={{ width: '350px', height: '350'}} />
                        </div>
                        <div class="flip-card-back">
                            <h4>Summit Shakya</h4>
                            <p>Head - HR</p>
                            <h7>Decision making is the part of emotion which helps me
                                to appraise and summarize an experience a great deal.</h7>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default flip;
