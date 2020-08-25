<template>
  <div id="headerNav">
    <div id="logo">
      color
      <span>Friend</span>
    </div>
    <div id="navLinks">
      <div>
        <a href="#">Liked Palettes</a>
      </div>
      <div>
        <a href="#">How it works ?</a>
      </div>
      <div>
        <a href="#">Contribute</a>
      </div>
    </div>
    <div id="box">
      <img src="../assets/github.svg" alt="github" width="35" />
    </div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
};
</script>

<style scoped>
#headerNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-color);
  padding: 2rem;
  height: 9%;
  max-height: 9%;
  width: 100vw;
  position: absolute;
  top: 0;
}
#navLinks {
  display: flex;
  width: 40vw;
  justify-content: space-evenly;
  background-color: transparent;
  text-transform: uppercase;
}
#navLinks div,
a {
  background-color: transparent;
  text-decoration: none;
  color: var(--accent-color);
  outline: none;
  border-bottom: 0.2rem solid transparent;
  transition: border 0.5s ease-in-out;
}
#navLinks div:hover,
div:focus,
a:hover,
a:focus {
  border-bottom: 0.2rem solid var(--accent-color);
}
#navLinks div:active,
a:active {
  border-bottom: 0.1rem solid var(--extra-color);
}
#logo {
  font-size: 1.5rem;
  font-weight: bolder;
  background-color: transparent;
  color: var(--accent-color);
}
#logo span {
  background-color: transparent;
  color: var(--extra-color);
  text-transform: lowercase;
  margin-left: -0.3rem;
}
#box {
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 4rem;
  background-color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>