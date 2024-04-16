import { Link } from 'react-router-dom';
import deborah from '../images/deborah-cortelazzi-gREquCUXQLI-unsplash.png'
import joel from '../images/joel-filipe-RFDP7_80v5A-unsplash.png'

function Section5 (){
    return(
        <>
            <section class="verygood container my-5">
      <div class="row text-center">
        
      <div class="d-flex col-md-4 ">
          <div class="new"></div>
          <div class="gooddealdiv"><span class="gooddeal">Very Good Deal For House</span>
              <p class="m-2">This apartment is strategically located in the heart of Mohali, providing easy access to essential amenities and conveniences. You'll find top schools, shopping centers, parks, and healthcare facilities within a short distance.
                  </p>
                  <Link to="/QuoteForm">
                  
                  <button class="btn2 m-5">Get a Quote</button>
                  </Link>
          </div>
      </div>
     
      <div class="new1 col-md-3">
          <img class="img-fluid" src={joel} />
      </div>
      <div class="new2 col-md-3"> 
        <img class="img-fluid" src={deborah}  />
      </div>
      </div>
    
  </section>
        </>
    );
}

export default Section5