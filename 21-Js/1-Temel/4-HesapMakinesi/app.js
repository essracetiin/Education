function sum() {
    print(change("n1") + change("n2")) 
}
function minus() {
    print(change("n1") - change("n2")) 
}
function multiplication() {
    print(change("n1") * change("n2")) 
}
function divide() {
    print(change("n1") / change("n2")) 
}
function change(id){
    return Number(document.getElementById(id).value)
}
function print(result){
    document.getElementById("result").innerHTML = result
}