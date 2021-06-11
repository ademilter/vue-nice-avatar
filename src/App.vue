<template>
  <div>
    <NiceAvatar :eye="eye" :eye-brow="eyeBrow" :ear="ear" />

    <div>
      <h4>Eyes</h4>
      <label v-for="value in eyesValues" :key="value">
        <input type="radio" name="eye" :value="value" v-model="eye" />
        {{ value }}
      </label>
    </div>

    <div>
      <h4>Eyebrows and Eyelashes</h4>
      <label v-for="value in eyeBrowsValues" :key="value">
        <input type="radio" name="eyeBrows" :value="value" v-model="eyeBrow" />
        {{ value }}
      </label>
    </div>

    <div>
      <h4>Ear</h4>
      <label v-for="value in earValues" :key="value">
        <input type="radio" name="ear" :value="value" v-model="ear" />
        {{ value }}
      </label>
    </div>
  </div>
</template>

<script>
import { EYES, EYEBROWS, EAR } from "./components/NiceAvatar/types";
import NiceAvatar from "./components/NiceAvatar/NiceAvatar";

export default {
  name: "App",
  components: {
    NiceAvatar,
  },
  data() {
    return {
      eye: EYES.OVAL,
      eyeBrow: EYEBROWS.EYEBROWS_UP,
      ear: EAR.SMALL,
    };
  },
  computed: {
    eyesValues() {
      return Object.values(EYES);
    },
    eyeBrowsValues() {
      return Object.values(EYEBROWS);
    },
    earValues() {
      return Object.values(EAR);
    },
  },
};
</script>
