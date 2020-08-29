<template>
  <div id="app">
    <headerNav />
    <mainBody :colorValues="colorValues" @changeColor="changeColor" v-model="colorValues" />
    <bottomNav
      @copyColorCodes="copyPalette"
      :colorValues="colorValues"
      @randomColor="setColorValues"
    />
  </div>
</template>

<script>
import Vue from "vue";
import convert from "color-convert";
import headerNav from "./components/headerNav";
import mainBody from "./components/mainBody";
import bottomNav from "./components/bottomNav";
import VueClipboard from "vue-clipboard2";
import Toasted from "vue-toasted";
Vue.use(VueClipboard);
Vue.use(Toasted);
export default {
  name: "App",
  components: {
    headerNav,
    mainBody,
    bottomNav,
  },
  data() {
    return {
      colorValues: [],
      randomColorVal: "#" + Math.floor(Math.random() * 25000000).toString(16),
    };
  },
  methods: {
    setColorValues(randomColor) {
      if (this.colorValues.length == 0 && this.randomColorVal != "") {
        var genRandomColor = Math.floor(Math.random() * 16777215).toString(16);
        genRandomColor = convert.rgb.hex(
          convert.hex.rgb(genRandomColor)[0] - 60 < 0
            ? convert.hex.rgb(genRandomColor)[0] + 60
            : convert.hex.rgb(genRandomColor)[0] + 60 > 255
            ? convert.hex.rgb(genRandomColor)[0] - 60
            : convert.hex.rgb(genRandomColor)[0],
          convert.hex.rgb(genRandomColor)[1] - 60 < 0
            ? convert.hex.rgb(genRandomColor)[1] + 60
            : convert.hex.rgb(genRandomColor)[1] + 60 > 255
            ? convert.hex.rgb(genRandomColor)[1] - 60
            : convert.hex.rgb(genRandomColor)[1],
          convert.hex.rgb(genRandomColor)[2] - 60 < 0
            ? convert.hex.rgb(genRandomColor)[2] + 60
            : convert.hex.rgb(genRandomColor)[2] + 60 > 255
            ? convert.hex.rgb(genRandomColor)[2] - 60
            : convert.hex.rgb(genRandomColor)[2]
        );
        var genCompColor = convert.hsl.hex(
          convert.hex.hsl(genRandomColor)[0] + 180,
          convert.hex.hsl(genRandomColor)[1],
          convert.hex.hsl(genRandomColor)[2]
        );

        this.colorValues[0] =
          "#" +
          convert.rgb.hex(
            convert.hex.rgb(genRandomColor)[0] - 60,
            convert.hex.rgb(genRandomColor)[1] - 60,
            convert.hex.rgb(genRandomColor)[2] - 60
          );
        this.colorValues[1] = "#" + genRandomColor;
        this.colorValues[2] =
          "#" +
          convert.rgb.hex(
            convert.hex.rgb(genRandomColor)[0] + 60,
            convert.hex.rgb(genRandomColor)[1] + 60,
            convert.hex.rgb(genRandomColor)[2] + 60
          );
        this.colorValues[3] =
          "#" +
          convert.rgb.hex(
            convert.hex.rgb(genCompColor)[0] - 60,
            convert.hex.rgb(genCompColor)[1] - 60,
            convert.hex.rgb(genCompColor)[2] - 60
          );
        this.colorValues[4] = "#" + genCompColor;
        this.colorValues[5] =
          "#" +
          convert.rgb.hex(
            convert.hex.rgb(genCompColor)[0] + 60,
            convert.hex.rgb(genCompColor)[1] + 60,
            convert.hex.rgb(genCompColor)[2] + 60
          );
      } else if (
        (this.colorValues.length != 0 || this.colorValues.length < 0) &&
        randomColor != ""
      ) {
        this.colorValues = [];
        for (let index = 0; index < 7; index++) {
          this.colorValues[index] =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
      } else {
        console.log("hell");
      }
    },
    changeColor(id, colorInputValue) {
      this.colorValues[id] = colorInputValue;
    },
    copyPalette() {
      this.$copyText(this.colorValues);
      this.$toasted.show("Copied !", {
        theme: "bubble",
        className: "toastElement",
        containerClass: "toastContainer",
        position: "bottom-right",
        duration: 3000,
      });
    },
  },
  created() {
    this.setColorValues(this.randomColorVal);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  --background-color: #dae1e7;
  --accent-color: #fdcb9e;
  --light-color: #27496d;
  --dark-color: #142850;
  --extra-color: #32e0c4;
  font-family: "Poppins", sans-serif;
  background-color: var(--light-color);
}
.toastContainer {
  margin-bottom: 2rem;
  margin-right: 13rem;
  background-color: transparent;
}
/* @media only screen and (max-width: 768px) {
  #app {
    width: 100%;
  }
} */
</style>
