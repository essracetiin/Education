const sum = () =>print(change("n1") + change("n2")) 
    

const minus=()=> print(change("n1") - change("n2")) 
    

const multiplication=() => print(change("n1") * change("n2")) 
   

const divide=()=> print(change("n1") / change("n2")) 
    

const change=(id)=>Number(document.getElementById(id).value)

const print=(result)=>document.getElementById("result").innerHTML = result
    
console.log(object);


