<template>
  <div id="#mainBody">
    <div id="row">
      <colorItem :colorValue="colorValues[0]" @changeColor="changeColor" />
      <colorItem :colorValue="colorValues[1]" @changeColor="changeColor" />
      <colorItem :colorValue="colorValues[2]" @changeColor="changeColor" />
    </div>
    <div id="row">
      <colorItem :colorValue="colorValues[3]" @changeColor="changeColor" />
      <colorItem :colorValue="colorValues[4]" @changeColor="changeColor" />
      <colorItem :colorValue="colorValues[5]" @changeColor="changeColor" />
    </div>
  </div>
</template>

<script>
import colorItem from "./colorItem";
export default {
  name: "mainBody",
  components: {
    colorItem,
  },
  props: ["colorValues"],
  methods: {
    changeColor(id, colorInputValue) {
      this.$emit("changeColor", id, colorInputValue);
    },
  },
};
</script>

<style scoped>
#mainBody {
  height: 80%;
}
#row {
  display: flex;
}
#row:first-child {
  margin-top: 10vh;
}
</style>