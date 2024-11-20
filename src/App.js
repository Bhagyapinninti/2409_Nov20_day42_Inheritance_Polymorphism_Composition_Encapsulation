import logo from './logo.svg';
import './App.css';
import Android from './classes/Android';
import IOS from './classes/IOS';

function App() {
 
let smartphone =new Android();
smartphone.OperatingSystem();
smartphone.Application();
smartphone.Battery();


let iphone= new IOS;

iphone.OperatingSystem();
iphone.Application();
iphone.Battery();

  return (
    <div className="App">
      <h1>Inheritance, Polymorphism, Encapsulation and Composition</h1>
    </div>
  );
}

export default App;
