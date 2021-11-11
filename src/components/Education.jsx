import React, { Component } from 'react';
import '../App.css';
import {ReactComponent as EduImg} from '../images/edu.svg'
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from '@iconify/react';
import codechefIcon from '@iconify-icons/simple-icons/codechef';
import hackerrankIcon from '@iconify-icons/cib/hackerrank';
import hackerearthIcon from '@iconify/icons-simple-icons/hackerearth';
import leetcodeIcon from '@iconify/icons-cib/leetcode';

export default class Education extends Component {
    render() {
      return (
          <div className="main">
              <header>
                <div className="title text-center justify-content-center">Education</div>                       
                <div className="basic" style={{display: "flex"}}>        
                    <div><EduImg style={{float: "left"}} /></div>       
                    <div className="edu text-center">
                        Competitive Programming Profiles:
                        <div className="profiles">
                        <ul>
                            {/* <li>
                               <a href="https://github.com/joshiaastha"><i class="fab fa-github fa-2x" aria-hidden="true" style={{color: "#fff"}}></i></a>
                            </li>  
                            <li>
                               <a href="https://www.linkedin.com/in/aasthajoshi/"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true" style={{color: "#fff"}}></i></a>
                            </li>      */}
                            <li>
                               <a href="https://www.hackerrank.com/Aastha_Joshi">
                                   <Icon icon={hackerrankIcon} className="cook" color="#52A64F" style={{fontSize: "50px"}} />
                               </a>
                            </li>
                            <li>
                               <a href="https://www.codechef.com/users/aasthajoshi">
                                   <Icon className="cook" icon={codechefIcon} color="#72371C" style={{fontSize: "50px"}} />
                               </a>
                            </li>
                            <li>
                               <a href="https://www.hackerearth.com/@joshiaastha6">
                                   <Icon className="cook" icon={hackerearthIcon} color="royalblue" style={{fontSize: "50px"}} />
                               </a>
                            </li> 
                            <li>
                               <a href="https://leetcode.com/aasthajoshi/">
                                   <Icon className="cook" icon={leetcodeIcon} color="#ff9b49" style={{fontSize: "50px"}} />
                               </a>
                            </li>                     
                        </ul>
                        
                    </div>
                    </div>                   
                </div>
                <h3 className="fedu text-center" style={{paddingTop: "3rem"}}>
                    Formal Education
                </h3>
                <div class="container">                    
                    <div class="rightbox">
                        <div class="rb-container">
                        <ul class="rb">
                            <li class="rb-item" ng-repeat="itembx">
                            <div class="timestamp">
                                2019-2021 <br/> Btech. ECE (MU)
                            </div>
                            <div class="item-title">K.J. Somaiya College of Engineering <br/>
                            SGPI: 9.2
                            </div>

                            </li>
                            <li class="rb-item" ng-repeat="itembx">
                            <div class="timestamp">
                                2017-2019 <br/> Intermediate (HSC)
                            </div>
                            <div class="item-title">Allen Swami Vivekanand College of Science and Commerce <br/>
                            Percentage: 82.77%
                            </div>

                            </li>

                            <li class="rb-item" ng-repeat="itembx">
                            <div class="timestamp">
                                2005-2017 <br/>High School (CBSE)
                            </div>
                            <div class="item-title">Atomic Energy Central School No.2 <br/>
                            Percentage: 95.4%
                            </div>

                            </li>

                        </ul>
                        </div>
                    </div>
                </div>

              </header>
                           
          </div>
      )
    }
}