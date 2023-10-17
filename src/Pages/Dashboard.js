import React from 'react'
import './style.css';
import { MapContainer, TileLayer , Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';



// const Api URL = 'http;//wwww.    .com/apikey=';
        
function Dashboard(){

  //markers
  const markers= [
    {
      geocode:[18.9220 , 72.8347],
      popup : "hey",
    },
    {
      geocode:[18.9217, 72.8332],
      popup : "hello",
    },
    {
      geocode:[19.1973 , 72.7968],
      popup : "damn",
    },
    {
      geocode:[18.9398 , 72.8354],
      popup : "yovaimo",
    },
    // {
    //   geocode:[   ,  ],
    //   popup : "yamete"
    // }
    // {
    //   geocode:[   ,  ],
    //   popup : "konichiva"
    // }
  ]

  const customIcon = new Icon({
    // iconUrl: "placeholder.png" ,
    iconUrl: require('../img/3d-map.png') ,
    // iconUrl: "sensor(1).png" ,
    // iconUrl: "sensor.png" ,
    iconSize: [38 ,38] // size of icon
  })


  return (
    
    <div className='main1st'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary rahul mb-3">
      <div className="container-fluid container" >
        <a className="navbar-brand dashboard" href="#" >Dashboard</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active dashboard" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dashboard" href="#">Link</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div className='sensorsdata container tabledata' >
      <div className='row' >
      <div className='col-6 border rounded-2' >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
          <th scope="row">3</th>
            <td>Dange</td>
            <td>Parth</td>
            <td>@land</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='col-6 border rounded-2'>
      <MapContainer center={[18.9220 , 72.8347]} zoom={10}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />    
      {markers.map((markers ,index) =>(
        <Marker key={index} position={markers.geocode} icon={customIcon}>
          <Popup>
            <h2>{markers.popup}</h2>
          </Popup>
        </Marker>
      ))}
      </MapContainer>
      </div>
      </div>
    </div>
    
    
    </div>
    
    



  )
}
 
export default Dashboard