// import img1 from '../images/naomi-hebert-MP0bgaS_d1c-unsplash.png'
import { useState } from 'react'
import img from '../images/img.png'
import jarekceborskijn7uVeCdf6Uunsplash from '../images/jarek-ceborski-jn7uVeCdf6U-unsplash.png'
import naomi from '../images/naomi-hebert-2dcYhvbHV-M-unsplash.png'
import joel from '../images/joel-filipe-RFDP7_80v5A-unsplash.png'
import deborah from '../images/deborah-cortelazzi-gREquCUXQLI-unsplash.png'
import michal from '../images/michal-kubalczyk-bCNzxvvbF_U-unsplash.png'



export default function Section2(){

  const [toggle, setToggle] = useState(true);
    return(
        <>
       
      
    <section class="houseforsale container">
      <div class="house_for_sale row ">
      
        
            <div class="col-md-12 text-center">

              <span class="sale">House for sale</span>
              <p id="paragraph"><h4>Find a home you'll <i>love.</i></h4></p>
            </div>
         
          
      </div>
      <div class="flexes row text-center">
          <div class="flex col-md-4"><img class="img-fluid" src={img} /><p><h5>Emaar The views</h5> 4 bed, 4 bath, 2140 sqft, Manak Majra Sector 105,Mohali<h6>$6400-$123000</h6></p></div>
          <div class="flex col-md-4"><img class="img-fluid" src={jarekceborskijn7uVeCdf6Uunsplash} /><p><h5>Pearls Pride</h5> 2 bed, 2 bath, 872 sqft,  Sector 105,Mohali<h6>$5800</h6></p></div>
          <div class="flex col-md-4"><img class="img-fluid" src={naomi} /><p><h5>Milleneum Court</h5> 4 bed, 4 bath, 2600 sqft, Mohali Hills Sector 100,Mohali<h6>$6100</h6></p></div>
          <div class="flex col-md-4"><img class="img-fluid" src={joel} /><p><h5>Emerging Villas</h5> 3-4 bed 1800 sqft, Landran Road,Mohali<h6>$12300</h6></p></div>
          <div class="flex col-md-4"><img class="img-fluid" src={deborah} /><p><h5>The Terraces Premier</h5> 4 bed, 4 bath, 2140 sqft, Manak Majra Sector 105,Mohali<h6>$6800</h6></p></div>
          <div class="flex col-md-4"><img class="img-fluid" src={michal} /><p><h5>Emaar The views</h5> 2 bed, 2 bath, 964 sqft, Mohali Hills sector 100,Mohali<h6>$6400</h6></p></div>
      </div>
      <span >{toggle && (
         <div class="flexes row text-center">
         <div class="flex col-md-4"><img class="img-fluid" src={img} /><p><h5>Emaar The views</h5> 4 bed, 4 bath, 2140 sqft, Manak Majra Sector 105,Mohali<h6>$6400-$123000</h6></p></div>
         <div class="flex col-md-4"><img class="img-fluid" src={jarekceborskijn7uVeCdf6Uunsplash} /><p><h5>Pearls Pride</h5> 2 bed, 2 bath, 872 sqft,  Sector 105,Mohali<h6>$5800</h6></p></div>
         <div class="flex col-md-4"><img class="img-fluid" src={naomi} /><p><h5>Milleneum Court</h5> 4 bed, 4 bath, 2600 sqft, Mohali Hills Sector 100,Mohali<h6>$6100</h6></p></div>
         
     </div>
      )}</span>
      

     <div class="row text-center">

       <div class="findmore"  onClick={() => setToggle(!toggle)} ><button>FIND MORE</button></div>
     </div>
  </section>

     
        </>
    );
}