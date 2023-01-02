
import './App.css';
import './Components/DisplayCard'
import DisplayCard from './Components/DisplayCard';

function App() {
  return (
    <div className="App">
      <h1 className='text-5xl m-2 p-2'>Cat Fact Generator</h1>

    <DisplayCard />

    <img src="/images/cat3.png" alt="cat" className="object-scale-down h-48 w-96r mt-20 inline-flex" />
     
    

    </div>
  );
}

export default App;
