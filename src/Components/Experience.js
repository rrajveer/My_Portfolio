import React from 'react'
import styled from 'styled-components'
export default function Experience() {
    return (
        <ExperienceWrapper>
                    <h3 className="text-center text-uppercase mt-5">experience</h3>
                    <hr/> 
                   
                     <div className="container" data-aos="fade-up" data-aos-delay="300">
                        <div className="row">
                           <div className="col-lg-6 col-md-6 col-sm-12">
                               <h5>Web Developer </h5>
                               <p>Social Ninja Technology</p>
                               <ul>
                                 <li>Implement UI design</li>
                                  <li>Design and built signup and login pages </li>
                                  <li>Fix software bugs via JavaScript and CSS</li>
                                  <li>Work on the functional requirement suggested By Team Lead</li>    
                               </ul>
                           </div>
                      

                           <div className="col-lg-6 col-md-6 col-sm-12 mt-4" style={{textAlign:"center"}}>
                              <span>2017–2018 </span>
                           </div>
                        </div>
                      </div>
                  
        </ExperienceWrapper>
    )
}
 const ExperienceWrapper = styled.div`
 hr{
  border-bottom: 1px solid #eee;
   width: 25%;
   margin:auto
 }
 .container{
    padding-top:60px
 }
 h5{
   font-size: 1.5rem;
   margin-bottom: 0px;
   letter-spacing: 0.1rem;
   color:white;
   opacity:0.9;
   text-align: center
 }
 p{
   font-size: 1rem;
   text-align: center;
   font-weight: 500;
   color:white;
   opacity:0.8
 }
 ul{
   font-size: 1rem;
   margin-top: 0px;
   font-weight:500;
   color: white;
   opacity:0.8;
   padding-left: 14rem;
   
 }
 
 span{
   font-size: 1.5rem !important;
   font-weight: 500
 }

 @media (max-width: 992px){
    ul{
      padding-left: 6rem;
    }
 }
 @media (max-width: 769px){
    .col-sm-12{
       text-align:center
    }
    ul{
      padding-left: 0rem;
      list-style:none
    }
    .circle {
      width: 5px;
      height: 5px;
      background: white;
      border-radius: 50%;
    }
 }
 `


