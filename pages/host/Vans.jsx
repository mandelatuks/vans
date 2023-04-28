import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
  const [hostVans, setHostVans] = useState([])
  
  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      .then((data) => setHostVans(data.vans))
  },[])
    

  return (
    <div>
      <h2> Your Listed Vans </h2>
      {hostVans.map((hostVan) => {
        return (
          <div key={hostVan.id}>
            <Link to={`/host/vans/${hostVan.id}`}>
              <img src={hostVan.imageUrl} className="van-profile" />
              <div className="vans-name-price">
                <h3 className="vans-name">{hostVan.name}</h3>
                <p className="vans-price">
                  ${hostVan.price} <br></br>
                  <span>/day</span>
                </p>
              </div>
            </Link>
          </div>
        );
        })
      }

    </div>
  )
}

export default Vans;