<template>
  <div id="#mainBody">
    <div class="columns is-desktop is-mobile is-vcentered">
      <div class="column is-half">
        <colorItem colorId="0" />
        <colorItem colorId="1" />
        <colorItem colorId="2" />
      </div>
      <div class="column is-half">
        <colorItem colorId="3" />
        <colorItem colorId="4" />
        <colorItem colorId="5" />
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
  min-height:80vh;
  height: 80%;
}
.columns{
  height: 80%;
  position: absolute;
  top: 9.8vh;
  width: 100vw;
  max-width:100%;
  margin: 0;
  padding: 0;
}
.column{
  height: 100%;
  max-height:100%;
  margin: 0;
  padding:0;
}
/* #row {
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
  /* #row { 
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
} */
</style>
