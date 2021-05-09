import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import NewContact from './Components/NewContact'
import Education from './Components/Education'
import NewExp from './Components/NewExp';
import Services from './Components/Services';
import Projects from './Components/Projects';
//import Project from './Components/Project';
import Skills from './Components/Skills';
import ImgGallery from './Components/ImgGallery';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components';



export default class App extends Component {
     state ={
      showMenu:false,
      className:"",
      barStartClass:"",
      barEndClass:""
    }
  openMenu = () =>{
    console.log("Onclick Called")
    this.setState(
      {showMenu: !this.state.showMenu,
       className:"menu-toggler open",
       barStartClass:"bar half start open",
       barEndClass:"bar half end open"}
    )

  }
 
 render() {
    AOS.init({
      easing:'ease',
      duration:1800
    })

    return (
      <Router>
      <div className="App">

      <NavWrapper className=" cd-top" id="toTopBtn">
            <nav className="navbar fixed-top" style={{backgroundColor:""}}>
            <div className={(this.state.showMenu) ? this.state.className: "menu-toggler"} onClick={this.openMenu}>
                
                <div className={(this.state.showMenu)? this.state.barStartClass:"bar half start"}></div>
                <div className="bar"></div>
                <div className={(this.state.showMenu)? this.state.barEndClass:"bar half end"}></div>

            </div>
           { this.state.showMenu ?
                
            <nav className="top-nav">
                <ul className="nav-list" >
                    <li>
                        <a href="/" className="nav-link" style={{fontFamily:"Pacifico, cursive !important"}}>Home</a>
                    </li>
                    <li>
                        <a href="/about" className="nav-link">AboutMe</a>
                    </li>
                    <li>
                        <a href="/education" className="nav-link">Education</a>
                    </li>
                    <li>
                        <a href="/experience" className="nav-link">Experience</a>
                    </li>
                    <li>
                        <a href="/projects" className="nav-link">Projects</a>
                    </li>
                    <li>
                        <a href="/contact" className="nav-link">ContactME</a>
                    </li>
                </ul>

            </nav>
            : ""
          } 
            </nav> 
        </NavWrapper>




      {/* <Home 
        showMenu={this.state.showMenu}
        openMenu={this.openMenu}
        className={this.state.className}
        barStartClass={this.state.barStartClass}
        barEndClass={this.state.barEndClass}/> */}

       
     <Switch>
       <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/education">
            <Education/>
            </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/projects">
             <Projects/>
            </Route>
          <Route exact path="/experience">
             <NewExp/>
          </Route>
          <Route exact path="/serivices">
              <Services/>
            </Route>
          <Route exact path="/contact">
             <NewContact/>
          </Route>
     </Switch>
      </div>
    </Router>
    )
  }
}

const NavWrapper = styled.div`
.navbar{
    height:3.5rem;
    background: #434343;
}
.scroll {
    color: #fff;
    margin-top: 100px
}

#toTopBtn {
    position: fixed;
    bottom: 26px;
    right: 39px;
    z-index: 98;
    padding: 21px;
    background-color: hsla(5, 76%, 62%, .8)
}
.cd-top {
    position: fixed;
    bottom: 20px;
    bottom: var(--cd-back-to-top-margin);
    right: 20px;
    right: var(--cd-back-to-top-margin);
    display: inline-block;
    height: 40px;
    height: var(--cd-back-to-top-size);
    width: 40px;
    width: var(--cd-back-to-top-size);
    box-shadow: 0 0 10px rgba(0, 0, 0, .05) !important;
    background: url(https://res.cloudinary.com/dxfq3iotg/image/upload/v1571057658/cd-top-arrow.svg) no-repeat center 50%;
    background-color: hsla(5, 76%, 62%, .8);
    background-color: hsla(var(--cd-color-3-h), var(--cd-color-3-s), var(--cd-color-3-l), 0.8)
}




@media (max-width: 755px){
    .nav-link{
        font-size: 1.2rem;
    }
}
@media (max-width: 641px){
    .nav-list {
        top: -42px;
        margin-left: 35%;
        list-style: none;
         display: block;
    }
}
@media (max-width: 455px){
    .nav-list {
       margin-left: 29%;
    }
}
@media (max-width: 360px){
    .nav-list {
       margin-left: 22%;
    }
}
`