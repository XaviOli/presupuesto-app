import './App.css';
import { useState } from 'react';
import { Form, H2, Label, P } from './components/Styles';

// --------- enum ---------

const PRICES = {
  WEB: 500,
  SEO: 300,
  GOOGLE: 200
}

const getFinalPrice = (event, finalPrice, setFinalPrice) => {
  const servicePrice = Number(event.target.value);

  if(event.target.checked) {
    setFinalPrice(finalPrice + servicePrice)
  } else {
    setFinalPrice(finalPrice - servicePrice)
  }
}

function App() {

  const [ finalPrice, setFinalPrice ] = useState(0);

  return (
    <div className="App">
      <H2>¿Qué quieres hacer?</H2>

      <Form>
        <Label>
          <input 
            onClick={(event) => getFinalPrice(event, finalPrice, setFinalPrice)}
            type='checkbox' 
            name='web'
            value={PRICES.WEB}
            />
              {' '}Una página web({PRICES.WEB}€)
        </Label>
        <Label>
          <input
            onClick={(event) => getFinalPrice(event, finalPrice, setFinalPrice)}
            type='checkbox' 
            name='web'
            value={PRICES.SEO}
             />
              {' '}Una consultoria SEO({PRICES.SEO}€)
        </Label>
        <Label>
          <input 
            onClick={(event) => getFinalPrice(event, finalPrice, setFinalPrice)}
            type='checkbox' 
            name='web' 
            value={PRICES.GOOGLE}
            />
              {' '}Una campaña de Google Ads({PRICES.GOOGLE}€)
        </Label>
      </Form>

      <P>Precio: {finalPrice}</P>

    </div>
  );
}

export default App;
