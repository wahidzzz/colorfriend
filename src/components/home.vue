<template>
  <div id="home">
    <headerNav />
    <mainBody />
    <bottomNav />
  </div>
</template>

<script>
import Vue from "vue";
import headerNav from "../components/headerNav";
import mainBody from "../components/mainBody";
import bottomNav from "../components/bottomNav";
import VueClipboard from "vue-clipboard2";
import Toasted from "vue-toasted";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(VueClipboard);
Vue.use(Toasted);
export default {
  name: "home",
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
  methods: {},
};
</script>

<style scoped>
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
