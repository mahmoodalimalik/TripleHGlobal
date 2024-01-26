import React from 'react'

export default function MyProjects() {
  return (
    <>
      <div className="container">
          
          <h3><br/><br/><b>-----|My Projects</b></h3>
          
          <br/>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                  <img className="img-fluid d-block mx-auto" src="Sproject.jpg" width="200" hight="200" />
                <div className="card-body">
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                  <img className="img-fluid d-block mx-auto" src="Sproject.jpg" width="200" hight="200" />
                <div className="card-body">
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-3">
              <div className="card">
                  <img className="img-fluid d-block mx-auto" src="Sproject.jpg" width="200" hight="200" />
                <div className="card-body">
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
         </div>
        </div>
    </>
  )
}