<template>
  <div>
    <NiceAvatar :eye="eye" :eye-brow="eyeBrow" />

    <div>
      <label v-for="value in eyes" :key="value">
        <input type="radio" name="eye" :value="value" v-model="eye" />
        {{ value }}
      </label>
    </div>

    <div>
      <label v-for="value in eyeBrows" :key="value">
        <input type="radio" name="eyeBrows" :value="value" v-model="eyeBrow" />
        {{ value }}
      </label>
    </div>
  </div>
</template>

<script>
import { EYE, EYEBROWS } from "./components/NiceAvatar/types";
import NiceAvatar from "./components/NiceAvatar/NiceAvatar";

export default {
  name: "App",
  components: {
    NiceAvatar,
  },
  data() {
    return {
      eye: EYE.OVAL,
      eyeBrow: EYEBROWS.UP,
    };
  },
  computed: {
    eyes() {
      return Object.values(EYE);
    },
    eyeBrows() {
      return Object.values(EYEBROWS);
    },
  },
};
</script>
