<template>
  <div class="screen">
    <div class="avatar">
      <NiceAvatar
        ref="niceAvatar"
        :size="size"
        :face-color="faceColor"
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
        <input id="range" type="range" min="60" max="250" v-model="size" />
      </div>
      <div class="buttons">
        <button type="button" class="random-btn" @click="random">
          <svg
            class="svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          <span>Random</span>
        </button>
        <button type="button" @click="getPng" class="saveimg-btn">
          <svg
            class="svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
          <span>Save as PNG</span>
        </button>
        <a
          target="_blank"
          class="github-btn"
          href="https://github.com/ademilter/vue-nice-avatar"
        >
          <svg fill="#fff" class="svg" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          <span>Github</span>
        </a>
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
        <h4>Face</h4>
        <div>
          <label v-for="value in FACE_COLORS" :key="value">
            <input
              type="radio"
              name="face"
              :value="value"
              v-model="faceColor"
            />
            {{ value }}
          </label>
          <label>
            <input type="color" name="face" v-model="faceColor" />
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
      faceColor: FACE_COLORS[0],
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
      FACE_COLORS,
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
      this.faceColor = this.getRandom(FACE_COLORS);
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
  max-width: 1000px;
  margin: 40px auto;
  background-color: hsl(216, 32%, 9%);
  color: white;
  padding: 0 20px;
}

.screen {
  display: grid;
  grid-gap: 20px;
  border: 5px solid #6a5acd;
  -webkit-box-shadow: 0px 0px 20px 2px rgba(106, 90, 205, 1);
  -moz-box-shadow: 0px 0px 20px 2px rgba(106, 90, 205, 1);
  box-shadow: 0px 0px 20px 2px rgba(106, 90, 205, 1);
  border-radius: 15px;
  padding: 40px;
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

.avatar svg {
  border-radius: 50%;
  padding: 1px;
  -webkit-box-shadow: 0px 0px 12px 2px rgba(106, 90, 205, 1);
  -moz-box-shadow: 0px 0px 12px 2px rgba(106, 90, 205, 1);
  box-shadow: 0px 0px 12px 2px rgba(106, 90, 205, 1);
}

.options {
  display: grid;
  grid-gap: 20px;
  justify-content: space-between;
}

.options > div {
  display: grid;
  grid-gap: 10px;
}

label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-right: 16px;
  margin-bottom: 10px;
}

/**********************************************/

input[type="radio"] {
  appearance: none;
  width: 23px;
  height: 23px;
  min-width: 23px;
  border: 1px solid #6a5acd;
  margin-right: 6px;
  position: relative;
}

input[type="radio"]::before {
  content: "";
  width: 14px;
  height: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.7);
  position: absolute;
  opacity: 0;
  background-color: rgb(69, 53, 173);
  transition: 300ms all;
}

input[type="radio"]:checked::before {
  opacity: 1;
  transform: translate(-50%, -50%);
}

/**********************************************/

input[type="color"] {
  width: 50px;
  height: 25px;
  outline: none;
  border: 3px solid slateblue;
}

/**********************************************/

button {
  padding: 4px 6px;
}

.buttons {
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

/**********************************************/

.github-btn {
  background-color: hsl(216, 84%, 52%);
  color: white;
  padding: 0 20px;
  height: 35px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  transition: 300ms background-color;
  font-size: 15px;
  font-weight: 500;
}
.github-btn:hover {
  background-color: hsla(216, 84%, 52%, 0.466);
}

/**********************************************/

.random-btn,
.saveimg-btn {
  background-color: hsl(262, 89%, 71%);
  border: none;
  color: white;
  padding: 0 20px;
  height: 35px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  transition: 300ms background-color;
}
.saveimg-btn:hover {
  background-color: hsla(262, 89%, 71%, 0.438);
}
.random-btn:hover {
  background-color: hsla(262, 89%, 71%, 0.438);
}
/**********************************************/

.svg {
  width: 19px;
  min-width: 19px;
  height: 19px;
  margin-right: 9px;
}

/**********************************************/

#range {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background: slateblue;
  color: red;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>
