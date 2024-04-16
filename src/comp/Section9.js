import { Link } from "react-router-dom";



export default function Section9(){
    function subscribe(){
        alert("SUBSCRIBED!")
    
      }
    // const nameRef=useRef();
    // const emailRef=useRef();
    // const phoneRef=useRef();
    // const mesRef=useRef();
  
    // const handleSubmit=()=>{
    //   const name = nameRef.current.value;
    //   const email = emailRef.current.value;
    //   const phone = phoneRef.current.value;
    //   const mes = mesRef.current.value;
    //   window.alert(`name:${name}
    //   Email:${email}`);
        
  
    // }

    return(
        <>
       
       <section class="">
    <div class="newDiv6 touch row  text-center">
      <div class="first-child col-md-3 my-3">
          <h4>About Apartment</h4><br></br>
          <li><i class='bx bx-location-plus'></i><span class="first-span">H.No. HL426,<br></br>Sector 61,Chandigarh·</span></li>
          <li><i class='bx bx-phone'></i><span class="first-span">+11234567890</span></li>
          <li><i class='bx bx-envelope'></i><span class="first-span">info@safedeals.com</span></li>
      </div>
      <div class="second-child col-md-3 my-3">
          <h4>Information</h4><br></br>
          <p> Property maintenance<br></br> Buyer's guide<br></br>Tenant's guide<br></br>
          Owner's guide<br></br></p>
      </div>
      <div class="third-child col-md-3 my-3">
          <h4>Useful Links </h4><br></br>
         <p> Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing<br></br> elit, sed do eiusmod<br></br>
          tempor incididunt</p>
      </div>
      <div class="fourth-child  col-md-3 my-3">
          <h4>Newsletter</h4><br></br>
          <div class="form-group my-3">
            {/* <!-- <label for="formGroupExampleInput">Example label</label> --> */}
            <input type="email" class="form-control required" id="formGroupExampleInput" placeholder="Enter your Email" /><br></br >

          <button class="btn subbtn" onClick={subscribe}>SUBSCRIBE
          </button>
          <ul class="list">
              <p class="para3"><span class="first"><Link to='https://www.facebook.com/'><i class='bx bxl-facebook' ></i></Link></span><span class="second"><Link to='https://twitter.com/'><i class='bx bxl-twitter' ></i></Link></span><span class="third"><Link to='https://www.facebook.com/'><i class='bx bxl-linkedin'></i></Link></span><span class="fourth"><Link to='https://www.youtube.com/'><i class='bx bxl-youtube'></i></Link></span></p>
              </ul>
      </div>
  </div>
  </div>

  </section>
        

     
        </>
    );
}