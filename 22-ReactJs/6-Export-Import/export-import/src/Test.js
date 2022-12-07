import React from 'react'

export default function Test() {
  return (
    <div>Test</div>
  )
}
function f1() {
    console.log("f1");
}
const f2=()=> {
    console.log("f2");
}
export {f1,f2}