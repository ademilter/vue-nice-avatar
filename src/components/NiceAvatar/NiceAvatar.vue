<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="190" cy="190" r="190" fill="#FFEDEF" />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="380"
      height="380"
    >
      <circle cx="190" cy="190" r="190" fill="#FFEDEF" />
    </mask>
    <g mask="url(#mask0)">
      <!-- -->
      <Base :base="base" />
      <Mouth :mouth="mouth" />
      <EyeBrows :eye-brow="eyeBrow" />
      <Hair :hair="hair" />
      <Eyes :eye="eye" />
      <Nose :nose="nose" />
      <Ear :ear="ear" :base="base" />
      <Earring :ear="ear" :earring="earring" />

      <path
        d="M189.771 359.578C189.771 359.578 189.771 359.578 191 358L189.771 359.578L191.493 360.919L192.679 359.087L192.679 359.087L192.681 359.084L192.69 359.07L192.731 359.007C192.742 358.99 192.755 358.971 192.769 358.949C192.803 358.897 192.847 358.832 192.9 358.753C193.05 358.528 193.275 358.195 193.57 357.77C194.158 356.919 195.023 355.702 196.118 354.246C198.312 351.332 201.416 347.482 205.071 343.718C208.737 339.945 212.898 336.318 217.198 333.793C221.514 331.26 225.777 329.949 229.733 330.483C272.171 336.205 303.402 355.002 323.674 383.001H50.3745C66.6742 353.659 89.8579 334.983 127.445 326.413C129.046 326.047 131.224 326.158 133.947 326.791C136.642 327.418 139.715 328.519 143.028 329.976C149.655 332.889 157.052 337.136 164.004 341.536C170.945 345.93 177.39 350.443 182.104 353.86C184.459 355.567 186.379 357 187.709 358.004C188.374 358.506 188.891 358.901 189.241 359.169C189.416 359.304 189.55 359.407 189.639 359.475L189.739 359.553L189.764 359.572L189.77 359.577L189.771 359.578Z"
        fill="#6BD9E9"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M115.613 329.085L120.779 309.853C120.989 309.074 121.996 308.854 122.54 309.449C137.403 325.714 156.16 325.076 162.385 324.33C163.23 324.228 163.892 325.153 163.495 325.906L150.338 350.859C150.136 351.241 149.724 351.452 149.3 351.364C145.352 350.541 125.677 345.732 115.729 329.867C115.583 329.635 115.542 329.35 115.613 329.085Z"
        fill="#D2EFF3"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M246.195 328.981L234.615 309.499C234.222 308.837 233.253 308.848 232.834 309.494C227.097 318.33 217.202 322.4 213.742 323.602C213.12 323.819 212.835 324.558 213.171 325.125L226.673 347.94C226.875 348.281 227.255 348.465 227.636 348.357C229.771 347.749 237.096 344.685 246.182 330.021C246.378 329.706 246.385 329.3 246.195 328.981Z"
        fill="#D2EFF3"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M172.5 346.5L163.5 325L156.5 340L172.5 346.5Z"
        fill="black"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M204 345.5L213 324L220 339L204 345.5Z"
        fill="black"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M133.5 306L121.5 309L131.5 315.5L133.5 306Z"
        fill="black"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M223 306L234 309L227 315.5L223 306Z"
        fill="black"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="200"
          height="320"
          fill="white"
          transform="translate(90 43)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
import props from "./props";
import Eyes from "@/components/NiceAvatar/Eyes";
import EyeBrows from "@/components/NiceAvatar/EyeBrows";
import Base from "@/components/NiceAvatar/Base";
import Ear from "@/components/NiceAvatar/Ear";
import Earring from "@/components/NiceAvatar/Earring";
import Mouth from "@/components/NiceAvatar/Mouth";
import Hair from "@/components/NiceAvatar/Hair";
import Nose from "@/components/NiceAvatar/Nose";

export default {
  name: "NiceAvatar",
  components: { Hair, Mouth, Base, EyeBrows, Eyes, Ear, Earring, Nose },
  props,
};
</script>
