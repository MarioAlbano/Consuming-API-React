import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  const [newName, setNewName] = useState("Sem nome");

  function resetName() {
    const resetName = prompt("Qual nome trocar?");
    setNewName(resetName);
  }

  return (
    <div>
      <FirstComponent nomeAleatorio="Props com nome aleatória aqui" />
      <FirstComponent nomeAleatorio={newName} />
      <button onClick={() => resetName()}>Clique para trocar de nome!</button>
    </div>
  );
};

export default App;
