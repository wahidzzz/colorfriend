<template>
  <div id="#mainBody">
    <div class="row-sm">
      <div id="row" class="col-sm">
        <colorItem />
        <colorItem />
        <colorItem />
      </div>
      <div id="row" class="col-sm">
        <colorItem />
        <colorItem />
        <colorItem />
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
  },
  computed: {
    ...mapGetters(["allColorValues"]),
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

  #mainBody{
    z-index:-1;
  }
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
