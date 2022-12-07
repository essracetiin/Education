import Personnal from "./components/Personnal";
const plist = [
  {"name": "Esra", "surname": "Çetin", "salary": 3000},
  {"name": "Burak", "surname": "Gülmez", "salary": 3200},
]
function App() {
  return (
    <>
 
    <Personnal plist = {plist}/>
    
    </>
  );
}

export default App;
