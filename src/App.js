import { useState } from 'react';
import './App.css';
import img1 from '../src/images/img1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Nav from './comp/Nav';
// import LoginForm from './comp/LoginForm';
// import SignupForm from './comp/SignupForm';
// import QuoteForm from './comp/QuoteForm';
import Section1 from './comp/Section1';
import Section2 from './comp/Section2';
import Section3 from './comp/Section3';
import Section4 from './comp/Section4';
import Section5 from './comp/Section5';
import Section6 from './comp/Section6';
import Section7 from './comp/Section7';
import Section8 from './comp/Section8';
import Section9 from './comp/Section9';

import LoginForm from './comp/LoginForm';
import SignupForm from './comp/SignupForm';
import QuoteForm from './comp/QuoteForm';
function App() {
  
  const [toggle, setToggle] = useState(true);


  return (
   <>
   <div className='container-fluid'>


   <BrowserRouter>
   <Routes><Route exact path="/"
   element={<><Nav/><div className="row banner justify-content-center  ">
   <div className="box1  col-md-6 p-5 my-5 ml-5">
     <div className="apartment_house mx-5">
      <h1>Modern<br></br> <span className="house">Apartment House</span></h1> 
     </div>
     <p className="txt mx-5">Well known and respected, SafeDeals have been providing real estate consultancy services to buyers, sellers, landlords and tenants, local and international clientele for 14 years...
      <span >{toggle && (
        <p>SafeDeals have been providing real estate consultancy services to buyers,</p>
      )}</span>
     </p>
     
     <div className="readmorebtn mx-5">
       {/* <button className="btnnew" onClick={() => setShow(!show) }>READ MORE</button> */}
       <div>
       <button class=" btnnew" onClick={() => setToggle(!toggle)} > READ MORE </button>
      


        </div>
     </div>
   </div>
   <div className="box2 col-md-6">
     <div className="op">
       <img
         className="img-fluid"
         src={img1}
         alt=""
       />
     </div>
   </div>
 </div>

 <div className="row search justify-content-center my-3 searchdiv" >
   <div className="col-md-9 flex-box  ">

     <form>
       <div className="row ">
         <div className="col my-3">
           <input type="text" className="form-control" placeholder="Search your categories"/>
         </div>
         <div className="col my-3">
           <input type="text" className="form-control" placeholder="Location"/>
         </div>
         <div className="col">
           <button type="button" className="subbtn">SEARCH</button>
         </div>

       </div> 
     </form>
   </div>
</div>
   <Section1/>
  <Section2/>
  <Section3/>
  <Section4 />
  <Section5/>
  <Section6/>
  <Section7/>
  <Section8/>
  <Section9/></>}
   >
    </Route>
    <Route exact path="/login" element={<><Nav /><LoginForm /></>}></Route>
    <Route exact path="/signUp" element={<><Nav /><SignupForm /></>}></Route>
    <Route exact path="/section" element={<><Nav /><Section8 /></>}></Route>
    <Route exact path="/QuoteForm" element={<><Nav /><QuoteForm /></>}></Route>
    </Routes></BrowserRouter>
   
    </div>
   
   </>
  );
}

export default App;
