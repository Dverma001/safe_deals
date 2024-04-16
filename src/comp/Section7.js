import person from '../images/person.png'


export default function Section7(){
    return(
        <>
       
       <section class="what is your coustomeer said">
  <div class="maindiv">
      <div class="customer d-flex justify-content-center p-5">
          <div class="newdiv4"></div>
          <div class="ourcustomers">What Do Our Customers Say</div>
      </div>
      <div class="customerdiv row">
          <div class="DIV1 col-2">
              <button class="roundbtn"><span class="prev">&lt;</span></button>
          </div>
          <div class="DIV2 col-8">
              <div class="BOX1"></div>
              <div class="image1"><img class="img-fluid" src={person}/></div>
              <div class="content"><h4>Majority</h4><div class="LINE"></div><p>"We were so impressed with the professional and friendly service we received. The team at SafeDeals made the 
                entire home-buying process smooth and stress-free. Our apartment in Mohali is more than we could have ever hoped for."</p></div>
          </div>
          <div class="DIV3 col-2">
              <button class="roundbtn"><span class="prev">&gt;</span></button>
          </div>
      </div>
      
  </div>
  
</section>
        
 
     
        </>
    );
}