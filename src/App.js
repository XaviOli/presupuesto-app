import './App.css';
import { Form, H2, Label } from './components/Styles';

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
