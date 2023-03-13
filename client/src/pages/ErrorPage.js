import React from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
function ErrorPage() {
  return (
    <div>
    <div className="d-flex flex-column flex-root" id="kt_app_root">
 
    
    <div className="d-flex flex-column flex-center flex-column-fluid">
 
        <div className="d-flex flex-column flex-center text-center p-10">
          
            <div className="card card-flush w-lg-650px py-5">
                <div className="card-body py-15 py-lg-20">
                
                    <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
               
                    <div className="fw-semibold fs-6 text-gray-500 mb-7">We can't find that page.</div>
                  
                    <div className="mb-3">
                    <SVG src={toAbsoluteUrl("/img/404-error-dark.png")} />
                      </div>
                 
                    <div className="mb-0">
                      <Link to={'/'} ><button className="btn btn-sm btn-primary"  >Return Home</button></Link> 
                    </div>
               
                </div>
            </div>
         
        </div>
  
    </div>
    
</div>
    </div>
  )
}

export default ErrorPage
