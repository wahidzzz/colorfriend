<template>
  <div id="app">
    <headerNav />
    <mainBody />
    <bottomNav />
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
      // randomColorVal: "#" + Math.floor(Math.random() * 25000000).toString(16),
    };
  },
  methods: {},
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
