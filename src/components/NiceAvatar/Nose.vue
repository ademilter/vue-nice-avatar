<template>
  <g>
    <template v-if="nose === NOSE.CURVE">
      <path
        d="M203.687 173.056C203.89 176.899 205.385 185.138 209.735 187.354C215.174 190.124 210.91 199.306 200.729 198.718"
        stroke="#171921"
        stroke-width="4"
      />
    </template>

    <template v-else-if="nose === NOSE.POINTED">
      <path
        d="M203.13 169.093C205.079 182.957 213.541 192.876 213.541 192.876C213.541 192.876 210.91 199.305 200.729 198.716"
        stroke="#171921"
        stroke-width="4"
      />
    </template>

    <template v-else-if="nose === NOSE.ROUND">
      <path
        d="M200.277 178.926C205.497 176.94 214.601 177.54 214.04 187.639C213.542 196.615 204.333 198.397 201.4 196.304"
        stroke="black"
        stroke-width="4"
      />
    </template>
  </g>
</template>

<script>
import props from "./props";
import { NOSE } from "./types";

export default {
  name: "Nose",
  props: {
    nose: props.nose,
  },
  data() {
    return {
      NOSE,
    };
  },
};
</script>
