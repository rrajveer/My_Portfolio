import React from 'react';
import { Grid, Cell } from 'react-mdl';
import styled from 'styled-components';
export default function Education() {
    return (
        <EducationWrapper>

            <h3 className="text-center text-uppercase mt-5">education</h3>
            <hr className="mx-auto"/> 
               <div className="container">
               <div className="row mt-5 justify-content-around firstRow" data-aos="fade-up" data-aos-delay="300">
                 <div className="col-lg-8 col-md-8">
                     <h5>Programming and Web Technologies, ( AEC )</h5>
                     <p>ISI, L’institut Supérieur d’informatique, Montreal, QC </p>
                 </div>
                 <div className=" col-lg-4 col-md-4">
                     <span>2019-2021</span>
                 </div>

               </div>

               <div className="row mt-5" style={{paddingBottom:"30px"}} data-aos="fade-up" data-aos-delay="600">
                 <div className="col-lg-8 col-md-8">
                     <h5>Computer Science and Engineering, ( M.Tech )</h5>
                     <p>Rungta College of Engineering and Technology, India</p>
                 </div>
                 <div className=" col-lg-4 col-md-4">
                     <span>2013-2015</span>
                 </div>

               </div>
            </div>
                                          
        </EducationWrapper>
    )
}
const EducationWrapper = styled.div`
.container{
    padding-top:50px
}
h3{
    margin-top:103px !important;
}
hr{
    border-bottom: 1px solid #eee;
    width: 20%;
    width: 25%;
    margin:auto
}
h5{
    font-size:1.2rem !important;
    color: white;
    
}
p ,span{
    font-size:1.2rem !important;
    color: white;
    opacity:0.8;
}
.col-lg-8, .col-lg-4{
    text-align: center
}
@media (max-width: 992px){
    h5{
        font-size:1rem
    }
}
@media (max-width: 768px){
    span{
        color:#00AF9D;
    }
    .firstRow{
        margin-bottom:68px;
    }
}
@media (max-width: 767px){
    .container{
        padding:0px
    }
    h5{
        font-size:1.4rem
    }
    p{
        font-size:1.1rem
    }
}`