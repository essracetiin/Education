// let x = [10, 20, 30]
// console.log(x)
// x.push(40)
// console.log(x);

let x = [10, 20, 30]
console.log(x)
x = [...x,50] // üç nokta demek mevcut halini koru bi de 50 ekle demek
console.log(x);

let a = [10, 20, 30,40]
a = [...a,a.filter(i=>i<20)]
console.log(a);

let b = [10,20,30,40,50]
b = b.filter(x=>x<20)
console.log(b);

personel = [];
console.log(personel);
p1 = {"id":1,"ad":"Esra"}
personel = [...personel ,p1]
console.log(personel);

ogrenciler = [
    {"id":1,"ad":"Esra"},
    {"id":2,"ad":"Burak"}
]
yogrenci = {"id":3,"ad":"Tugay"}
ogrenciler = [...ogrenciler,yogrenci]
console.log(ogrenciler);
