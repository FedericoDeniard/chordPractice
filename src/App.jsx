import { useState } from "react";
import "./App.css";
import { getRandomNumber } from "./components/chords";
import { ii_v_i_sequence } from "./components/chords";
import { i_iv_vii_iii_vi_ii_v_i_sequence } from "./components/chords";
import { useEffect } from "react";

function App() {
  ii_v_i_sequence();

  const [chord, setChord] = useState("");

  const firstSequence = () => {
    const getChord = ii_v_i_sequence();
    setChord(getChord);
  };

  const [chord2, setChord2] = useState();

  const secondSequence = () => {
    const getChord2 = i_iv_vii_iii_vi_ii_v_i_sequence();
    setChord2(getChord2);
  };

  return (
    <>
      <h1>ChordMaster</h1>
      <p>II V I</p>
      <p>{chord}</p>
      <button onClick={firstSequence}>Get Chord</button>
      <p> I IV VII III VI II V I</p>
      <p>{chord2}</p>
      <button onClick={secondSequence}>Get Secondary Chord</button>
    </>
  );
}

export default App;
