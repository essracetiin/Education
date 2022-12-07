import React, { useState } from "react";

export default function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = (event) => {
    console.log(event.target.value);
    setCar(previousState => {
      return { ...previousState, color: event.target.value }
    });
  }

  return (

    <div>
      <h3>My {car.brand}</h3>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <input onChange={updateColor} type="text" name="color" />

    </div>
  )
}

