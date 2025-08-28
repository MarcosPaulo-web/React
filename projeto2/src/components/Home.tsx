import { useState } from "react";

function Home() {
  const [text, setText] = useState("texto inicial");
  const [inputText, setInputText] = useState("texto inicial");

  function changeText() {
    setText(inputText);
  }

  return (
    <div>
      <h1>Esta é a home</h1>
      <p>{text}</p>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={changeText}>Mudar texto</button>
    </div>
  );
}
export default Home;
