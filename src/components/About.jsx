import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={process.env.PUBLIC_URL+'/mypic.jpg'} className='card-img-top' alt="..." />
          <div className="card-body">
            <h4 className="card-title">Student</h4>
            <p>Jirayu Kasemsuk (600612149)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
