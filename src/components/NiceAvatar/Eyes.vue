<template>
  <g>
    <template v-if="eye === EYES.CIRCLE">
      <ellipse
        cx="168.117"
        cy="167.927"
        rx="9"
        ry="10"
        transform="rotate(-6.77646 168.117 167.927)"
        fill="black"
      />
      <ellipse
        cx="232.149"
        cy="157.923"
        rx="9"
        ry="10"
        transform="rotate(-6.27568 232.149 157.923)"
        fill="black"
      />
    </template>

    <template v-else-if="eye === EYES.OVAL">
      <ellipse
        cx="168.53"
        cy="168.402"
        rx="9"
        ry="13.5"
        transform="rotate(-6.77646 168.53 168.402)"
        fill="black"
      />
      <ellipse
        cx="232.531"
        cy="158.402"
        rx="9"
        ry="13.5"
        transform="rotate(-6.27568 232.531 158.402)"
        fill="black"
      />
    </template>

    <template v-else-if="eye === EYES.SMILE">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M157.287 173.073C157.401 173.886 158.434 174.067 159.009 173.481C161.474 170.965 165.264 169.116 169.663 168.594C172.258 168.285 174.754 168.475 176.979 169.066C177.733 169.266 178.474 168.629 178.21 167.895C176.545 163.25 171.845 160.196 166.736 160.803C160.794 161.509 156.55 166.898 157.256 172.839C157.266 172.917 157.276 172.995 157.287 173.073Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M221.385 163.073C221.498 163.886 222.531 164.067 223.106 163.482C225.549 160.996 229.298 159.17 233.648 158.653C236.213 158.348 238.68 158.535 240.88 159.117C241.634 159.316 242.375 158.679 242.111 157.946C240.456 153.352 235.804 150.335 230.748 150.935C224.862 151.635 220.658 156.973 221.357 162.859C221.366 162.93 221.375 163.002 221.385 163.073Z"
        fill="black"
      />
    </template>

    <template v-else-if="eye === EYES.SHADOW">
      <circle
        cx="167.24"
        cy="159.239"
        r="12"
        transform="rotate(-6.27568 167.24 159.239)"
        fill="#D2EFF3"
      />
      <ellipse
        cx="168.53"
        cy="168.402"
        rx="9"
        ry="13.5"
        transform="rotate(-6.77646 168.53 168.402)"
        fill="black"
      />
      <circle
        cx="231.019"
        cy="150.61"
        r="12"
        transform="rotate(-6.27568 231.019 150.61)"
        fill="#D2EFF3"
      />
      <ellipse
        cx="232.531"
        cy="158.402"
        rx="9"
        ry="13.5"
        transform="rotate(-6.27568 232.531 158.402)"
        fill="black"
      />
    </template>
  </g>
</template>

<script>
import props from "./props";
import { EYES } from "./types";

export default {
  name: "Eye",
  props: {
    eye: props.eye,
  },
  data() {
    return {
      EYES,
    };
  },
};
</script>
