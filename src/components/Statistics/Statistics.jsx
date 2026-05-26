import "./Statistics.css";

function Statistics({ text }) {
  const words = text.trim() ? text.split(/\s+/).length : 0;

  return (
    <div>
      <p>Caracteres: {text.length}</p>
      <p>Palavras: {words}</p>
      <p>Linhas: {text.split("\n").length}</p>
    </div>
  );
}

export default Statistics;
