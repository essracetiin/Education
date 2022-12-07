// const drinkform = document.getElementById("drinkform")
// drinkform.addEventListener("submit",submitForm)   ===>form elementine onsubmit yazmadığımızda bunu yapabiliriz
function submitForm(e){
    console.log(e.target)
    console.log("Form submitted")
    e.preventDefault(); //refreshten kurtulmak istiyosak bunu yazıyoruz.
}