<template>
  <div id="#mainBody">
    <div class="row-sm">
      <div id="row" class="col-sm">
        <colorItem :colorValue="allColorValues[0]" @changeColor="changeColor" />
        <colorItem :colorValue="allColorValues[1]" @changeColor="changeColor" />
        <colorItem :colorValue="allColorValues[2]" @changeColor="changeColor" />
      </div>
      <div id="row" class="col-sm">
        <colorItem :colorValue="allColorValues[3]" @changeColor="changeColor" />
        <colorItem :colorValue="allColorValues[4]" @changeColor="changeColor" />
        <colorItem :colorValue="allColorValues[5]" @changeColor="changeColor" />
      </div>
    </div>
  </div>
</template>
<script>
import colorItem from "./colorItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "mainBody",
  components: {
    colorItem,
  },
  methods: {
    ...mapActions(["setColors"]),
    changeColor(id, colorInputValue) {
      this.$emit("changeColor", id, colorInputValue);
    },
  },
  computed: {
    ...mapGetters(["allColorValues"]),
  },
  watch: {
    allColorValues: function (val) {
      console.log(val);
    },
  },
  created() {
    this.setColors();
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
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #row {
    margin-top: 10vh;
  }
  .row-sm {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .col-sm {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
}
</style>
