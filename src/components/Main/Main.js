import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const lookingData = async () => {
      try {
        const response = await fetch(
          "https://sujeitoprogramador.com/rn-api/?api=posts"
        );
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.log(error);
      }
    };

    lookingData();
  }, []);

  return (
    <main className="main">
      <section className="main-section-02">
        <h2 className="main-h2-sec01">
          Conteúdos relevantes e confiáveis para ajudar você a alcançar uma vida
          mais saudável
        </h2>
        {myData.map((post) => {
          return (
            <div className="main-div-card">
              <h3 className="card-category">Categoria: {post.categoria}</h3>
              <h3 className="card-title">{post.titulo}</h3>
              <img
                src={post.capa}
                alt="imagem do post"
                className="card-image"
              />
              <h2 className="card-subtitle">{post.subtitulo}</h2>
              <button className="button">Acessar conteúdo</button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
