import React from "react";
import emojipedia from "../emojipedia";
import Emojicard from "./EmojiCard";

function Emoji(props) {
  return (
    <Emojicard
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Emoji)}</dl>
    </div>
  );
}

export default App;
