import './App.css';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  margin: auto;
`;

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  padding-bottom: 1rem;
`;

const Label = styled.label`
  padding-bottom: 1rem;
`

function App() {
  return (
    <div className="App">
      <H2>¿Qué quieres hacer?</H2>

      <Form>
        <Label>
          <input 
            type='checkbox' 
            name='web' />
          {' '}Una página web(500€)
        </Label>
        <Label>
          <input 
            type='checkbox' 
            name='web' />
          {' '}Una consultoria SEO(300€)
        </Label>
        <Label>
          <input 
            type='checkbox' 
            name='web' />
          {' '}Una campaña de Google Ads(200€)
        </Label>
      </Form>
    </div>
  );
}

export default App;
