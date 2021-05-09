import React from 'react'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
// import gallery6 from '../assest/gallery6.jpg'
// import gallery8 from '../assest/gallery8.jpg'
// import gallery9 from '../assest/gallery9.jpg'
// import gallery10 from '../assest/gallery10.jpg'
import gallery11 from '../assets/gallery11.jpg'
// import gallery7 from '../assest/gallery7.png'
import styled from 'styled-components'

const ImgGallery = () => {
 
return (
 <ImageWrapper>
      <div className="container">

      <h3 className=" text-center">Other Noteworthy Projects</h3>
      <hr style={{borderBottom:"1px solid #eee",width:"50%",margin:"auto"}}/> 
      <div id="carouselExampleIndicators" className="carousel slide mt-5" data-ride="carousel">
           <ol className="carousel-indicators">
             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
           </ol>
       <div className="carousel-inner">
         <div className="carousel-item active hovereffect">
             <img src={gallery1} alt="Chania" style={{height:"450px",width:"80%",borderRadius:"20px"}}/>
             <div className="carousel-caption d-none d-md-block">
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                </a>
                <div className="overlay1" style={{width:"50% !important"}}>
                    <h3>E-COMMERCE WEB SHOP</h3>
                    <h7 style={{marginTop:"-50px !important"}}>REACT | JAVASCRIPT | JQUERY </h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website" style={{marginTop:"9px",width:"20%",marginBottom:"10px"}}>
                        <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                </div>
           </div>
         </div>
     
         <div className="carousel-item hovereffect">
           <img src={gallery2} alt="Chania" style={{height:"450px",width:"80%",borderRadius:"20px"}}/>
           <div className="carousel-caption d-none d-md-block">
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                </a>
                <div className="overlay">
                    <h3>TAB ASSIGNMENT</h3>
                    <h7 style={{marginTop:"-50px !important"}}>REACT |  REACT HOOKS |  JAVASCRIPT </h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website" style={{marginTop:"9px",width:"20%",marginBottom:"10px"}}>
                        <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                </div>
            </div>
         </div>
         <div className="carousel-item hovereffect">
           <img src={gallery11} alt="Chania" style={{height:"450px",width:"80%",borderRadius:"20px"}}/>
           <div className="carousel-caption d-none d-md-block">
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                </a>
                <div className="overlay">
                    <h3>ADMIN REPORT</h3>
                    <h7 style={{marginTop:"-50px !important"}}>VUEJS |  VUETIFY |  JAVASCRIPT </h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website" style={{marginTop:"9px",width:"20%",marginBottom:"10px"}}>
                        <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                </div>
            </div>
         </div>
     
         <div className="carousel-item hovereffect">
             <img src={gallery4} alt="Chania" style={{height:"450px",width:"80%",borderRadius:"20px"}}/>
             <div className="carousel-caption d-none d-md-block">
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                </a>
                <div className="overlay">
                    <h3>TRAVEL AGENCY</h3>
                    <h7 style={{marginTop:"-50px !important"}}>REACT |  JAVASCRIPT | BOOTSTRAP4 | CSS </h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website" style={{marginTop:"9px",width:"20%",marginBottom:"10px"}}>
                        <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                </div>
            </div>
        </div>
     
         <div className="carousel-item hovereffect">
             <img src={gallery3} alt="Chania" style={{height:"450px",width:"80%",borderRadius:"20px"}}/>
             <div className="carousel-caption d-none d-md-block">
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                </a>
                <div className="overlay">
                    <h3>REACT CITY TOUR</h3>
                    <h7 style={{marginTop:"-50px !important"}}>REACT |  HTML |  CSS </h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website" style={{marginTop:"9px",width:"20%",marginBottom:"10px"}}>
                        <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                </div>
           </div>
         </div>
     
         <div className="carousel-item hovereffect">
             <img src={gallery5} alt="Chania" style={{height:"450px",width:"80%",borderRadius:"20px"}}/>
             <div className="carousel-caption d-none d-md-block">
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(57, 192, 237, 0.2)"}}></div>
                </a>
                <div className="overlay">
                    <h3>REACT BLOG</h3>
                    <h7 style={{marginTop:"20px !important"}}>REACT |  HTML |  CSS </h7>
                    <a className="mx-auto gitBtn" href="https://github.com/rrajveer/Online-Shopping-Website" style={{marginTop:"9px",width:"20%",marginBottom:"10px"}}>
                        <i className="fab fa-github" style={{marginRight:"5px",marginTop:"4px",padding:"2px"}}/>
                         View on github</a>
                </div>
           </div>
         </div>
       </div>
       <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>
       </a>
       <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="sr-only">Next</span>
       </a>
    </div>
  </div>
</ImageWrapper>
       
)}

export default ImgGallery

const ImageWrapper = styled.div`
.container{
  margin-top: 9rem;
 }
.carousel-inner{
  margin:auto;
  text-align:center;
  //  margin-left:100px;
}
Carousel{
  color:red !important;
}
.List{
  margin-top:80px;
}
.Item{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 327px;
  width: 75%;
   background-color: #525252;
  border-radius:20px;
  //  box-shadow: 0 20px 20px rgba(0,0,0), 0px 0px 50px rgba(0,0,0);
  color: #fff;
  margin: 20px 20px;
}
img{
  cursor:pointer;
  position:relative;
    -webkit-transition:all .4s linear;
    opacity: 1;
   transition:all .4s linear;
    
}
 h7{
    font-size:0.8rem;
    font-weight:500;
    color:white;
    
  }
.gitBtn{
    font-size:0.9rem;
   
    margin-top: 2rem;
    text-align: center;
    border: none;
    background: #00AF9D;
    color:black;
    opacity: 1.5;
    display: flex;
    width:40%;
    height:25px;
    display: flex;
    justify-content: center;
    
  
  }
  .gitBtn:hover{
    text-decoration: none;
    color: black;
  }
.overlay1, .overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
.overlay1{
  margin-left:20px;
  width: 93%;
}
.overlay{
  width: 100%;
}

/* When you mouse over the container, fade in the overlay title */
.carousel-item:hover .overlay {
  opacity: 1;
}
.carousel-item:hover .overlay1 {
  opacity: 1;
}
.carousel-item:hover img {
  opacity: 0.3;
  }
.hovereffect:hover img {
  -ms-transform:scale(1.2);
  -webkit-transform:scale(1.2);
  transform:scale(1.2);
  }
`