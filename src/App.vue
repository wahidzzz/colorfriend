<template>
  <div id="app">
    <headerNav />
    <mainBody
      :colorValues="colorValues"
      @changeColor="changeColor"
      v-model="colorValues"
    />
    <bottomNav
      @copyColorCodes="copyPalette"
      :colorValues="colorValues"
      @randomColor="randomColor"
    />
  </div>
</template>

<script>
import Vue from "vue";
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
    };
  },
  methods: {
    setColorValues(colorValue) {
      if (colorValue.length == 0) {
        this.colorValues = [
          "#ffeded",
          "#000000",
          "#eeeeee",
          "#111111",
          "#efefef",
          "#ff0000",
        ];
      } else {
        this.colorValues = colorValue;
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
    randomColor(randomColor) {
      this.colorValues[0] = "#" + randomColor;
      this.setColorValues(this.colorValues);
    },
  },
  created() {
    this.setColorValues(this.colorValues);
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
</style>
