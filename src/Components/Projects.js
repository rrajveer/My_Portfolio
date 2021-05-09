import React, { useEffect }from 'react'
import pic1 from '../assets/pic1.png'
import covid2 from '../assets/covid2.jpg'
import speechly from '../assets/speechly.jpg'
import styled from 'styled-components'
import ImgGallery from './ImgGallery'

 const Projects=() => {
    return (
        <div>
        <ProjectWrapper>
            <h4 className="text-center text-uppercase mt-5">projects</h4>
            <hr style={{borderBottom:"1px solid #eee",width:"25%",margin:"auto"}}/> 
            <h6 className="text-center text-capitalize mt-3" style={{fontFamily:"Pacifico, cursive",fontSize:"1.2rem",letterSpacing:"0.1rem",opacity:"0.8"}}>view some of my recent work</h6>
            <a className="mx-auto gitBtn1"  data-aos="fade-in" data-aos-delay="300" href="https://github.com/rrajveer" style={{width:"15%"}}>
            < i className="fas fa-download" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                Projects Inventory</a>
            
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 tracker">
                            <img src={pic1} alt="prjctImg" style={{width:"110%",height:"395px"}}/>
                     </div>
                
                    <div className="col-lg-6 col-md-6 col-sm-8 right" data-aos="fade-in" data-aos-delay="600">
                        <h3>Online Shopping</h3>
                        <hr style={{marginBottom:"1px solid #eee",width:"60%",margin:"auto",marginTop:"-15px"}}/>
                        <p className="mt-5">A fully functional eCommerce application using commerce.js</p>
                        <p>Technology Used:- React JS, Commerce JS, Stripe and JavaScript</p>
                        <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website">
                        <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                    </div>
                  
                </div>
            
            <div className="row leftInfo">
                <div className="col-sm-10 col-md-6 col-lg-6  " data-aos="fade-in" data-aos-delay="900">
                     <h3 >Expense Budget Tracker</h3>
                     <hr style={{marginBottom:"1px solid #eee",width:"75%",margin:"auto",marginTop:"-15px"}}/>
                     <p className="mt-5">A Complex Expense Budget Tracker, how to add voice capabilities to your applications using Speechly.</p>
                     <p>Technology Used:- React, JavaScript, Context API and Speechly</p>
                     <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website">
                     <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                  </div>
                  
                  <div div className="col-xs-12 col-sm-12  col-md-6 col-lg-6 left ">
                        <img src={speechly} alt="prjctImg" style={{height:"385px",width:"100%"}}/>
                    </div>
                
                </div>
            
                
                
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 tracker">
                            <img src={covid2} alt="prjctImg" style={{width:"110%",height:"395px"}}/>
                     </div>
                
                    <div className="col-lg-6 col-md-6 col-sm-8 right" data-aos="fade-in" data-aos-delay="1200">
                        <h3>COVID-19 Tracker</h3>
                        <hr style={{marginBottom:"1px solid #eee",width:"60%",margin:"auto",marginTop:"-15px"}}/>
                        <p className="mt-5">The project is going to fetch the live data from the API</p>
                        <p>Technology Used:- React, React Hooks, Chart JS, Material UI and JavaScript</p>
                        <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website" style={{marginTop:"9px"}}>
                        <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                    </div>
                  
                </div>
             
     </ProjectWrapper>
            <ImgGallery/>
    </div>
    )
    
}
export default Projects
const ProjectWrapper = styled.div`
h4{
    margin-top:9rem !important;
}

h3,p{
    color:white;
    font-family: 'Alegreya Sans SC', sans-serif;
}
 h3{
 
     font-size:2.8rem;
     font-weight: 700;
 }
 .row{
     padding-top:160px
 }
 .col-lg-6{
     text-align:center;
     margin:auto
 }
 .gitBtn, .gitBtn1{
    font-size:0.9rem;
    margin-top: 2rem;
    text-align: center;
    border: none;
    background: #00AF9D;
    color:black;
    opacity: 1.5;
    display: flex;
    width:25%;
    height:25px;
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    height:auto;
    font-weight:bold
 }
  .gitBtn:hover{
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 1080px){
    .gitBtn{
        width: 30% !important ;
    }
}
@media screen and (max-width: 1015px){
    .gitBtn1{
        width: 18% !important ;
    }
}
  @media screen and (max-width: 915px){
    .gitBtn1{
        width: 20% !important ;
    }
    .gitBtn{
            width: 40% !important ;
        }
    }
 @media screen and (max-width: 767px){
    .gitBtn{
        width: 30% !important ;
    }
    .gitBtn1{
        width: 23% !important ;
    }
    
       .right{
            top: -28rem;
       }
       .shopping, .tracker{
           top:17rem;
       }
       .shopping img{
        width: 97% !important;
       }
       .left{
           top: 5rem;
           padding-bottom:8rem;
       }
       .leftInfo{
        padding-top: 165px !important;
       }
       .left img, .tracker img{
        width: 80% !important;
       }
   }
   @media  (max-width: 665px){
    .gitBtn1{
        width:26% !important ;
    }
    .gitBtn{
        width: 38% !important ;
    }
    
   @media  (max-width: 626px){
       h3{
        font-size: 2rem !important ;
       }
      .left{
        
        padding-bottom: 5rem;
    }
   }
   @media (max-width: 575px){
    .gitBtn1{
        width:35% !important ;
    }
   @media (max-width: 470px){
    .gitBtn1, .gitBtn{
        width:35% !important ;
    }
    img{
        height:289px !important;
    }
    .leftInfo{
        padding-top: 95px !important;
    }
    .right{
        top: -22rem !important;
       }
   }
   @media (max-width: 430px){
   .gitBtn1{
    width: 40% !important ;
   }
}
 @media (max-width: 376px){
      
       .leftInfo{
        padding-top: 75px !important;
       }
        
       h3{
        font-size: 2rem !important ;
       }
       .gitBtn1, .gitBtn{
            width: 50% !important ;
    }
    
   }
   `

//    

//    .card{
//         //   margin-left:-90px;
//          //background:black;
//        height: 65vh;
//        width: 50rem;
//     //   border-radius:20px;
//        display:flex;
//        justify-content: space-around;
//        transform-style:preserve-3d;
//             // align-items:center;
//        box-shadow: 0 20px 20px rgba(0,0,0), 0px 0px 50px rgba(0,0,0) ;
//     //    transition: all 0.75s ease-out;
      
//      cursor:pointer;
//      background:  #00AF9D;
//    }
  
  
//     img{
//     // transition: all 0.75s ease-out;
//     height:400px;
//     width:93%;
//     margin-top: 60px;
//     cursor:pointer;
//     transform: scale(1.1);
//     transition: .4s;
//     // margin-left: 5px;
    
//    }

// .img:hover {
//     transform: scale(1); 
//     transition: .4s;
// }
  

        