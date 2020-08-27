<template>
  <div
    class="colorItem"
    id="colorItem"
    :style="[{'background-color':colorValue},colorInputValue=='' ? { 'bakcground-color': colorValue } : { 'background-color': colorInputValue }]"
  >
    <div id="colorCode">{{colorInputValue==""? colorValue:colorInputValue}}</div>
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
export default {
  name: "colorItem",
  props: ["colorValue"],
  data() {
    return {
      colorInputValue: this.colorValue,
      id: "",
    };
  },
  created() {
    this.id = this._uid - 4;
  },
  methods: {
    changeColor() {
      this.$emit("changeColor", this.id, this.colorInputValue);
    },
  },
};
</script>
<style scoped>
#colorItem {
  position: relative;
  width: 33.35%;
  height: 40vh;
  background: var(--accent-color);
  /* border: 0.5rem solid #051433; */
}
#colorSel {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 3rem;
  cursor: pointer;
  border-radius: 2rem;
  box-shadow: 0 -20px 15px -10px rgba(255, 255, 0, 0.3) inset,
    0 20px 15px -10px rgba(255, 255, 0, 0.3) inset, 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
#colorCode {
  margin: 0;
  position: absolute;
  top: 15vh;
  left: 30%;
  font-size: 2.5rem;
  color: var(--accent-color);
  background-color: transparent;
}
/* #editIcon {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  background: white;
  cursor: pointer;
} */
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
</style>
