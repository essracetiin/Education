drinktable = document.querySelector(".table")
drinktable.addEvenetListener("click",log)

function log(e){
    console.log(e.target)
}

console.log(drinktable) 