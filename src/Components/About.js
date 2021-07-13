import React from 'react'
import myPic from '../assets/pic1.jpeg'
import styled from 'styled-components'
import Typical from 'react-typical'

export default function About() {
    const pathname= window.location.pathname;
    return (

    <div>
    
     <AboutWrapper >
        <div style={ pathname==="/about" ? {marginTop:"5rem"} : {marginTop:"29rem"} }>
        <h4 className = "text-center" id="#about"> ABOUT ME </h4> 
            <hr className = "mx-auto" />
        <div className = "container" >
         <div className = "row" >
           <div className = "col-lg-5 col-sm-12 col-xs-7" data-aos = "fade-right" data-aos-delay = "300" style={{margin: "auto"}}>
               <img src = {myPic} alt = "img" />
           </div> 
        
         <div className = " col-lg-7 col-sm-12"data-aos = "fade-left"data-aos-delay = "600" >
            <p ><strong > "</strong>I am currently working as a back-End Developer at BizBiz Share Inc.
             Montreal, with proven acumen in Web Programming and Technologies.<strong>"</strong>
              </p > 
              <br />

              <p><strong > "</strong>
              I have hands on experience in the design and development of websites using 
             various technologies like <span style= {{color: "#00AF9D",fontWeight:"bold",fontSize: "1.2rem"}}>ReactJS, JavaScript, HTML and MySQL</span>.
             I also have a good understanding of Software Development Life Cycle, Object Oriented Programming and Design. 
              <strong>"</strong>

              </p>
              <br/>
              
              <p > <strong > "</strong>
             I am a continues learner who is passionate about new technologies and seeks dynamic 
             and challenging work environment. I believe in continues improvement and mutual
              development for myself and organisation I work with.< strong>"</strong></p> 
                
         </div> 
        </div> 
        </div>
     </div>
    </AboutWrapper>
    </div>
    )
}
const AboutWrapper = styled.div `
h4{
    margin: auto;
    padding-left: 40px
}
hr{
    border-bottom: 1px solid #eee !important;
    width: 25%;
    margin: auto
}
.container{
    margin-top:5rem;
    
}
img{
    height:280px;
     width:auto;
     margin-top:2px;
     padding-left:70px;
    //  border-radius:20px
}
.col-lg-7{
    color: white;
    margin: auto
}

p{
    font-ize:1.2rem;
    color: white;
    opacity:0.8;

    // font-size:1.2rem;
    // letter-spacing:0.8px;
    // opacity:0.8
}
@media (max-width: 992px){
    .col-lg-5{
        padding-left: 10px;
    }
    .col-sm-12{
        text-align:center;
        padding-bottom:50px;
        padding-left: 47px;
    }
    .borderLine{
        width:47%;
    }
    img{
        padding-left: 10px;
    }
    .mx-auto{
        width:40% !important;
    }
}
@media (max-width: 382px){
    img{
        height:250px;
        width:280px;
        padding-left: 0px;
    }
}
`;