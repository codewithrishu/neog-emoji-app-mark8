import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "Laughing",
  "😭": "Crying",
  "😆": "Happy",
  "😍": "Loving",
  "😎": "Cool",
  "😴": "Sad"
};

export default function App() {
  const [meaning, setmeaning] = useState("result will appear here");

  function changeHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];
    if (meaning === undefined) {
      setmeaning("sorry! we dont have this in our databse");
    } else {
      setmeaning(meaning);
    }
  }

  function clickHandler(item) {
    var meaning = emojiDictionary[item];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know your emotions</h1>
      <input
        onChange={changeHandler}
        placeholder="search your emoji here"
      ></input>

      <div style={{ padding: "1.5rem", fontSize: "1.5rem" }}>{meaning}</div>

      {Object.keys(emojiDictionary).map((item) => {
        return (
          <span
            onClick={() => clickHandler(item)}
            style={{ padding: "1rem", cursor: "pointer", fontSize: "2.5rem" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
