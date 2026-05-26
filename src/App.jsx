import { useState } from "react";

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const toUpper = () => {
    setResult(text.toUpperCase());
  };

  const toLower = () => {
    setResult(text.toLowerCase());
  };

  const toCamelCase = () => {

    const camel = text
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");

    setResult(camel);
  };

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "30px"
      }}
    >
      <h1>DevText Formatter</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite seu texto..."
        style={{
          width: "100%",
          height: "150px",
          marginTop: "20px",
          padding: "10px"
        }}
      />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px"
        }}
      >
        <button onClick={toUpper}>
          UPPERCASE
        </button>

        <button onClick={toLower}>
          lowercase
        </button>

        <button onClick={toCamelCase}>
          camelCase
        </button>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>Resultado:</h2>

        <p>{result}</p>

      </div>

      <div style={{marginTop:"20px"}}>

        <h3>Estatísticas</h3>

        <p>Caracteres: {text.length}</p>

        <p>
          Palavras:
          {text.trim()
            ? text.split(/\s+/).length
            : 0}
        </p>

      </div>

    </div>
  );
}

export default App;