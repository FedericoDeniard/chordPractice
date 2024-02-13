import { useState } from "react";
import "./App.css";
import { ii_v_i_sequence } from "./components/chords";
import { i_iv_vii_iii_vi_ii_v_i_sequence } from "./components/chords";
import { useEffect } from "react";

function App() {
  // First Sequence
  const [chord, setChord] = useState("");

  const firstSequence = () => {
    const getChord = ii_v_i_sequence("");
    setChord(getChord);
  };

  // Second Sequence
  const [chord2, setChord2] = useState("");

  const secondSequence = () => {
    const getChord2 = i_iv_vii_iii_vi_ii_v_i_sequence();
    setChord2(getChord2);
  };

  // Preload chords

  useEffect(() => {
    if (chord === "") {
      firstSequence();
    }
    if (chord2 === "") {
      secondSequence();
    }
  });

  //

  return (
    <>
      <div className="app">
        <h1 className="chordmaster">ChordMaster</h1>
        <div className="container">
          {" "}
          <p>II V I</p>
          <p>{chord}</p>
          <button onClick={firstSequence}>Get Chord</button>
        </div>
        <div className="container">
          <h4>Circle of fifths</h4>
          <p> i iv VII III VI ii V i</p>
          <p>{chord2}</p>
          <button onClick={secondSequence}>Get Chord</button>
        </div>
      </div>
    </>
  );
}

export default App;
