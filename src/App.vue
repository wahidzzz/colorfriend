<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    fetch("https://api.ipify.org?format=json")
        .then((x) => x.json())
        .then(({ ip }) => {
          if (localStorage.getItem("colorFriend") === null) {
            localStorage.setItem(
              "colorFriend",
              JSON.stringify({ userID: ip, colorPalette: {} })
            );
          }});
  }
}
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
  /* background-color: var(--light-color); */
}
</style>