import React from "react";
import FirstComponent from "./components/FirstComponent";

const objectList = {
  id: "1",
  nome: "Amaldo",
};

const App = () => {
  return (
    <div>
      <FirstComponent nomeAleatorio="Props com nome aleatória aqui" />
      <FirstComponent nomeAleatorio="Outra props aqui" />
      <FirstComponent />
    </div>
  );
};

export default App;
