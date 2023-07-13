import React, { useState } from "react";
const App = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [userInfo, setUserInfo] = useState({});

  function sendInfo(e) {
    e.preventDefault();

    setUserInfo({
      name: userName,
      email: userEmail,
      address: userAddress,
    });
  }

  return (
    <div>
      <h1>Formulário React</h1>
      <form action="" onSubmit={sendInfo}>
        <label htmlFor="">Nome: </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="">Email: </label>
        <input
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Endereço: </label>
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Enviar formulário</button>
      </form>
      <br />
      <br />
      <br />
      <h2>Dados registrados:</h2>
      <h3>Nome: {userInfo.name}</h3>
      <h3>Nome: {userInfo.email}</h3>
      <h3>Nome: {userInfo.address}</h3>
    </div>
  );
};

export default App;
