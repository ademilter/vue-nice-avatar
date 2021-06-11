<template>
  <div>
    <NiceAvatar
      size="230"
      :base="base"
      :eye="eye"
      :eye-brow="eyeBrow"
      :ear="ear"
      :earring="earring"
      :mouth="mouth"
    />

    <div class="options">
      <div>
        <h4>Base</h4>
        <div>
          <label v-for="value in baseValues" :key="value">
            <input type="radio" name="base" :value="value" v-model="base" />
            {{ value }}
          </label>
          <label>
            <input type="color" name="base" v-model="base" />
            custom
          </label>
        </div>
      </div>

      <div>
        <h4>Eyes</h4>
        <div>
          <label v-for="value in eyesValues" :key="value">
            <input type="radio" name="eye" :value="value" v-model="eye" />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Eyebrows and Eyelashes</h4>
        <div>
          <label v-for="value in eyeBrowsValues" :key="value">
            <input
              type="radio"
              name="eyeBrows"
              :value="value"
              v-model="eyeBrow"
            />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Ear</h4>
        <div>
          <label v-for="value in earValues" :key="value">
            <input type="radio" name="ear" :value="value" v-model="ear" />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Earring</h4>
        <div>
          <label v-for="value in earringValues" :key="value">
            <input
              type="radio"
              name="earring"
              :value="value"
              v-model="earring"
            />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Mouth</h4>
        <div>
          <label v-for="value in mouthValues" :key="value">
            <input type="radio" name="earring" :value="value" v-model="mouth" />
            {{ value }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BASE,
  EYES,
  EYEBROWS,
  EAR,
  EARRING,
  MOUTH,
} from "./components/NiceAvatar/types";
import NiceAvatar from "./components/NiceAvatar/NiceAvatar";

export default {
  name: "App",
  components: {
    NiceAvatar,
  },
  data() {
    return {
      base: BASE.LIGHT,
      eye: EYES.OVAL,
      eyeBrow: EYEBROWS.EYEBROWS_UP,
      ear: EAR.SMALL,
      earring: EARRING.HOOP,
      mouth: MOUTH.LAUGHING,
    };
  },
  computed: {
    baseValues() {
      return Object.values(BASE);
    },
    eyesValues() {
      return Object.values(EYES);
    },
    eyeBrowsValues() {
      return Object.values(EYEBROWS);
    },
    earValues() {
      return Object.values(EAR);
    },
    earringValues() {
      return Object.values(EARRING);
    },
    mouthValues() {
      return Object.values(MOUTH);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-family: sans-serif;
}
body {
  padding: 30px;
}
.options {
  display: grid;
  grid-gap: 20px;
}
.options > div {
  display: grid;
  grid-gap: 10px;
}

label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
