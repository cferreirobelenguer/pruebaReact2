
import './App.css';
import WelcomeTitle from '../src/components/WelcomeTitle';
import Second from '../src/components/second'


function App() {
  return (
    <div className="App">
      <h1>Primer ejercicio: </h1>
        <WelcomeTitle user={"Teresa"} primary={true}/>
      <br></br>
      <h2>Segundo ejercicio</h2>
      <Second/>

    </div>
  );
}

export default App;
