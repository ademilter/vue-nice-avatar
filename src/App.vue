<template>
  <div class="screen">
    <div class="avatar">
      <NiceAvatar
        ref="niceAvatar"
        :size="size"
        :base="base"
        :eye="eye"
        :eye-brow="eyeBrow"
        :ear="ear"
        :earring="earring"
        :mouth="mouth"
        :hair="hair"
        :hair-color="hairColor"
        :nose="nose"
        :glasses="glasses"
        :beard="beard"
        :beard-color="beardColor"
        :shirt="shirt"
        :shirt-color="shirtColor"
        :bg-color="bgColor"
      />
    </div>

    <div class="options">
      <div>
        <input type="range" min="60" max="250" v-model="size" />
      </div>
      <div class="buttons">
        <button type="button" @click="random">Random</button>
        <button type="button" @click="getPng">Save as PNG</button>
        <a target="_blank" href="https://github.com/ademilter/vue-nice-avatar"
          >Github</a
        >
      </div>

      <div>
        <h4>Background Color</h4>
        <div>
          <label>
            <input type="color" name="bgColor" v-model="bgColor" />
          </label>
        </div>
      </div>

      <div>
        <h4>Base</h4>
        <div>
          <label v-for="value in baseValues" :key="value">
            <input type="radio" name="base" :value="value" v-model="base" />
            {{ value }}
          </label>
          <label>
            <input type="color" name="base" v-model="base" />
          </label>
        </div>
      </div>

      <div>
        <h4>Beard</h4>
        <div>
          <label v-for="value in beardValues" :key="value">
            <input type="radio" name="beard" :value="value" v-model="beard" />
            {{ value }}
          </label>
          <label>
            <input type="color" name="beardColor" v-model="beardColor" />
          </label>
        </div>
      </div>

      <div>
        <h4>Eyes</h4>
        <div>
          <label v-for="value in eyesValues" :key="value">
            <input type="radio" name="eyes" :value="value" v-model="eye" />
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
            <input type="radio" name="mouth" :value="value" v-model="mouth" />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Hair</h4>
        <div>
          <label v-for="value in hairValues" :key="value">
            <input type="radio" name="hair" :value="value" v-model="hair" />
            {{ value }}
          </label>
          <label>
            <input type="color" name="hairColor" v-model="hairColor" />
          </label>
        </div>
      </div>

      <div>
        <h4>Nose</h4>
        <div>
          <label v-for="value in noseValues" :key="value">
            <input type="radio" name="nose" :value="value" v-model="nose" />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Glasses</h4>
        <div>
          <label v-for="value in glassesValues" :key="value">
            <input
              type="radio"
              name="glasses"
              :value="value"
              v-model="glasses"
            />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Shirt</h4>
        <div>
          <label v-for="value in shirtValues" :key="value">
            <input type="radio" name="shirt" :value="value" v-model="shirt" />
            {{ value }}
          </label>
          <label>
            <input type="color" name="shirtColor" v-model="shirtColor" />
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
  HAIR,
  NOSE,
  GLASSES,
  BEARD,
  SHIRT,
  SHIRT_COLORS,
  BG_COLORS,
  FACE_COLORS,
  HAIR_COLORS,
  BEARD_COLORS,
} from "./components/NiceAvatar/types";
import NiceAvatar from "./components/NiceAvatar/NiceAvatar";
import { saveSvgAsPng } from "save-svg-as-png";

export default {
  name: "App",
  components: {
    NiceAvatar,
  },
  data() {
    return {
      size: 250,
      base: BASE.LIGHT,
      eye: EYES.OVAL,
      eyeBrow: EYEBROWS.EYEBROWS_UP,
      ear: EAR.SMALL,
      earring: EARRING.NONE,
      mouth: MOUTH.LAUGHING,
      hair: HAIR.FONZA,
      hairColor: HAIR_COLORS[0],
      nose: NOSE.CURVE,
      glasses: GLASSES.NONE,
      beard: BEARD.NONE,
      beardColor: BEARD_COLORS[0],
      shirt: SHIRT.COLLARED,
      shirtColor: SHIRT_COLORS[0],
      bgColor: BG_COLORS[0],
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
    hairValues() {
      return Object.values(HAIR);
    },
    noseValues() {
      return Object.values(NOSE);
    },
    glassesValues() {
      return Object.values(GLASSES);
    },
    beardValues() {
      return Object.values(BEARD);
    },
    shirtValues() {
      return Object.values(SHIRT);
    },
  },
  mounted() {
    this.random();
  },
  methods: {
    random() {
      this.bgColor = this.getRandom(BG_COLORS);
      this.base = this.getRandom(FACE_COLORS);
      this.beard = this.getRandom(Object.values(BEARD));
      this.beardColor = this.getRandom(BEARD_COLORS);
      this.eye = this.getRandom(Object.values(EYES));
      this.eyeBrow = this.getRandom(Object.values(EYEBROWS));
      this.ear = this.getRandom(Object.values(EAR));
      this.earring = this.getRandom(Object.values(EARRING));
      this.mouth = this.getRandom(Object.values(MOUTH));
      this.hair = this.getRandom(Object.values(HAIR));
      this.hairColor = this.getRandom(HAIR_COLORS);
      this.nose = this.getRandom(Object.values(NOSE));
      this.glasses = this.getRandom(Object.values(GLASSES));
      this.shirt = this.getRandom(Object.values(SHIRT));
      this.shirtColor = this.getRandom(SHIRT_COLORS);
    },
    getRandom(list) {
      return list[Math.floor(Math.random() * list.length)];
    },
    async getPng() {
      const opts = {
        scale: 1,
        encoderOptions: 1,
      };
      const $el = this.$refs.niceAvatar.$el;
      return await saveSvgAsPng($el, "nice-avatar", opts);
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

.screen {
  display: grid;
  grid-gap: 20px;
}

@media (min-width: 700px) {
  .screen {
    grid-template-columns: 260px 1fr;
  }
}

.avatar {
  position: sticky;
  top: 30px;
  display: flex;
  justify-content: center;
}

.options {
  display: grid;
  grid-gap: 20px;
  justify-items: flex-start;
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

button {
  padding: 4px 6px;
}

.buttons {
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  align-items: center;
}
</style>
