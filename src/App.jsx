import React,{useState} from "react" ;
import "./App.css";
var emojiDictionary ={
"🏁" : "Chequered Flag",
"🚩": "Triangular Flag",
"🏴" : "Black Flag",
"🎌" : "Crossed Flags",
"🏳️": "White Flag",
"🏳️‍⚧️" : "Transgender Flag",
"🏴‍☠":"Pirate Flag"
};
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
const[meaning , setMeaning]= useState("");
function emojiInputHandler(event){
  var userInput = event.target.value;
  
  var meaning = emojiDictionary[userInput];
  
  if(meaning===undefined){
    meaning = "we dont have this in database";
  }
setMeaning(meaning);

}
function emojiClickHandler(emoji){
var meaning = emojiDictionary[emoji];
setMeaning(meaning);

}

return (
    <div className="App">
      <h1>Flag- Emoticons</h1>
      <input onChange = {emojiInputHandler}/>
      <h2>{meaning}</h2>
      <h3>Flag emojis We Know </h3>
      {emojiWeKnow.map(function(emoji){
        return(
       <span 
         onClick = {()=> emojiClickHandler(emoji)}
         style={{fontSize:"2rem", padding:"0.5 rem", cursor:"pointer"}}
         key={emoji}>{emoji}</span>
        );
      })}

    </div>
  );
}
