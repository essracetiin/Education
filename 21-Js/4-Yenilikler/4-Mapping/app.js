// const numbers= [4,9,16,25]
// n1 = numbers.map(function (i){
//     return i*2
// })
// console.log(n1);

// const numbers= [4,9,16,25]
// n1= numbers.map((i)=>{
//     return i*2
// })
// console.log(n1);

// const numbers= [4,9,16,25]
// n1= numbers.map(i=>i*2)
// console.log(n1);

let ogrenciler = [
    {"id":1,"ad":"Esra","soyad":"Çetin"},
    {"id":2,"ad":"Burak","soyad":"Gülmez"}
]
html = ogrenciler.map((o)=>{
    return `<li>${o.ad} ${o.soyad} </li>`
}).join("")
document.getElementById("liste").innerHTML = html