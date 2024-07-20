import logo from './logo.svg';
import './App.css';
import '../src/Todoapp/todoapp.css';
import Todoapp from './Todoapp/Todoapp.js';
import Header from '../src/Header/Header.js';
function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Todoapp />
      
      </>
    </div>
  );
}

export default App;
