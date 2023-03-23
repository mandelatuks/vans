import React,{useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Van() {
   const [vans, setVans] = useState([])

   useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
   }, [])

  


  return (
    <div>
      <h1 className="van-title">Explore our van options</h1>

      <div className="van-body">
        {vans.map((van) => (
            <div key={van.id} className="van">
               <Link to={`/vans/${van.id}`}>
                  <img src={van.imageUrl} className="van-profile" />
                  <div className="van-name-price">
                    <h3 className="van-name">{van.name}</h3>
                    <p className="van-price">
                      ${van.price} <br></br>
                      <span>/day</span>
                    </p>
                  </div>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        ))}
      </div>
    </div>
  );
}
