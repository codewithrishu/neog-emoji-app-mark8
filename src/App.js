import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π": "Laughing",
  "π­": "Crying",
  "π": "Happy",
  "π": "Loving",
  "π": "Cool",
  "π΄": "Sad",
  "π": "angel",
  "π": "Devil",
  "π": "hi",
  "π": "yumm..burger",
  "π": "cake"
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
      <h1>Know your Emπtiπns!</h1>

      <input
        onChange={changeHandler}
        placeholder="search your emoji here"
      ></input>

      <div style={{ padding: "1rem", fontSize: "1.5rem" }}>{meaning}</div>
      <div style={{ padding: "1rem" }}>
        {Object.keys(emojiDictionary).map((item) => {
          return (
            <span
              onClick={() => clickHandler(item)}
              style={{
                padding: ".5rem",
                cursor: "pointer",
                fontSize: "2rem",
                boxShadow: "1px 1px 2px 2px #888888"
              }}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
