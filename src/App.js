
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import Slider from './components/Slider';
import banner from "./data/data.json"
function App() {
  return (
    <div className="App">
<PreNavbar/>
<Navbar/>
<Slider start={banner.start}/>
    </div>
  );
}

export default App;
