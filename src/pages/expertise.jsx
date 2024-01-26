import React from 'react'

export default function Expertise() {
  return (
    <>
      <div className="container" >
          
          <h3><br/><br/><b>-----|My Expertise</b></h3>
          
          <br/>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                  <img   className="img-fluid d-block mx-auto" src="productDesign.png" width="100" />
                <div className="card-body">
                  <h5 className="card-title">Product Design</h5>
                   <p className="card-text"> we specialize in delivering comprehensive product design services that elevate businesses to new heights of market distinctionWe help our clients to  create products that delight customers by defining product and business goals.
                    </p>
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                  <img className="img-fluid d-block mx-auto" src="webDesign.png" width="100" />
                <div className="card-body">
                  <h5 className="card-title">Web Designing</h5>
                   <p className="card-text">Elevate your online presence with our bespoke web design services. We craft visually stunning and user-friendly websites tailored to your brand, ensuring a seamless digital experience that captivates and engages your audience.
                    </p><br/>
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 ">
              <div className="card">
                  <img className="img-fluid d-block mx-auto" src="brandDesign.png" width="100"  />
                <div className="card-body">
                  <h5 className="card-title">Branding & Logo</h5>
                   <p className="card-text"> Unlock the essence of your brand with our expert logo and branding services. We specialize in creating distinctive visual identities that resonate, leaving a lasting impression and setting your business apart in the competitive landscape
                    </p>
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
         </div>
        </div>
    </>
  )
}