import logo from './logo.svg';
import './App.css';
import '../src/Todoapp/todoapp.css';
import Todoapp from './Todoapp/Todoapp.js';
import Header from '../src/Header/Header.js';
import Form from '../src/Form/Form'

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Todoapp />
      <Form />
      </>
    </div>
  );
}

export default App;
