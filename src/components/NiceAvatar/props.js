import {
  EYES,
  EYEBROWS,
  EAR,
  BASE,
  EARRING,
  MOUTH,
  HAIR,
  NOSE,
  GLASSES,
  BEARD,
  SHIRT,
  COLORS,
} from "./types";

export default {
  size: {
    default: 120,
    type: [String, Number],
  },
  bgColor: {
    default: COLORS.AZURE,
    type: String,
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
    default: EARRING.NONE,
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
  nose: {
    default: NOSE.CURVE,
    type: String,
    validator: function (value) {
      return Object.values(NOSE).indexOf(value) !== -1;
    },
  },
  glasses: {
    default: GLASSES.NONE,
    type: String,
    validator: function (value) {
      return Object.values(GLASSES).indexOf(value) !== -1;
    },
  },
  beard: {
    default: BEARD.NONE,
    type: String,
    validator: function (value) {
      return Object.values(BEARD).indexOf(value) !== -1;
    },
  },
  beardColor: {
    default: "#a56d55",
    type: String,
  },
  shirt: {
    default: SHIRT.COLLARED,
    type: String,
    validator: function (value) {
      return Object.values(SHIRT).indexOf(value) !== -1;
    },
  },
};
