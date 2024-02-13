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

const getII = (firstNote) => {
  let chord = firstNote + 2;
  if (chord > 11) {
    return chord - 12;
  } else {
    return chord;
  }
};
const getIII = (firstNote) => {
  let chord = firstNote + 4;
  if (chord > 11) {
    return chord - 12;
  } else {
    return chord;
  }
};
const getIV = (firstNote) => {
  let chord = firstNote + 5;
  if (chord > 11) {
    return chord - 12;
  } else {
    return chord;
  }
};
const getV = (firstNote) => {
  let chord = firstNote + 7;
  if (chord > 11) {
    return chord - 12;
  } else {
    return chord;
  }
};
const getVI = (firstNote) => {
  let chord = firstNote + 8;
  if (chord > 11) {
    return chord - 12;
  } else {
    return chord;
  }
};

const getVII = (firstNote) => {
  let chord = firstNote + 10;
  if (chord > 11) {
    return chord - 12;
  } else {
    return chord;
  }
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

export const twoFiveSequence = () => {
  let firstNote = getKey();
  let accidentals = getAccidentals(firstNote);
  let key = chords[firstNote][accidentals];
  const iichord = `${chords[getII(firstNote)][accidentals]}m`;
  const vchord = `${chords[getV(firstNote)][accidentals]}7`;
  const sequence = `${[iichord, vchord, key]}`;
  return sequence;
};

export const circleOfFifthsSequence = () => {
  let firstNote = getKey();
  let accidentals = getAccidentals(firstNote);
  let key = chords[firstNote][accidentals];
  const ichord = `${key}m`;
  const ivchord = `${chords[getIV(firstNote)][accidentals]}m7`;
  const viichord = `${chords[getVII(firstNote)][accidentals]}7`;
  const iiichord = `${chords[getIII(firstNote)][accidentals]}maj7`;
  const vichord = `${chords[getVI(firstNote)][accidentals]}maj7`;
  const iichord = `${chords[getII(firstNote)][accidentals]}dim`;
  const vchord = `${chords[getV(firstNote)][accidentals]}7`;
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

export const chromaticSequence = () => {
  let firstNote = getKey();
  let accidentals = getAccidentals(firstNote);
  let key = chords[firstNote][accidentals];
  const ichord = `${key}m`;
  const vchord = `${chords[getV(firstNote)][accidentals]}7`;
  const vdimchord = `${chords[getV(firstNote)][accidentals]}dim`;
  const ivchord = `${chords[getIV(firstNote)][accidentals]}m7`;
  const IVchord = `${chords[getIV(firstNote)][accidentals]}`;
  const iichord = `${chords[getII(firstNote)][accidentals]}7`;
  const sequence = `${[
    ichord,
    vchord,
    vdimchord,
    IVchord,
    ivchord,
    ichord,
    iichord,
    vchord,
    ichord,
  ]}`;
  return sequence;
};
