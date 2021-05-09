import React from 'react'
import styled from 'styled-components'

export default function Services() {
    return (
        <ServiceWrapper>
              <h3 className=" text-center text-uppercase" style={{marginTop:"9rem"}}>Services</h3>
              <hr className="mx-auto" style={{borderBottom:"1px solid #eee",width:"20%",width: "25%",margin:"auto"}}/> 
              <h6 className="text-center text-capitalize mt-3" style={{fontFamily:"Pacifico, cursive",fontSize:"1.2rem",letterSpacing:"0.1rem",opacity:"0.8"}}>what i can do for you</h6>

            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3" data-aos="flip-left" data-aos-delay="300">
                    <div className="icon-container">
                        <i className="fas fa-layer-group"/>
                    </div>
                    <h1>Web Design</h1>
                   
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 item" data-aos="flip-left" data-aos-delay="900">
                    <div className="icon-container">
                        <i className="fas fa-code"/>
                    </div>
                    <h1>Web Developmet</h1>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 item" data-aos="flip-left" data-aos-delay="1200">
                    <div className=" icon-container">
                      <i className="far fa-lightbulb"/>
                    </div>
                    <h1>Innovative Ideas</h1>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 item" data-aos="flip-left" data-aos-delay="1200">
                    <div className=" icon-container">
                      <i className="fas fa-chess-queen"></i>
                    </div>
                    <h1>Strategy & Design</h1>
                </div>
            </div>
            </div>
        </ServiceWrapper>
    )
}

const ServiceWrapper = styled.div`
.row{
    text-align: -webkit-center;
   
}
.row{
    
    padding-top:5rem;
    padding-bottom:3rem;
}
h1{
    font-size: 1.1rem;
    color: white;
    letter-spacing:0.1rem ;
    text-transform: uppercase;
    text-align: center;
  }
  .icon-container{
    text-align: center;
    border: 3px solid #00AF9D;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    transform: rotate(45deg);
    /* background-color: #fd57bf; */
    display: flex;
    justify-content: center;
  }
  .icon-container i{
    color: #ffe838;
    font-size: 1.5rem;
    transform: rotate(-45deg); 
  }
  @media (max-width: 575px){
    .item{
        padding-top: 45px !important;
    }
    
}`