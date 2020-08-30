import vuex from "vuex";
import vue from "vue";
import colorValues from "./modules/colorValues";
vue.use(vuex);
export default new vuex.Store({
  modules: {
    colorValues,
  },
});
