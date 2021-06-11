import { EYES, EYEBROWS, EAR, BASE, EARRING } from "./types";

export default {
  base: {
    default: BASE.LIGHT,
    type: String,
  },
  eye: {
    default: EYES.CIRCLE,
    type: String,
    validator: function (value) {
      return Object.values(EYES).indexOf(value) !== -1;
    },
  },
  eyeBrow: {
    default: EYEBROWS.EYEBROWS_UP,
    type: String,
    validator: function (value) {
      return Object.values(EYEBROWS).indexOf(value) !== -1;
    },
  },
  ear: {
    default: EAR.SMALL,
    type: String,
    validator: function (value) {
      return Object.values(EAR).indexOf(value) !== -1;
    },
  },
  earring: {
    default: EARRING.STUD,
    type: String,
    validator: function (value) {
      return Object.values(EARRING).indexOf(value) !== -1;
    },
  },
};
