import React from 'react'
import { useState } from "react";
import { services } from "./utils/services.js";
import { Title, Products, Items, Selections, Dist, Quantity } from "./components/Category/styles.js";
import { GlobalStyle } from './GlobalStyles.js';

// import './App.css';

  // Ejercicio 1

  // El valor del input sólo puede ser modificado si se modifica 
  // el estado relacionado con ese input.

const getFormattedPrice = (price) => `${price.toFixed(0)}€`;

  // Un arreglo de longitud igual al número de checkbox con método fill.

  function App() {

  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );
  console.log(checkedState)

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div>
      <GlobalStyle />
      <Title>¿Qué quieres hacer?</Title>
      <Products>
        {services.map(({ name, price }, index) => {
          return (
            <Selections key={index}>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <Dist htmlFor={`custom-checkbox-${index}`}>{name}</Dist>
                </div>
                <Quantity>{getFormattedPrice(price)}</Quantity>
              </div>
            </Selections>
          );
        })}
        <Selections>
          <Items>
            <div>Total:</div>
            <div>{getFormattedPrice(total)}</div>
          </Items>
        </Selections>
      </Products>
    </div>
  );
}

export default App;