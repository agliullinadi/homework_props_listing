import './App.css';
import Listing from './components/Listing';
import items from "./components/data/data.json";


function App() {
  return (
    <Listing items={items} />
  );
}

export default App;
