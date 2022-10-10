import logo from './logo.svg';
import './App.css';
import './Components/liste';
import Navbar from './Components/liste';
import HelloWorld from './Components/HelloWorld';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld test={'test'} uneProps={'une props'} />
        <Navbar />
      </header>
    </div>
  );
}
export default App;
