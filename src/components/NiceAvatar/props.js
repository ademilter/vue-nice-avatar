import { EYE, EYEBROWS } from "./types";

export default {
  eye: {
    default: EYE.CIRCLE,
    type: String,
    validator: function (value) {
      return Object.values(EYE).indexOf(value) !== -1;
    },
  },
  eyeBrow: {
    default: EYEBROWS.UP,
    type: String,
    validator: function (value) {
      return Object.values(EYEBROWS).indexOf(value) !== -1;
    },
  },
};
