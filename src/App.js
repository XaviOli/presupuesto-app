import './App.css';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  margin: auto;
`


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
