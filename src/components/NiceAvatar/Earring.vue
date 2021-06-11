<template>
  <g>
    <template v-if="ear === EAR.SMALL && earring === EARRING.HOOP">
      <path
        d="M121 209C134.255 209 145 219.745 145 233C145 246.255 134.255 257 121 257C107.745 257 97 246.255 97 233C97 226.609 100.5 221.5 103.571 216.5L104.5 215"
        stroke="#F4D150"
        stroke-width="4"
      />
    </template>
  </g>
</template>

<script>
import props from "./props";
import { EAR, EARRING } from "./types";

export default {
  name: "Earring",
  props: {
    ear: props.ear,
    earring: props.earring,
  },
  data() {
    return {
      EAR,
      EARRING,
    };
  },
};
</script>

<style scoped></style>
