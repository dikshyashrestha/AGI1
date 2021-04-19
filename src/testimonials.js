import React, { Component } from "react";
import "./testimonials.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Ashutosh from './ashutosh.jpeg';
import Sushil from './sushil.jpeg';
import Summit from './summit.jpeg';
import { FaFacebookMessenger } from "react-icons/fa"
import { GoHome } from "react-icons/go";


class testimonials extends Component {
    render() {
        return (
            <div>
                <h1>Testimonials</h1>
                <div className="C1">
                    <a href="./home"> <GoHome style={{ height: "50 px;" }} /> </a>
                </div>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div>
                        <img src={Ashutosh} />
                        <div className="myCarousel">
                            <h3>Ashutosh Basnyat</h3>
                            <h4>Executive Director</h4>
                            <p>
                                Following the path of our passion is what I believe in.
                                Every opportunities are like a new experience and with
                                every experience comes new ideas, which makes the only
                                remaining thing called executing. Because without the
                                will to execute the ideas, there’s no point of having
                                an opportunity.
                        </p>
                        </div>
                    </div>

                    <div>
                        <img src={Sushil} />
                        <div className="myCarousel">
                            <h3>Sushil Bhandari</h3>
                            <h4>Senior Developer</h4>
                            <p>
                                The best part of life is performing. If you put up a
                                good performance you’ll get the applause, and if it
                                turns out to be bad, the point is not to give up but
                                to keep on working more harder “both physically and
                                technically”.
                        </p>
                        </div>
                    </div>

                    <div>
                        <img src={Summit} />
                        <div className="myCarousel">
                            <h3>Summit Shakya</h3>
                            <h4>Head - HR</h4>
                            <p>
                                Decision making is the part of emotion which helps me
                                to appraise and summarize an experience a great deal.
                        </p>
                        </div>
                        <div className="endcontain">
                            <FaFacebookMessenger />
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}
export default testimonials;
