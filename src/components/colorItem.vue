<template>
  <div
    class="colorItem"
    id="colorItem"
    :style="[
      { 'background-color': this.allColorValues[this.id] },
      colorInputValue == ''
        ? { 'bakcground-color': this.allColorValues[this.id] }
        : { 'background-color': colorInputValue },
    ]"
  >
    <div id="colorCode">
      {{
        colorInputValue == "" ? this.allColorValues[this.id] : colorInputValue
      }}
    </div>
    <input
      id="colorSel"
      type="color"
      ref="colorValueItem"
      :onchange="changeColor()"
      v-model="colorInputValue"
    />
  </div>
</template>
<script>
import store from "../store";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "colorItem",
  data() {
    return {
      colorInputValue: "",
      id: "",
    };
  },
  props:["colorId"],
  created() {
    this.id = this.colorId;
    this.colorInputValue = this.allColorValues[this.id];
  },
  methods: {
    ...mapActions(["changeSingleColor"]),
    changeColor() {
      store.dispatch("changeSingleColor", {
        id: this.id,
        colorInputValue: this.colorInputValue,
      });
    },
  },
  computed: {
    ...mapGetters(["allColorValues"]),
  },
  // watch: {
  //   colorInputValue: function (newValue, oldValue) {
  //     console.log(this.allColorValues[this.id]);
  //     console.log(newValue, oldValue);
  //   },
  // },
};
</script>
<style scoped>
#colorItem {
  position: relative;
  width: 33.35%;
  height: 40vh;
  background: var(--accent-color);
  border: 0.5rem solid #051433;
}
#colorSel {
  position: absolute;
  top: 0.4rem;
  right: 0.5rem;
  width: 3rem;
  cursor: pointer;
  border-radius: 2rem;
  box-shadow: 0 -20px 15px -10px var(--accent-color) inset,
    0 20px 15px -10px var(--accent-color) inset, 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
#colorCode {
  height: 2rem;
  padding-left: 0.5rem;
  font-size: 1.5rem;
  color: var(--accent-color);
  background-color: var(--light-color);
}
input[type="color"] {
  -webkit-appearance: none;
  border: none;
}
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
input[type="color"]::-webkit-color-swatch {
  border: 0.05rem solid var(--accent-color);
  border-radius: 0.1rem;
  border-style: groove;
}
@media only screen and (max-width: 680px) {
  #colorItem {
    width: 100%;
    height: 26.66vh;
    border: 0.3rem solid #051433;
  }
  #colorCode {
    height: 2rem;
    padding-left: 0.5rem;
    font-size: 1.2rem;
    color: var(--accent-color);
  }
  #colorSel {
    position: absolute;
    top: 0.3rem;
    right: 0.5rem;
  }
}
</style>
