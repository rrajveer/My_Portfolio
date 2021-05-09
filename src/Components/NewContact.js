import React from 'react'
import styled from 'styled-components'


export default function Contact() {
   
    
    return (
   
        <ContactWrapper>
        <h3 className=" text-center text-uppercase" style={{marginTop:"9rem"}}>contact</h3>
       <hr style={{borderBottom:"1px solid #eee",width:"20%",width: "25%",margin:"auto"}}/> 
       <h6 className="text-center" style={{fontFamily:"Pacifico, cursive",fontSize:"1.2rem",letterSpacing:"0.1rem",opacity:"0.8"}}>Getting In Touch Is Easy!!!</h6>
          
       
        < div data-aos="fade-up"data-aos-delay="300">
            
            
            <section>
                <div className="container">
                <div className="contactInfo py-3">
                    <h3 style={{textAlign:"center", width:"105%",color:"white",opacity:"0.9",fontFamily:"Sacramento, cursive",letterSpacing:"0.02rem"}}>Contact Info</h3>
                    <hr style={{marginBottom:"1px solid #eee",width:"50%",margin:"auto",marginTop:"-15px"}}/>
                    <ul className="info mt-5">
                        <li>
                        <i className="fas fa-map-marker-alt" style={{fontSize:"1.8rem", color:"white",opacity:"0.9"}}/>
                       
                            <span style={{fontSize:"0.9rem",marginTop:"5px",marginLeft:"1.6rem"}}> Montreal, QC H2C1J6</span>
                        </li>
                        <li style={{marginTop:"1.2rem"}}>
                        <i className="fas fa-envelope-open-text" style={{fontSize:"1.8rem", color:"white",opacity:"0.9"}}/>
                            {/* <span><img src={ContactImg[0].gmail} alt="gmail" style={{height:"30px",width: "40%",marginLeft:"1px"}}/></span> */}
                            <span style={{fontSize:"0.9rem",marginTop:"5px",marginLeft:"1.3rem"}}>kaurrajveer25@gmail.com</span>
                        </li>
                        <li style={{marginTop:"1.2rem"}}>
                        <i className="fas fa-phone-alt" style={{fontSize:"1.8rem", color:"white",opacity:"0.9",marginTop:"0.5rem"}}></i>
                            {/* <span><img src={ContactImg[0].phone} alt="phone"style={{height:"59px",padding:"17px"}}/></span> */}
                            <span style={{fontSize:"0.9rem",marginTop:"10px",marginLeft:"1.3rem"}}>(514)-659-5225</span>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kaur-rajveer/"><i className="fab fa-linkedin-in"  style={{fontSize:"1.8rem", color:"white",opacity:"0.9",marginTop:"0.5rem"}}></i></a>
                            <span style={{fontSize:"0.9rem",marginTop:"10px",marginLeft:"1.5rem"}}> LinkedIn</span>
                        </li>
                    </ul>
                    <ul className="social mt-3">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                    </ul>
                    
                </div>
            </div>
          </section>
          </ div>
                 
        </ContactWrapper>

)}
const ContactWrapper = styled.div`

  section .container{
      position:relative;
      display:flex;
      justify-content:center;
      min-height: 500px;
      width:40%;
      z-index:800;
 }
  section .container .contactInfo{
      top:20%;
      position:absolute;
      height:calc(100%-150px);
      width:100%;
      border:1px solid #eee;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      box-shadow: 0 20px 20px rgba(0,0,0), 0px 0px 50px rgba(0,0,0) ;
      padding:40px;
  }
  section .container .contactInfo .info{
      position:relative;
      list-style:none;
      padding:0px;
      font-family: 'Alegreya Sans SC',sans-serif;
      font-size: 1.5rem;
      font-weight:400;
      letter-spacing:0.5px;
  }
  section .container .contactInfo .info li{
      cursor:pointer;
      position:relative;
      margin:10px 0;
      display:flex;
      align-items:flex-start;
  }
  span{
    font-size:0.8rem;
    font-weight:500;
    color:white;
    
  }
  section .container .contactInfo .social{
      display:flex;
      position:relative;
  }
  section .container .contactInfo .social li{
      list-style:none;
      margin-left:-20px;
      margin-right:30%;
 }
  section .container .contactInfo .social li i{
      font-size:30px;
      color:#00AF9D;
      font-weight:500;
      cursor:pointer
  }
  
  @media (max-width: 941px){
    .container .contactInfo{
          width: 123% !important;
      }
  }
  @media (max-width: 590px){
    .container .contactInfo{
          width: 160% !important;
      }
  }
  @media (max-width: 452px){
      h3{
        font-size: 1.9rem;
      }
      .container, .contactInfo {
        top: 12% !important;
        padding: 9px !important;
    }
}
@media (max-width: 387px){
   .container, .contactInfo {
        top: 12% !important;
        padding: 9px !important;
      
    }
    .container .contactInfo {
        width: 180% !important;
    }
    li i{
            font-size: 1.5rem !important;
        }
    ul{
            margin-top:16px !important;
        }
}
@media (max-width: 330px){
    .contactInfo {
        padding: 5px !important;
    }
    span{
        font-size: 0.8rem !important ;
        margin-left: 1.1rem !important;
    }
}`
