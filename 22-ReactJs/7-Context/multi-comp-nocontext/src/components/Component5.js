import React, { useState } from "react";

export default function Component5({ user }) {
    const [usr,setUsr] = useState(user)
    const [dsp, setDsp] = useState(false)
    function change() {
        setUsr("Esra")
        setDsp(true)
    }
  return (
    <>
      <h3>Component-5</h3>
      {dsp === true && <p>{usr}</p>}
      {dsp === false && <p>{user}</p>}
      <p>Hello {user} again</p>
      <button onClick={change} type="button">Change</button>
    </>
  );
}
