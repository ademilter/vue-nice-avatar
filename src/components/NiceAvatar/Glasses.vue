<template>
  <g>
    <template v-if="glasses === GLASSES.ROUND">
      <circle cx="234.5" cy="159" r="26" stroke="black" stroke-width="4" />
      <circle cx="167.5" cy="168" r="26" stroke="black" stroke-width="4" />
      <path
        d="M209.5 166C209.5 163.878 208.657 161.843 207.157 160.343C205.657 158.843 203.622 158 201.5 158C199.378 158 197.343 158.843 195.843 160.343C194.343 161.843 193.5 163.878 193.5 166"
        stroke="black"
        stroke-width="4"
      />
      <path d="M142 170L112 175.5" stroke="black" stroke-width="4" />
    </template>

    <template v-if="glasses === GLASSES.SQUARE">
      <path
        d="M145.019 168.713L112 174.592"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M146.443 147.609L182.685 142.886C185.971 142.458 189.038 144.767 189.534 148.043L194.595 181.434C195.092 184.71 192.831 187.713 189.545 188.141L157.161 192.361C154.139 192.755 151.254 190.827 150.455 187.878L141.535 154.99C140.594 151.521 142.888 148.072 146.443 147.609Z"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M251.226 134.137L214.984 138.86C211.699 139.288 209.437 142.291 209.934 145.567L214.995 178.958C215.492 182.234 218.558 184.543 221.844 184.115L254.228 179.895C257.25 179.501 259.45 176.91 259.342 173.872L258.139 139.978C258.012 136.403 254.782 133.674 251.226 134.137Z"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M191.916 163.944L212.972 160.838"
        stroke="black"
        stroke-width="4"
      />
    </template>
  </g>
</template>

<script>
import props from "./props";
import { GLASSES } from "./types";

export default {
  name: "Glasses",
  props: {
    glasses: props.glasses,
  },
  data() {
    return {
      GLASSES,
    };
  },
};
</script>
