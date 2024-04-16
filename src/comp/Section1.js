import { useState } from 'react';
import img1 from '../images/naomi-hebert-MP0bgaS_d1c-unsplash.png'

export default function Section1(){

  const [toggle, setToggle] = useState(true);

    return(
        <>
       
       <section class="section1 container my-5">

<div class="flex-box1 row gap-3 justify-content--center">

  <div class="col-md-5">

    <div>
      <img class="img-fluid" src={img1}/>
    </div>

  </div>

  <div class="col-md-4">
 
      <div class="newdiv "></div><span class="about">About our Apartment</span>
   
  
      <p  class="my-5">
      Our apartments and flats are the perfect home away from home. Furnished rooms and kitchen facilities give groups and families the flexibility to enjoy downtime separately, or plan the next day’s activities over a shared meal. Often available for short and long-term.
      <span >{toggle && (
        <p>SafeDeals have been providing real estate consultancy services to buyers,</p>
      )}</span>
      </p>
 
    
      <button class=" btnnew" onClick={() => setToggle(!toggle)} > READ MORE </button>
    
  </div>


</div>


</section>

     
        </>
    );
}