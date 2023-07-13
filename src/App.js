import React, { useState } from "react";
const App = () => {
  return (
    <div>
      <h1>Formulário React</h1>
      <form action="">
        <label htmlFor="">Nome: </label>
        <input type="text" />
        <br />
        <label htmlFor="">Email: </label>
        <input type="text" />
        <br />
        <label htmlFor="">Endereço: </label>
        <input type="text" />
        <br />
        <br />
        <button type="submit">Enviar formulário</button>
      </form>
    </div>
  );
};

export default App;
