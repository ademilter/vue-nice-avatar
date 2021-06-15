import {
  EYES,
  EYEBROWS,
  EAR,
  EARRING,
  MOUTH,
  HAIR,
  NOSE,
  GLASSES,
  BEARD,
  SHIRT,
  BG_COLORS,
  HAIR_COLORS,
  BEARD_COLORS,
  SHIRT_COLORS,
  FACE_COLORS,
} from "./types";

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export default {
  size: {
    default: 120,
    type: [String, Number],
  },
  bgColor: {
    default: getRandomItem(BG_COLORS),
    type: String,
  },
  faceColor: {
    default: getRandomItem(FACE_COLORS),
    type: String,
  },
  eye: {
    default: getRandomItem(Object.values(EYES)),
    type: String,
    validator: function (value) {
      return Object.values(EYES).indexOf(value) !== -1;
    },
  },
  eyeBrow: {
    default: getRandomItem(Object.values(EYEBROWS)),
    type: String,
    validator: function (value) {
      return Object.values(EYEBROWS).indexOf(value) !== -1;
    },
  },
  ear: {
    default: getRandomItem(Object.values(EAR)),
    type: String,
    validator: function (value) {
      return Object.values(EAR).indexOf(value) !== -1;
    },
  },
  earring: {
    default: getRandomItem(Object.values(EARRING)),
    type: String,
    validator: function (value) {
      return Object.values(EARRING).indexOf(value) !== -1;
    },
  },
  mouth: {
    default: getRandomItem(Object.values(MOUTH)),
    type: String,
    validator: function (value) {
      return Object.values(MOUTH).indexOf(value) !== -1;
    },
  },
  hair: {
    default: getRandomItem(Object.values(HAIR)),
    type: String,
    validator: function (value) {
      return Object.values(HAIR).indexOf(value) !== -1;
    },
  },
  nose: {
    default: getRandomItem(Object.values(NOSE)),
    type: String,
    validator: function (value) {
      return Object.values(NOSE).indexOf(value) !== -1;
    },
  },
  glasses: {
    default: getRandomItem(Object.values(GLASSES)),
    type: String,
    validator: function (value) {
      return Object.values(GLASSES).indexOf(value) !== -1;
    },
  },
  beard: {
    default: getRandomItem(Object.values(BEARD)),
    type: String,
    validator: function (value) {
      return Object.values(BEARD).indexOf(value) !== -1;
    },
  },
  hairColor: {
    default: getRandomItem(HAIR_COLORS),
    type: String,
  },
  beardColor: {
    default: getRandomItem(BEARD_COLORS),
    type: String,
  },
  shirtColor: {
    default: getRandomItem(SHIRT_COLORS),
    type: String,
  },
  shirt: {
    default: getRandomItem(Object.values(SHIRT)),
    type: String,
    validator: function (value) {
      return Object.values(SHIRT).indexOf(value) !== -1;
    },
  },
};
