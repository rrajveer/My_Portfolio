import React, { useState, useEffect } from 'react'
import Typist from 'react-typist';
import ScrollUpButton from 'react-scroll-up-button'
import { Link } from 'react-router-dom'
import About from './About'
import Education from './Education'
import NewExp from './NewExp'
import Projects from './Projects'
import Services from './Services'
import NewContact from './NewContact'
import Typical from 'react-typical'
import styled from 'styled-components'

export default function Home({showMenu,openMenu,className,barStartClass,barEndClass}) { 
    const [count, setCount] = useState(1);
    useEffect(() => {
      console.log("Count: " + count);
      setCount(1);
    }, [count]);
   
  return (
      <div> 
            <div className="title text-capitalize">
               <h1 className="mt-5">rajveer kour</h1>
                      <h6 style={{ fontFamily:"Alegreya Sans SC, sans-serif",fontSize:"1.3rem",opacity:0.7,color:"#00AF9D",marginTop: "-14px",marginLeft: "21px"}}>
                      {count ? (
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
          <span> UI Designer</span>
          <Typist.Backspace count={20} delay={800} />
          <span>Web Developer</span>
          <Typist.Backspace count={20} delay={800} />
          <span>UX Designer</span>
        </Typist>
      ) : (
        ""
      )}
                      {/* <Typical 
                       steps={['UI Designer',1000,'Web Developer',1000,'UX Designer',500]}
                       loop={Infinity}
                       wrapper='b'
                     /> */}
        </h6>
    </div>
            
                  <About/>
                  <Education/>
                  <NewExp/>
                  <Projects/>
                  <Services/>
                  <NewContact/>
             <Footer>
                 <div style={{marginTop:"7rem"}}>
                  <footer className="copyright">
                      <ScrollUpButton 
                       AnimationDuration={2000} 
                      />
                    <p>&copy; 2020 Rajveer Kour</p>
                  </footer>
                  </div>
                  </Footer>
            </div>
       
    
        
        
    );
    
}
const Footer = styled.div`
.copyright{
    width:100%;
    text-align:center;
    background-color: #434343;
    height:3.5rem;
    position:relative;
}
.up{
    position:absolute;
    width:3rem;
    height:2.8rem;
    background-color:#00AF9D;
    display:flex;
    // top:-2.5rem;
    right:5rem;
    border-radius:100%;
    margin-top:15px;
    cursor:pointer;
    transition: background-color .3s, 

}

.up i{
    color: #eee;
    font-size:2rem;
    margin:auto;
    cursor:pointer;
}
.copyright p{
    font-size: 1.4rem;
    color:#eee;
    opacity:0.8;
    padding-top:10px
}
.up:hover{
    background-color: #eee;
    cursor:pointer;
}
.up:hover i{
    color:#00AF9D;
}
 i:hover{
    color:#00AF9D;
}
.up i:hover .up{
    background-color: #eee;

}
`
