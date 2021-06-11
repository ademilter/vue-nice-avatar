import { EYES, EYEBROWS, EAR, BASE, EARRING, MOUTH, HAIR } from "./types";

export default {
  size: {
    default: 120,
    type: [String, Number],
  },
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
  mouth: {
    default: MOUTH.SMILE,
    type: String,
    validator: function (value) {
      return Object.values(MOUTH).indexOf(value) !== -1;
    },
  },
  hair: {
    default: HAIR.DANNY_PHANTOM,
    type: String,
    validator: function (value) {
      return Object.values(HAIR).indexOf(value) !== -1;
    },
  },
};
