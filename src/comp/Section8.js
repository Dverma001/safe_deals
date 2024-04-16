import {useRef} from "react";

export default function Section8(){
  const nameRef=useRef();
  const emailRef=useRef();
  const phoneRef=useRef();
  const mesRef=useRef();

  const handleSubmit=()=>{
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const mes = mesRef.current.value;
    window.alert(`Your message has been sent!
    Name:${name}
    Email:${email}
    PhoneNumber:${phone}
    message:${mes}
    Happy Interaction!!`);

  }
    return(
        <>
        <section class="getIntouch">
    <div class="customer d-flex justify-content-center p-5">
      <div class="newdiv4"></div>
      <div class="ourcustomers">Get in touch</div>
  </div>
  
  <div class="row touch areeeyaar">
  

    <div class="col-md-6 map ">
      <iframe class="img-fluid" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27385.44479601821!2d75.862116!3d30.9095757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a839ecf1964b9%3A0x4eeeb1c005de15b3!2sClock%20Tower!5e0!3m2!1sen!2sin!4v1696600255948!5m2!1sen!2sin"  >
      </iframe>
    </div>
    <div class="col-md-5 my-5">
      
        <form >
          <div class="form-group my-3">
            {/* <!-- <label for="formGroupExampleInput">Example label</label> --> */}
            <input type="text" ref={nameRef} class="form-control" id="formGroupExampleInput" placeholder="Name"/>
          </div>
          <div class="form-group my-3">
            {/* <!-- <label for="formGroupExampleInput2">Another label</label> --> */}
            <input type="email" ref={emailRef} class="form-control" id="formGroupExampleInput2"  placeholder="Email"/>
          </div>
          <div class="form-group my-3">
            {/* <!-- <label for="formGroupExampleInput2">Another label</label> --> */}
            {/* <input type="number"  ref = {phoneRef} class="form-control" id="formGroupExampleInput2" placeholder="Phone Number" pattern="[789][0-9]{9} required  " /> */}
            <input type="text"  ref = {phoneRef} class="form-control" id="formGroupExampleInput2" placeholder="Phone Number"  />
          </div>
          {/* <div class="form-group my-3">
  <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="Phone Number" pattern="[789][0-9]{9}" required />
  <div class="error-message" id="phone-error"></div>
</div> */}
          <div class="form-group my-3">
            {/* <!-- <label for="formGroupExampleInput2">Another label</label> --> */}
            <textarea type="text" ref={mesRef} class="form-control" id="formGroupExampleInput2" placeholder="Message"></textarea>
          </div>
          <button onClick={handleSubmit} type="button" class="btn btn-warning m-4">SEND</button>
        </form>
      
    </div>

  </div>
  
  </section>
      
        
 
        </>
    );
}