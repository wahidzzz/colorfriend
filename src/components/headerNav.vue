<template>
  <div id="headerNav">
    <div id="logo">
      color
      <span>Friend</span>
    </div>
    <div id="navLinks">
      <div>
        <a href="./liked-palettes">Liked Palettes</a>
      </div>
      <div>
        <a href="./how-it-works">How it works ?</a>
      </div>
      <div>
        <a href="https://www.patreon.com/wahid_zzz" target="_blank">
          <img src="../assets/patreon.svg" alt="patreon" title="support me on patreon" width="30" />
        </a>
      </div>
      <div>
        <a href="https://www.buymeacoffee.com/wahidzzz">
          <img
            src="../assets/buymeacoffee.svg"
            alt="buy me a coffee"
            title="buy me a coffee"
            width="30"
          />
        </a>
      </div>
      <div>
        <a href="https://github.com/wahidzzz/colorfriend" target="_blank" class="github">
          <img src="../assets/github.svg" alt="github" width="35" title="contribute on gitub" />
        </a>
      </div>
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
  position: absolute;
  right: -8rem;
  display: flex;
  width: 40vw;
  margin-right: 10rem;
  justify-content: space-between;
  align-items: center;
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
div:focus {
  border-bottom: 0.2rem solid var(--accent-color);
}
#navLinks div:active {
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
img {
  background-color: transparent;
}
@media only screen and (max-width: 768px) {
  #headerNav {
    display: flex;
    flex-direction: column;
    height: 20vh;
    justify-content: space-between;
  }
  #navLinks {
    display: flex;
  }
}
</style>