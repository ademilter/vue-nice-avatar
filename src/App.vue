<template>
  <div class="screen">
    <div class="avatar" >
      <NiceAvatar
        id="NiceAvatar" 
        :size="size"
        :base="base"
        :eye="eye"
        :eye-brow="eyeBrow"
        :ear="ear"
        :earring="earring"
        :mouth="mouth"
        :hair="hair"
        :nose="nose"
        :glasses="glasses"
        :beard="beard"
        :beard-color="beardColor"
        :shirt="shirt"
        :bg-color="bgColor"
      />
    </div>

    <div class="options">
      <div>
        <input type="range" min="60" max="250" v-model="size" />
      </div>
      <div>
        <button type="button" @click="random">Random</button>
        <button type="button" @click="getpng">Export as PNG</button>
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
  COLORS,
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
      size: null,
      base: BASE.LIGHT,
      eye: EYES.OVAL,
      eyeBrow: EYEBROWS.EYEBROWS_UP,
      ear: EAR.SMALL,
      earring: EARRING.NONE,
      mouth: MOUTH.LAUGHING,
      hair: HAIR.FONZA,
      nose: NOSE.CURVE,
      glasses: GLASSES.NONE,
      beard: BEARD.NONE,
      beardColor: "#a56d55",
      shirt: SHIRT.COLLARED,
      bgColor: COLORS.SEASHELL,
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
      this.bgColor = this.getRandom(Object.values(COLORS));
      this.base = this.getRandom([COLORS.APRICOT, COLORS.COAST]);
      this.beard = this.getRandom(Object.values(BEARD));
      this.beardColor = this.getRandom([COLORS.APRICOT, COLORS.COAST]);
      this.eye = this.getRandom(Object.values(EYES));
      this.eyeBrow = this.getRandom(Object.values(EYEBROWS));
      this.ear = this.getRandom(Object.values(EAR));
      this.earring = this.getRandom(Object.values(EARRING));
      this.mouth = this.getRandom(Object.values(MOUTH));
      this.hair = this.getRandom(Object.values(HAIR));
      this.nose = this.getRandom(Object.values(NOSE));
      this.glasses = this.getRandom(Object.values(GLASSES));
      this.shirt = this.getRandom(Object.values(SHIRT));
    },
    getRandom(list) {
      return list[Math.floor(Math.random() * list.length)];
    },
    async getpng(){
      const opts = {
        scale: 1,
        encoderOptions: 1
        }

      const data = document.getElementById('NiceAvatar'); 

      return await saveSvgAsPng(data,"NiceAvatar",opts);


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
</style>
