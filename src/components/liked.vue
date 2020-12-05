<template>
  <div id="liked">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
       <headerNav></headerNav>
        <div id="likedBody">
            <h2 v-if="!this.rowNum" id="noLikeMsg">No Color Friends to Hangout with 😞, Heart your favorite Color Palettes 😃 </h2>
            <!-- <h4 v-for="row in this.rowNum" :key="row">{{row}}</h4> -->
            <div class="columns" v-if="this.colArr">
                <div v-for="(value, name) in this.colArr" :key="name">
                    <div class="column">
                        <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                {{name}}
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="columns is-mobile is-desktop">
                                    <div class="column is-one-third" :style="[{ 'background-color':value[0]}]">{{value[0]}}</div>
                                    <div class="column is-one-third" :style="[{ 'background-color':value[1]}]">{{value[1]}}</div>
                                    <div class="column is-one-third" :style="[{ 'background-color':value[2]}]">{{value[2]}}</div>

                                </div>
                                <div class="columns is-mobile is-desktop">
                                    <div class="column is-one-third" :style="[{ 'background-color':value[3]}]">{{value[3]}}</div>
                                    <div class="column is-one-third" :style="[{ 'background-color':value[4]}]">{{value[4]}}</div>
                                    <div class="column is-one-third" :style="[{ 'background-color':value[5]}]">{{value[5]}}</div>

                                </div>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="#" class="card-footer-item">Save</a>
                            <a href="#" class="card-footer-item">Delete</a>
                        </footer>
                    </div>
                </div>
                </div>
            </div>
       </div>
  </div>
</template>

<script>
import headerNav from "../components/headerNav";
export default {
    name: "liked",
    components:{
        headerNav,
    },
    data() {
      return {
        colorData :{},
        colArr :[],
        columns:"",
        rowNum :0,
      }
    },
    created() {
        this.colorData =JSON.parse(localStorage.getItem('colorFriend'));
        this.colArr =this.colorData.colorPalette;
        this.rowNum = Object.keys(this.colArr).length / 3;
  },

};
</script>
<style scoped>
#noLikeMsg{
    margin: .2em;
    padding:.2em;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100vw;
    color: var(--accent-color);
    font-size:2em;
}

#likedBody{
    position: absolute;
    top:10vh;
    height:90vh;
    width: 100vw;
     background-color: var(--light-color);
}
.card {
    background-color: var(--background-color);
    border-radius: .5em;
    margin: 1rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.30), 0 15px 10px rgba(0, 0, 0, 0.15);
}

.card-content {
    color: var(--accent-color);
    padding:1rem;
}
.card-header,.card-footer{
   background-color: var(--background-color);
}
.card-header-title,.card-footer-item{
    color:var(--dark-color);
}

.row {
    padding: .5em;
    border-radius: .5em;
}
</style>