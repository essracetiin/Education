const cars = ["BMW", "Volvo", "Mercedes", "Ford", "Honda", "Audi"];
setTimeout(() => {
    document.getElementById("date").innerHTML = new Date()
}, 5000);

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += "<li>" + cars[i] + "</li>";
    console.log(cars[i])
    console.log(text)
}
function getCars() {
    document.getElementById("cars").innerHTML = text
}
function toggle() {
    var div = document.getElementById("cars")
    if (div.style.display === 'none') {
        div.style.display = 'block'
    } else {
        div.style.display = 'none'
    }
}