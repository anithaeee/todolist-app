import logo from './logo.svg';
import './App.css';
import '../src/Todoapp/todoapp.css';
import Header from '../src/Header/Header.js';
import Todoapp from './Todoapp/Todoapp.js';
function App() {
  return (
    <div className="App">
      <>
      <Todoapp />
      <Header />
      </>
    </div>
  );
}

export default App;
