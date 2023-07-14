import React, { useEffect, useState } from "react";

const App = () => {
  const [userStore, setUserStore] = useState("");
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("itemsStore");
    if (savedItems) {
      setUpdatedData(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("itemsStore", JSON.stringify(updatedData));
  }, [updatedData]);

  const writingArray = (e) => {
    e.preventDefault();
    setUpdatedData([...updatedData, userStore]);
    setUserStore("");
  };

  return (
    <div>
      <h1>Lista de tarefas em React</h1>

      <form action="">
        <input
          type="text"
          value={userStore}
          onChange={(e) => setUserStore(e.target.value)}
        />

        <button onClick={(e) => writingArray(e)}>Adicionar tarefa</button>
        <br />
        <br />

        <h2>Tarefas adicionadas:</h2>
        <ul>
          {updatedData.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </form>
    </div>
  );
};

export default App;
