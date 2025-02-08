import React from 'react'
import { Link } from 'react-router-dom'


function Categories() {
   
  return (
    <div className='navbar container d-flex justify-content-around py-2 align-items-center' width="70%">
        <Link to="/" width="70%" > 
        <div className="dropdown d-flex flex-column justify-content-center align-items-center">
        <img width="70%" height="70%" src="https://img.icons8.com/plasticine/100/mens-hoodie--v1.png" alt="mens-hoodie--v1"/>
            <button width="70%" height="70%" className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Men's
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" >Action</Link></li>
                <li><Link className="dropdown-item" >Another action</Link></li>
                <li><Link className="dropdown-item" >Something else here</Link></li>
            </ul>
            </div>
      </Link>
      <Link to="/" width="70%" > 
      <div className="dropdown d-flex flex-column justify-content-center align-items-center">
      <img width="70%" height="70%" src="https://img.icons8.com/plasticine/100/womens-t-shirt.png" alt="womens-t-shirt"/>
            <button  width="70%" height="70%" className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Women's
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" >Action</Link></li>
                <li><Link className="dropdown-item" >Another action</Link></li>
                <li><Link className="dropdown-item" >Something else here</Link></li>
            </ul>
            </div>
      </Link>
      <Link to="/" width="70%"  > <div className="dropdown d-flex flex-column align-items-center">
      <img width="70%" height="70%" src="https://img.icons8.com/fluency/48/laptop.png" alt="laptop"/>
            <button width="70%" height="70%" className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Electronics
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" >Action</Link></li>
                <li><Link className="dropdown-item" >Another action</Link></li>
                <li><Link className="dropdown-item" >Something else here</Link></li>
            </ul>
            </div>
      </Link>
      <Link to="/" width="70%" > <div className="dropdown d-flex flex-column align-items-center">
      <img width="70%" height="70%" src="https://img.icons8.com/color-glass/48/appliances.png" alt="appliances"/>
            <button width="70%" height="70%" className="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Appliances
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" >Action</Link></li>
                <li><Link className="dropdown-item" >Another action</Link></li>
                <li><Link className="dropdown-item" >Something else here</Link></li>
            </ul>
            </div>
      </Link>
      <Link to="/" width="70%" > <div className="dropdown d-flex flex-column align-items-center">
      <img width="70%" height="70%" src="https://img.icons8.com/pulsar-color/48/makeup.png" alt="makeup"/>
            <button width="70%" height="70%" className="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Beuty
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" >Action</Link></li>
                <li><Link className="dropdown-item" >Another action</Link></li>
                <li><Link className="dropdown-item" >Something else here</Link></li>
            </ul>
            </div>
      </Link>
      <Link to="/" width="70%"  > <div className="dropdown d-flex flex-column align-items-center">
      <img width="70%" height="70%" src="https://img.icons8.com/emoji/48/teddy-bear-.png" alt="teddy-bear-"/>
            <button width="70%" height="70%" className="btn btn-outline-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Toys & more..
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" >Action</Link></li>
                <li><Link className="dropdown-item" >Another action</Link></li>
                <li><Link className="dropdown-item" >Something else here</Link></li>
            </ul>
            </div>
      </Link>
      
    </div>
  )
}

export default Categories