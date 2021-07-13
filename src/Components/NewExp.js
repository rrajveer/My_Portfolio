import React from 'react'
import styled from 'styled-components'
import Styled from 'styled-components'
const NewExp = () => {
    return (
        <ExpWrapper>
            <section className="experience" id="experience">
               
                    <div className="section-heading">
                    <h3 className=" text-center text-uppercase" style={{marginTop:"100px"}}>experience</h3>
                        <hr style={{borderBottom:"1px solid #eee",width:"25%",margin:"auto"}}/>
              <h6 className="text-center text-capitalize mt-3" style={{fontFamily:"Pacifico, cursive",fontSize:"1.2rem",letterSpacing:"0.1rem",opacity:"0.8"}}>current and post jobs</h6>
                    </div>
                    <div className="container">
                    <div className="timeline mt-5">
                        <ul className="mainList">
                            <li className="date" data-date=" 2020 - Present">
                                <h1>BizBiz Share Inc. <span style={{fontSize: "1.1rem",opacity:""}}>(Canada)</span></h1>
                                <ul>
                                 <li>Develop and Maintain the company app according to the company’s value proposition and customer approach</li>
                                  <li>Partake in the development, operation, and deployment process  </li>
                                  <li>Worked with React JS, ES6 to create a component-based interactive front-end user</li>
                                  <li>Implemented Restful API's to communicate with the server</li>
                                  <li>Created backup files using GIT</li>
                               </ul>
                            </li>
                            <li className="date" data-date=" 2017 - 2018">
                                <h1>Social Ninja Inc. <span style={{fontSize: "1.1rem",opacity:""}}>(India)</span></h1>
                                <ul>
                                  <li>Maintain and mange existing source code and Implement UI design </li>
                                  <li>Design and implement of front-end features and requirements </li>
                                  <li>Reach out to clients to resolve out of scope issues like implementation or customization </li>
                                  <li>Participate in Research and Development implementation of new projects.</li>    
                             </ul>
                                <p></p>
                            </li>
                            <li className="date" data-date=" 2016 - 2017">
                                <h1>Geek Wink Inc. <span style={{fontSize: "1.1rem",opacity:""}}>(India)</span></h1>
                                <ul>
                                  <li>Work on the functional requirement suggested By Team Lead</li>  
                                  <li>Implement UI design</li>
                                  <li>Design and built signup and login pages </li>
                                  <li>Fix software bugs via JavaScript and CSS</li>
                               </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </ExpWrapper>
    )
}

export default NewExp
const ExpWrapper = styled.div`

.timeline .mainList{
    border-left: 4px solid #00AF9D;
    border-radius: .8rem;
    background-color:#3b3b3b;
    margin-left:22rem;
    //  margin:auto;
    position: relative;
    padding: 2rem;
    list-style: none;
    text-align:left;
    width: 70%;
    color:#eee;
    // top:20px;
}
.timeline h1{
    font-size: 1.5rem;
    // text-transform: uppercase;
    margin-bottom: 1rem;
    // opacity: 0.3;
    color:#eee;
}

.timeline .date{
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    position: relative;
    color:#eee;
}
.timeline .date:last-of-type{
    padding-bottom: 0;
    margin-bottom: 0;
    border:none;
}
.timeline .date::before,
.timeline .date::after{
    position:absolute;
    display:block;
    top:50%;
    transform: translateY(-50%);
}
.timeline .date::before{
    content: attr(data-date);
    left: -16rem;
    text-align: right;
    min-width: 12rem;
    font-size: 1.3rem;
    top:20px
}
.timeline .date::after{
    content: '';
    box-shadow: 0 0 0 3px  #ffe838;
    border-radius: 100%;
    left: -3rem;
    height: 1.5rem;
    top:20px;
    width: 1.5rem;
    background-color: #313534;
    
}
@media (max-width: 992px){
    .timeline .mainList{
       margin-left: 14rem;
    }
}
@media (max-width: 768px){
    .timeline .mainList{
        margin-left: 9rem;
     }
    li {
        margin: -3px !important;
    }
    h1{
        margin-top: 15px;
    }
    .timeline .date::after{
        top:15px;
        left:-2.7rem;
    }
    
}
@media (max-width: 576px){
    .timeline .date::before{
        font-size: 1rem !important;
    }
    h1{
        font-size: 1.1rem !important;
    }
}
@media (max-width: 385px){
  li {
        margin: -6px !important;
    }
}`