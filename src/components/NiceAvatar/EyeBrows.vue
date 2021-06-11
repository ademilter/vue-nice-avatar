<template>
  <g>
    <template v-if="eyeBrow === EYEBROWS.EYEBROWS_DOWN">
      <path
        d="M147 148.5C153.167 151 168.1 151.5 178.5 133.5"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M214 126C219.167 131.333 232.1 138.8 242.5 126"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
    </template>

    <template v-else-if="eyeBrow === EYEBROWS.EYEBROWS_UP">
      <path
        d="M219 132.214C224.667 129.548 238 127.114 246 138.714"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M143.579 157.521C145.65 151.61 153.261 140.396 167.142 142.822"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
    </template>

    <template v-else-if="eyeBrow === EYEBROWS.EYELASHES_DOWN">
      <path
        d="M147 148.5C153.167 151 168.1 151.5 178.5 133.5"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M214 126C219.167 131.333 232.1 138.8 242.5 126"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M157.148 148.458L151 143.031"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M236.219 131.444L238.004 123.439"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M165.597 144.814L161.551 137.682"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M228.142 131.018L229.08 122.871"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M172.674 139.201L170.473 131.301"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M219.993 130.031L219.217 121.867"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
    </template>

    <template v-else-if="eyeBrow === EYEBROWS.EYELASHES_UP">
      <path
        d="M219 132.214C224.667 129.548 238 127.114 246 138.714"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M143.579 157.521C145.65 151.61 153.261 140.396 167.142 142.822"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M146.074 151.458L139.926 146.031"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M242.961 133.157L249.109 127.73"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M152.523 145.814L148.477 138.682"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M235.512 129.513L239.559 122.381"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M160.599 142.201L158.398 134.301"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M226.436 128.9L228.637 121"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
    </template>
  </g>
</template>

<script>
import props from "./props";
import { EYEBROWS } from "./types";

export default {
  name: "EyeBrow",
  props: {
    eyeBrow: props.eyeBrow,
  },
  data() {
    return {
      EYEBROWS,
    };
  },
};
</script>

<style scoped></style>
