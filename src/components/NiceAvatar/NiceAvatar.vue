<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="190" cy="190" r="190" :fill="bgColor" />
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
      <Base :base="base" :beard="beard" :beard-color="beardColor" />
      <Mouth :mouth="mouth" />
      <EyeBrows :eye-brow="eyeBrow" />
      <Hair :hair="hair" />
      <Eyes :eye="eye" />
      <Glasses :glasses="glasses" />
      <Nose :nose="nose" />
      <Ear :ear="ear" :base="base" />
      <Earring :ear="ear" :earring="earring" />
      <Shirt :shirt="shirt" />
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
import Glasses from "@/components/NiceAvatar/Glasses";
import Shirt from "@/components/NiceAvatar/Shirt";

export default {
  name: "NiceAvatar",
  components: {
    Shirt,
    Glasses,
    Hair,
    Mouth,
    Base,
    EyeBrows,
    Eyes,
    Ear,
    Earring,
    Nose,
  },
  props,
};
</script>
