import Products from "./components/Products";
let baslik = "Product List"
let plist = [
  {"id": 1,"name":"Kola"},
  {"id": 2,"name":"Peynir"},
  {"id": 3,"name":"Süt"}
]
function App() {
  return (
    <div>
      <Products baslik= {baslik} plist={plist}/>
    </div>
  );
}

export default App;
