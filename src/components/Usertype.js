import React, { useState } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router'

const Register = (props) => {

  let history = useHistory();
  const [usertype, setusertype] = useState(['Select','Fashion Designer','Fabric Dealer', 'Customer'])



  const Forgot = () => {
      history.push("/Forgot");
  }


  const handlechange = (e) => {
        sessionStorage.setItem("ust",e.target.value);
       history.push("/userlogin");
  }



  return (
    <Container>
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <h2 class="inactive underlineHover">Authorization</h2>
            <div class="fadeIn first">
               <img src="./images/user.svg"  alt="User Icon" />
            </div>
            
            <form>
              <select  onChange={handlechange}>
                {usertype.map((v,i) => <option>{v}</option> )} 
                </select>
            </form>

        </div>
        </div>
    </Container>
  )

}


const Container = styled.div`
background-color: #FFAA00;
font-family: "Poppins", sans-serif;
height: 100vh;


a {
color:#FF5D16;;
display:inline-block;
text-decoration: none;
font-weight: 400;
}

h2 {
text-align: center;
font-size: 16px;
font-weight: 600;
text-transform: uppercase;
display:inline-block;
margin: 40px 8px 10px 8px; 
color: #cccccc;
}



/* STRUCTURE */

.wrapper {
display: flex;
align-items: center;
flex-direction: column; 
justify-content: center;
width: 100%;
min-height: 100%;
padding: 20px;

select{
padding:10px;
border-radius:10px;
border:none;
margin:20px;
}
}

#formContent {
-webkit-border-radius: 10px 10px 10px 10px;
border-radius: 10px 10px 10px 10px;
background: #fff;
padding: 30px;
width: 90%;
max-width: 450px;
position: relative;
padding: 0px;
-webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
text-align: center;
}



/* TABS */

h2.inactive {
color: #cccccc;
}

h2.active {
color: #0d0d0d;
border-bottom: 2px solid #5fbae9;
}




/* ANIMATIONS */
/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
-webkit-animation-name: fadeInDown;
animation-name: fadeInDown;
-webkit-animation-duration: 1s;
animation-duration: 1s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
0% {
opacity: 0;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
100% {
opacity: 1;
-webkit-transform: none;
transform: none;
}
}

@keyframes fadeInDown {
0% {
opacity: 0;
-webkit-transform: translate3d(0, -100%, 0);
transform: translate3d(0, -100%, 0);
}
100% {
opacity: 1;
-webkit-transform: none;
transform: none;
}
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
opacity:0;
-webkit-animation:fadeIn ease-in 1;
-moz-animation:fadeIn ease-in 1;
animation:fadeIn ease-in 1;

-webkit-animation-fill-mode:forwards;
-moz-animation-fill-mode:forwards;
animation-fill-mode:forwards;

-webkit-animation-duration:1s;
-moz-animation-duration:1s;
animation-duration:1s;


img{
width: 40px;
height: 40px;
border-radius:100px;
}
}

.fadeIn.first {
-webkit-animation-delay: 0.4s;
-moz-animation-delay: 0.4s;
animation-delay: 0.4s;
}

.fadeIn.second {
-webkit-animation-delay: 0.6s;
-moz-animation-delay: 0.6s;
animation-delay: 0.6s;
}

.fadeIn.third {
-webkit-animation-delay: 0.8s;
-moz-animation-delay: 0.8s;
animation-delay: 0.8s;
}

.fadeIn.fourth {
-webkit-animation-delay: 1s;
-moz-animation-delay: 1s;
animation-delay: 1s;
}



/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
display: block;
left: 0;
bottom: -10px;
width: 0;
height: 2px;
background-color: #FF5D16;
content: "";
transition: width 0.2s;
}

.underlineHover:hover {
color: #FF5D16;
}

.underlineHover:hover:after{
width: 100%;
}

*:focus {
outline: none;
} 

*{
box-sizing: border-box;
}
`;



export default Register