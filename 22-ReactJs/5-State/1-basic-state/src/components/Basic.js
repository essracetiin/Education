import React, { useState } from "react";


export default function Basic() {
  const [color , setColor] = useState("Red") //köşeli içindeki formata state denir. color değişken. setcolor ise değiştirmek için kullandığımız method. useState defaultu.

  
  const changeColor = (color) => {
      setColor(color)
  }
  
  return (
    <div>
    
    <p>My favorite color is {color}!</p>
    <button type="button" onClick={() => changeColor("blue")}>Blue</button>
    <button type="button" onClick={() => changeColor("yellow")}>Yellow</button>
    <button type="button" onClick={() => changeColor("purple")}>Purple</button>
    <button type="button" onClick={() => changeColor("green")}>Green</button>
    
    
     </div>
  )
}
