// const listele = () => {
//     fetch("https://jsonplaceholder.typicode.com/users") 
//     .then(response => response.json) //Promise nesne..servise bağlanıp aldığı nesnenin ismine denir
//     .then(users);
//     e.preventDefault()
//     console.log(user)
//     {
//         var row ="";
//         users.forEach(user => {
//             row += '<li class="list-group-item">Kullanıcı Adı : ' + user.username + '/ Email : ' + user.email + '</li>';
//         });
//     }
// }

function listele(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) 
    .then(function(users){
        var row ="";
        users.forEach(user => {
            row += '<li class="list-group-item">Kullanıcı Adı : ' + user.username + '/ Email : ' + user.email + '</li>';
        });

        document.getElementById("ulList").innerHTML +=row
    })
    .catch((err) => console.log(err));

}
function ekle(){{
    let payload = {
        title: document.getElementById("formtitle").value,
        body: document.getElementById("formbody").value,
        userId: document.getElementById("formuserId").value
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "POST",
        body: JSON.stringify(payload),
        headers: {"Content-type":"application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(user => document.getElementById("addList").innerHTML = '<li class="list-group-item"> id: ' + user.id + ' title :' + user.title +
    ' body : ' + user.body + 'kullaniciId : ' + user.userId + '</li>')
    .catch(err=> console.log(err)); 
}}
function guncelle(){{
    let payload = {
        id: document.getElementById("formid").value,
        title: document.getElementById("formtitle").value,
        body: document.getElementById("formbody").value,
        userId: document.getElementById("formuserId").value
    }
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {"Content-type":"application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => document.getElementById("updateList").innerHTML = '<li class="list-group-item"> id: ' + json.id + ' title :' + 
    json.title + ' body : ' + json.body + 'kullaniciId : ' + json.userId + '</li>')
    .catch(err=> console.log(err)); 
}}
function sil(){{
    var e = document.getElementById("selectedUser");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].value;

    alert("Seçilen kişinin Id : " + value + " ve Adı : " + text)

    fetch('https://jsonplaceholder.typicode.com/posts'+value + '"',{
        method: "DELETE",
    })
    window.onload = function () {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())//parse json data
            .then(function (users) {
                var row = "";
                users.forEach(user => {
                    row += '<option value="' + user.id + '">' + user.username + '</option>'
                });
                document.getElementById("selectedUser").innerHTML += row;
            })
            .catch((err) => console.log(err));
    }
}}