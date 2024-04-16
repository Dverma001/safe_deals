function Section4(){
  function buynow(){
    alert("Item Added")
    

  }
    return(
        <>
       
      
       <div class="flexbox2 container ">
      <div class="row justify-content-center">

        


        <div class="text-center  col-md-4">
            <div class="top"><h2>01 <br></br>BASIC</h2></div>
            <div class="bottom d-flex flex-column justify-content-center align-items-center">
                <h2>$1000.00</h2>
                <div class="line"></div>
                <div class="bottomline"><p>Spacious 3 BHK Apartment with Amenities Living Room Basic Interior Finish Balcony Parking Space 24/7 Security</p>
                </div>
                <button class="m-5 btn-buy" onClick={buynow}>BUY NOW</button>
              </div>
              
         
        </div>
        <div class="text-center  col-md-4">
            <div class="top"><h2>02 <br></br>STANDARD</h2></div>
            <div class="bottom1 d-flex flex-column justify-content-center align-items-center">
                <h2>$2000.00</h2>
                <div class="line"></div>
                <div class="bottomline"><p>Balcony with a View
Reserved Parking
Gated Community with Basic Amenities (e.g., Gym, Clubhouse, Playground)</p>
                </div>
                <button class="m-5 btn-buy" onClick={buynow}>BUY NOW</button>
              </div>
              
         
        </div>
        <div class=" text-center  col-md-4">
            <div class="top"><h2>03 <br></br>PREMIUM</h2></div>
            <div class="bottom d-flex flex-column justify-content-center align-items-center">
                <h2>$3000.00</h2>
                <div class="line"></div>
                <div class="bottomline"><p>Spacious Living and Dining Area with High-End Finishes Private Terrace with Panoramic City Views</p>
                </div>
                <button class="m-5 btn-buy" onClick={buynow}>BUY NOW</button>
              </div>
              
         
        </div>


        
      </div>


    </div>


     
        </>
    );
}
export default Section4