import React from 'react'

export default function ContactUs() {
  return (
<>
<div className="container">
    <br/> <br/>
    <div className="row">
      <div className="col-md-4 mb-4">
      <i class="bi bi-facebook"></i>
      <br/> <br/><br/> <br/><br/><br/><br/><br/>
      
        <img className="img-fluid d-block mx-auto" src="contactUs.jpg" width="350" hight="200"/>
       
      </div>
      
      
      <div className="col-md-8 mb-4">
        <h2><b>***Hire Me!</b></h2> <br/>
        <h6>I am available for freelancing work. Please connect with me </h6><br/>
        <h6>via phone: +92 347 9371007 or email: mahmoodali.digitalworld@gmail.com</h6> <br/>

        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Write Your Query</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button type="button" className="btn btn-primary">Sumbit</button>


      
      </div>
    
    </div>


</div>


</>

  )
}