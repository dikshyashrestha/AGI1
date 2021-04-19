import React, { Component } from "react";
import './test2.css'
import mi from "./mission.png"

class test extends Component {
    render() {
        return (
            
            <div style="display: flex">
                <body>
                <div class="wrapper" style={{backgroundColor:"grey"}}>
                    <div class="card front-face">
                        <img src={mi}/>
                    </div>
                    <div class="card back-face">
                        <img src={mi}/>
                        <div class="info">
                            <div class="title">
                            </div>
                            <p>
                                User interface designer and <br/>front-end developer</p>
                        </div>
                        <p>email@email.com</p>
                    </div>
                    <div class="card front-face">
                        <img src={mi}/>
                    </div>
                </div>
</body>
            </div>


        );
    }
}
export default test;
