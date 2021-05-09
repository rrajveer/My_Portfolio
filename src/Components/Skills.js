import React from 'react'
import styled from 'styled-components'
export default function Skills() {
    return (
        <SkillWrapper>
        <div className="container skillss">
            <h4 className="text-center text-uppercase mt-5">Skills</h4>
            <hr style={{ width:"24%" }}/> 
            <div className="container">
            <div className="row" >
            <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="300">
                    <div className="icons-container">
                       <i className="far fa-file-code"/>
                   </div>
                    <h5>Development</h5>
                      <hr/>
                    <ul>
                        <li>react</li>
                        <li>react Native</li>
                        <li>vue</li>
                        <li>javaScript</li>
                        <li>html5</li>
                        <li>php</li>
                        <li>CSS3</li>
                        <li>bootStrap</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="1000">
                    <div className="icons-container">
                    <i className="fas fa-database icon-4x"/>
                    </div>
                    <h5 >DataBase</h5>
                      <hr/>
                    <ul>
                        <li>sqlLite</li>
                        <li>mangoDB</li>
                        <li>sql</li>
                        <li>mySql</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="1000">
                    <div className="icons-container">
                    <i className="fas fa-code-branch"/>
                    </div>
                    <h5>Version Control</h5>
                        <hr/>
                    <ul>
                    <li>Git</li>
                        <li>gitHub</li>
                        <li>GitLab</li>
                        <li>bitBucket</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-delay="300">
                    <div className="icons-container">
                    <i className="fas fa-tasks"></i>
                    </div>
                    <h5>Task Management</h5>
                        <hr/>
                    <ul>
                        <li>trello</li>
                        <li>scrum</li>
                        <li>jira</li>
                    </ul>
                </div>
               </div>
            </div>
        </div>
        </SkillWrapper>
    )
}
const SkillWrapper = styled.div`
.container{
        padding-top: 5rem
}

.col-lg-3{
    padding-left:60px
}
.icons-container i{
    display: flex;
    justify-content: center;
  
  }
i{
    font-size: 2.5rem;
    color: #00AF9D
}
h5{
    color:white;
    text-align:center;
    letter-spacing:0.1rem ;
    opacity: 0.9;
}
hr{
    border-bottom:1px solid #eee;
        width:80%;
        margin:auto;
        margin-top:-2px
}
 ul{
    list-style: none;
    justify-content: start;
    margin-top: 0px;
    margin-right: 40px;
    
  }
   li{
    text-align: center;
    text-transform: capitalize;
    color:white;
    opacity:0.8;
    font-size:0.9rem;
    
  }
@media (max-width: 1200px){
    h5{
        font-size:1rem
    }
}
@media (max-width: 1200px){
    h5{
        font-size:0.8rem
    }
    .col-lg-3{
        padding-left:0px
    }
}
@media (max-width: 768px){
    hr{
        width:40%
    }
    h5{
        font-size: 1rem
    }
    i{
        padding-top:50px
    }
    .container{
        padding-top:0px
    }
}
`