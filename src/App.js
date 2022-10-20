import './App.css';


function App() {
  return (
    <div className="App">
      <h2>¿Qué quieres hacer?</h2>

      <form>
        <label>
          <input 
            type='checkbox' 
            name='web' />
          {' '}Una página web(500€)
        </label>
      </form>
    </div>
  );
}

export default App;
