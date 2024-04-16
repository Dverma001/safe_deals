import address1 from '../images/address1.png'
import contact1 from '../images/contact1.png'
import employee1 from '../images/employee1.png'
import money2 from '../images/money2.png'



export default function Section6(){
    return(
        <>
       
       <section class="why choose us text-center ">
    <div class="newDiv container">
        <div class="flex2 row">
            {/* <!-- <div class="new3"></div> --> */}
            <div class="why">Why Choose Us?</div>
        </div>

        <div class="icons row ">
            <div class="icon col-md-3"><img class="img-fluid" src={address1} /><p class="para"><span class="para1">1000+</span><br></br><span class="paraaa">Years of House</span></p>
            </div>

            <div class="icon col-md-3"><img class="img-fluid" src={contact1} /><p  class="para"><span class="para1">20000+ </span><br></br><span class="paraaa1">Projects Delivered</span></p>
            </div>

            <div class="icon col-md-3"><img class="img-fluid" src={employee1}/><p class="para"><span class="para1">10000+</span><br></br><span class="para2"> Satisfied Customers</span></p>
            </div>

            
            <div class="icon col-md-3"><img class="img-fluid" src={money2}/><p class="para"><span class="para1">1500+</span> <br></br> <span class="para2">Cheap Rates</span></p>
            </div>
            
          </div>
          <button class="btn1 m-3 getbtn">Get a Quote</button>

     
    </div>
</section>
        
  
     
        </>
    );
}