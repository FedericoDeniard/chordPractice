export const chords = {
  0: { 0: "C", 1: "C" },
  1: { 0: "C#", 1: "Db" },
  2: { 0: "D", 1: "D" },
  3: { 0: "D#", 1: "Eb" },
  4: { 0: "E", 1: "E" },
  5: { 0: "F", 1: "F" },
  6: { 0: "F#", 1: "Gb" },
  7: { 0: "G", 1: "G" },
  8: { 0: "G#", 1: "Ab" },
  9: { 0: "A", 1: "A" },
  10: { 0: "A#", 1: "Bb" },
  11: { 0: "B", 1: "B" },
};

export const getKey = () => {
  const randomNumber = Math.floor(Math.random() * 12);
  return randomNumber;
};

const getAccidentals = (firstNote) => {
  if (
    firstNote === 0 ||
    firstNote === 7 ||
    firstNote === 2 ||
    firstNote === 9 ||
    firstNote === 4 ||
    firstNote === 11 ||
    firstNote === 6
  ) {
    return 0;
  } else {
    return 1;
  }
};

export const ii_v_i_sequence = () => {
  let firstNote = getKey();
  let accidentals = getAccidentals(firstNote);
  let key = chords[firstNote][accidentals];
  let ii = () => {
    let chord = firstNote + 2;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };

  let v = () => {
    let chord = firstNote + 7;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  const iichord = `${chords[ii()][accidentals]}m`;
  const vchord = `${chords[v()][accidentals]}7`;
  const sequence = `${[iichord, vchord, key]}`;
  return sequence;
};

export const i_iv_vii_iii_vi_ii_v_i_sequence = () => {
  let firstNote = getKey();
  let accidentals = getAccidentals(firstNote);
  let key = chords[firstNote][accidentals];
  let iv = () => {
    let chord = firstNote + 5;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let vii = () => {
    let chord = firstNote + 10;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let iii = () => {
    let chord = firstNote + 3;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let vi = () => {
    let chord = firstNote + 8;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let ii = () => {
    let chord = firstNote + 2;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let v = () => {
    let chord = firstNote + 7;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  const ichord = `${key}m`;
  const ivchord = `${chords[iv()][accidentals]}m7`;
  const viichord = `${chords[vii()][accidentals]}7`;
  const iiichord = `${chords[iii()][accidentals]}maj7`;
  const vichord = `${chords[vi()][accidentals]}maj7`;
  const iichord = `${chords[ii()][accidentals]}dim`;
  const vchord = `${chords[v()][accidentals]}7`;
  const sequence = `${[
    ivchord,
    viichord,
    iiichord,
    vichord,
    iichord,
    vchord,
    ichord,
  ]}`;
  return sequence;
};
