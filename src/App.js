
import "./App.css"
import Heading from "./components/Heading";
import mascot from "./images/mascot2.png";


function App() {
  return (
    <div className="mascot">
      <img src={mascot} alt="Trident Mascot" ></img>
     <Heading/>
    </div>
  );
}

export default App;
