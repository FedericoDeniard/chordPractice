import { useState, useRef } from "react";
import "./App.css";
import {
  twoFiveSequence,
  circleOfFifthsSequence,
  chromaticSequence,
} from "./components/chords";

import { useEffect } from "react";

function App() {
  const [initialNote, setInitialNote] = useState();
  const [accidental, setAccidental] = useState();

  let noteSelect = useRef();
  let accidentalSelect = useRef();

  const chooseKey = () => {
    let selectedNote = noteSelect.current.value;
    setInitialNote(selectedNote);
    console.log(initialNote);
    let accidentalSelected = accidentalSelect.current.value;
    setAccidental(accidentalSelected);
    console.log(accidental);
  };

  // First Sequence
  const [chord, setChord] = useState("");

  const firstSequence = () => {
    const getChord = twoFiveSequence(initialNote, accidental);
    setChord(getChord);
  };

  // Second Sequence
  const [chord2, setChord2] = useState("");

  const secondSequence = () => {
    const getChord2 = circleOfFifthsSequence();
    setChord2(getChord2);
  };

  // Third Sequence
  const [chord3, setChord3] = useState("");

  const thirdSequence = () => {
    const getChord3 = chromaticSequence();
    setChord3(getChord3);
  };

  // Preload chords

  useEffect(() => {
    if (chord === "") {
      firstSequence();
    }
    if (chord2 === "") {
      secondSequence();
    }
    if (chord3 === "") {
      thirdSequence();
    }
  });

  //

  return (
    <>
      <div className="app">
        <h1 className="chordmaster">ChordMaster</h1>
        <div className="container">
          <select ref={noteSelect}>
            <option value={0}>C</option>
            <option value={2}>D</option>
            <option value={4}>E</option>
            <option value={5}>F</option>
            <option value={7}>G</option>
            <option value={9}>A</option>
            <option value={11}>B</option>
          </select>
          <select ref={accidentalSelect}>
            <option value={0}>#</option>
            <option value={1}>b</option>
          </select>
          <button onClick={chooseKey}>Choose key</button>
        </div>
        <div className="container">
          <h4>Two Five</h4>
          <p>II V I</p>
          <p className="sequence">{chord}</p>
          <button onClick={firstSequence}>Get Chords</button>
        </div>
        <div className="container">
          <h4>Circle of fifths</h4>
          <p>iv VII III VI ii V i</p>
          <p className="sequence">{chord2}</p>
          <button onClick={secondSequence}>Get Chords</button>
        </div>
        <div className="container">
          <h4>Chromatic sequence</h4>
          <p>I V7 Vdim IV iv I II7 V7 </p>
          <p className="sequence">{chord3}</p>
          <button onClick={thirdSequence}>Get Chords</button>
        </div>
      </div>
    </>
  );
}

export default App;
