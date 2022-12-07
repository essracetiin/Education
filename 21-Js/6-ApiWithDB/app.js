document.addEventListener("DOMContentLoaded",list)

const url = "https://localhost:7080/";

function list() {
    console.log(url);
    fetch(`${url}City/GetCities`)
    .then(response => response.json())
    .then(cities => {
        console.log(cities)
        var html = cities.map(c=>{  // c=> function.. map sayesinde foreach e gerek kalmadı.
            return(`<tr>
                        <td>${c.id}</td>
                        <td>${c.name}</td>
                        <td><a href="" class="btn btn-danger" onclick="del(${c.id})">Sil</a></td>
                        <td><a href="update.html" class="btn btn-success">Güncelle</a></td>
                    </tr>`)
        }).join("")
        document.getElementById("cities").innerHTML = html
        
    })
    .catch((err)=> console.log(error))
}

function add(){
    let payload = {
        name: document.getElementById("name").value
    }
    fetch(`${url}City/Add`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-type": "application/json charset=UTF=8"}
    })
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp);
        document.getElementById("msg").innerHTML = rsp.msg
    })
    
}

function del(id) {
 
    fetch(`${url}City/DeletebyId/${id}`,{
        method : 'DELETE',
        // body: JSON.stringify(payload),
        // headers: { "Content-type" : "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp);
            document.getElementById("msg").innerHTML = rsp.msg
    })
}
function updt(id) {
    let payload = {
        name: document.getElementById("name").value
    }
    fetch(`${url}City/Update`,{
        method : 'PUT',
         body: JSON.stringify(payload),
         headers: { "Content-type" : "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp);
            document.getElementById("msg").innerHTML = rsp.msg
    })
}
