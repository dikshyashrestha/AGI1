import React, { Component } from "react";
import "./about.css";
import mi from "./mission.png"
import vi from "./vision.png"
import whyus from "./whyus.png"
import agi from "./agilogo.png"
import "./test"
import 'bootstrap/dist/css/bootstrap.min.css';
import './test.css'
import ashu from './ashutosh.jpeg'
import sumit from './summit.jpeg'
import sushil from './sushil.jpeg'

class about extends Component {
  render() {
    return (
      <div className="aboutuspage" style={{ backgroundColor: 'white' }}>
        {/* <h1 style={{marginTop:'25px'}}>About A.G.I. Infotech</h1> */}
        <div className='row'>
          <div className="aboutagii col-sm-4">
            <img className="aboutagi" src={agi}></img>
          </div>
          <div className="aboutagitext col-sm-6">

            <br />


            A.G.I. INFOTECH is an information technology (IT) company that provides vast
            <br />
             areas of services for business productivity. As per our base is in Bhaisepati,
            <br />
             we deliver the most comprehensive court of IT services to small, medium,  and
            <br />
            large-sized businesses across Nepal. As per our motto “Make Your  Life Simple”,
            <br />
             we are providing these services by the need for innovation, for increasing
            <br />
            productivity and efficiency, and the use of technology in our day to day lives.
            <br />
             We are always committed to providing leading IT services by utilizing the
            best available technology and services.<br />
            <br />


          </div>
        </div>
        <div className='row'>
          <div className=''><img className='icon' src={mi} />
            <h6 className='aims'>Our Mission</h6>
            <h6 className='aims2'>A.G.I. INFOTECH is an information technology <br />(IT) company that provides vast
                                areas of services<br /> for business productivity.</h6></div>
          <div className=''><img className='icon' src={vi} />
            <h6 className='aims'>Our Vision</h6>
            <h6 className='aims2'>A.G.I. INFOTECH is an information technology <br />(IT) company that provides vast
                                areas of services<br /> for business productivity.</h6></div>
          <div className=''><img className='icon' src={whyus} />
            <h6 className='aims'>Why Us</h6>
            <h6 className='aims2'>A.G.I. INFOTECH is an information technology <br />(IT) company that provides vast areas of services<br /> for business productivity.</h6></div>


        </div>
        <h1 style={{ marginTop: '80px' }}>Testimonials</h1>
        <div className="row">

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ overflow: 'hidden' }}>
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
              <div className="flip-card-front" style={{ overflow: 'hidden' }}>
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
              <div className="flip-card-front" style={{ overflow: 'hidden' }}>
                <img src={sumit} style={{ width: '350px', height: '350' }} />
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
        <br/>
        <br/>
      </div>

    );
  }
}
export default about;
