import { EYE } from "./types";

export default {
  eye: {
    default: EYE.CIRCLE,
    type: String,
    validator: function (value) {
      return Object.values(EYE).indexOf(value) !== -1;
    },
  },
};
