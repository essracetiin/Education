const drinks = document.getElementById("drinks")
const drinks2 = document.getElementsByClassName("list-group")
const newDrink = document.createElement("li")
newDrink.className = "list-group-item"
newDrink.appendChild(document.createTextNode("Yeşil Çay"))
drinks.appendChild(newDrink)

val = drinks
console.log(drinks)
console.log(newDrink)
console.log(drinks2)
