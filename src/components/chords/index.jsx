export const chords = {
  0: "C",
  1: "C#",
  2: "D",
  3: "D#",
  4: "E",
  5: "F",
  6: "F#",
  7: "G",
  8: "G#",
  9: "A",
  10: "A#",
  11: "B",
};

export const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 12);
  return randomNumber;
};

export const ii_v_i_sequence = () => {
  let randomNumber = getRandomNumber();
  let key = chords[randomNumber];
  let ii = () => {
    let chord = randomNumber + 2;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };

  let v = () => {
    let chord = randomNumber + 7;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  const iichord = `${chords[ii()]}m`;
  const vchord = `${chords[v()]}7`;
  const sequence = `${[iichord, vchord, key]}`;
  return sequence;
};

export const i_iv_vii_iii_vi_ii_v_i_sequence = () => {
  let randomNumber = getRandomNumber();
  let key = chords[randomNumber];
  let iv = () => {
    let chord = randomNumber + 5;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let vii = () => {
    let chord = randomNumber + 10;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let iii = () => {
    let chord = randomNumber + 3;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let vi = () => {
    let chord = randomNumber + 8;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let ii = () => {
    let chord = randomNumber + 2;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  let v = () => {
    let chord = randomNumber + 7;
    if (chord > 11) {
      return chord - 12;
    } else {
      return chord;
    }
  };
  const ichord = `${key}m`;
  const ivchord = `${chords[iv()]}m7`;
  const viichord = `${chords[vii()]}7`;
  const iiichord = `${chords[iii()]}maj7`;
  const vichord = `${chords[vi()]}maj7`;
  const iichord = `${chords[ii()]}dim`;
  const vchord = `${chords[v()]}7`;
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
