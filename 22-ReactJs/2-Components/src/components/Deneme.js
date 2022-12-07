
 const Deneme = () => {
let baslik = "Personel Listesi";
let pList = [
    {"id" : 1 , "ad" : "Şamil", "Soyad: " : "Yılmaz" },
    {"id" : 2 , "ad" : "Selen", "Soyad: " : "Yılmaz" },

]

var html = pList.map(p=> {
    return(<tr>
        <td>
            {p.id}
        </td>
        <td>
            {p.ad}
        </td>
        <td>
            {p.Soyad}
        </td>
    </tr>)
})
  return (
    <>
        <h3>Deneme</h3>
        <p>{baslik}</p>
        <hr />
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Ad</th>
                    <th>Soyad</th>
                </tr>
            </thead>
            <tbody>
              {html}
            </tbody>
        </table>
     
    </>
  )
}
export default Deneme