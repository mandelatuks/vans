import React, { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";

export default function VanDetails() {

  const [vanDet, setVanDet] = useState()
  const params = useParams()
    // console.log(params);

    useEffect(() =>{

        fetch(`/api/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setVanDet(data.vans));

    }, [params.id])



  return (
    <div>
      {vanDet ? (
        <div>
          <img src={vanDet.imageUrl} />
          <i className={`van-type ${vanDet.type} selected`}>{vanDet.type}</i>
          <h2> {vanDet.name}</h2>
          <p className="van-price">
            <span>${vanDet.price}</span>/day
          </p>
          <p>{vanDet.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h3> </h3>
      )}
    </div>
  );
}
