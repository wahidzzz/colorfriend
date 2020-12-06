<template>
  <div id="headerNav">
    <div id="logo">
      <router-link to="/" >
      color
      <span>Friend</span>
      </router-link>
    </div>
    <div id="navLinks">
      <div>
       <a><router-link to="liked-palettes" >Liked Palette</router-link></a>
      </div>
      <div>
        <a><router-link to="how-it-works" >How it works ?</router-link></a>
      </div>
      <div>
        <a  href="https://www.patreon.com/wahid_zzz" target="_blank">
          <img
            src="../assets/patreon.svg"
            alt="patreon"
            title="support me on patreon"
            width="30"
          />
        </a>
      </div>
      <div>
        <a  href="https://www.buymeacoffee.com/wahidzzz" target="_blank">
          <img
            src="../assets/buymeacoffee.svg"
            alt="buy me a coffee"
            title="buy me a coffee"
            width="30"
          />
        </a>
      </div>
      <div>
        <a  href="https://github.com/wahidzzz/colorfriend" target="_blank">
          <img
            src="../assets/github.svg"
            alt="github"
            width="35"
            title="contribute on github"
          />
        </a>
      </div>
    </div>
    <button class="ham" @click="toggleHamburger()"></button>
    <nav class="navbar">
      <ul>
        <div>
        <a class="menuLink"><router-link to="liked-palettes" >Liked Palette</router-link></a>
        </div>
        <div>
          <a class="menuLink"><router-link to="how-it-works" >How it works ?</router-link></a>
        </div>
        <div id="socialLinks">
          <div>
            <a class="menuLink" href="https://www.patreon.com/wahid_zzz" target="_blank">
              <img
                src="../assets/patreon.svg"
                alt="patreon"
                title="support me on patreon"
                width="30"
              />
            </a>
          </div>
          <div>
            <a class="menuLink" href="https://www.buymeacoffee.com/wahidzzz" target="_blank">
              <img
                src="../assets/buymeacoffee.svg"
                alt="buy me a coffee"
                title="buy me a coffee"
                width="30"
              />
            </a>
          </div>
          <div>
            <a  class="menuLink" href="https://github.com/wahidzzz/colorfriend" target="_blank">
              <img
                src="../assets/github.svg"
                alt="github"
                width="35"
                title="contribute on github"
              />
            </a>
          </div>
        </div>
        Copyright © 2019 by Wahid Shaikh <a href="https://webxera.xyz" target="_blank">@webxera</a>
      </ul>
      
    </nav>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  methods:{
    toggleHamburger(){
      var navbar = document.querySelector(".navbar")
      var ham = document.querySelector(".ham")
      navbar.classList.toggle("showNav")
      ham.classList.toggle("showClose")
    }
  }
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
  max-height: 10%;
  width: 100vw;
  max-width:100%;
  position: absolute;
  top: 0;
  z-index:120;
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
a{
  background-color: transparent;
  text-decoration: none;
  color: var(--accent-color);
  outline: none;
  border-bottom: 0.2rem solid transparent;
  transition: border 0.5s ease-in-out;
}
a:hover{
  color: var(--accent-color);
  cursor: pointer;
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
.ham,.navbar{
  display: none;
}
@media only screen and (max-width: 768px) {
  #headerNav{
    height:20vh;
  }
  #logo{
    font-size:1.4em;
  }
  #navLinks {
    display:none;
  }
  .ham,.navbar{
   display: flex;
  }
  .ham {
      position: absolute;
      /* always keep ham on top of everything */
      z-index: 1000;
      top: 20px;
      right: 20px;
      width: 36px;
      height: 36px;
      border: none;
      cursor: pointer;
      background-color: transparent;
      background-image: url("../assets/brushes.svg");
      background-size: 100%;
    }


    /* change ham image to close */
    .showClose {
      /* background-image: url("https://ljc-dev.github.io/testing0/ham-close.svg"); */
      background-image: url("../assets/eye-pencil.svg");
    }

    .navbar {
      z-index: 99;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      width: 100vw;
      height: 90vh;
      overflow: hidden;
      color: white;
      /* hide the menu above the screen by default */
      transform: translateY(-100%);
      /* transition adds a little animation when sliding in and out the menu */
      transition: transform 0.2s ease;
    }


    .showNav {
      /* show the menu */
      transform: translateY(0);
    }

    /* basic nav styling below */

    .navbar ul {
      width: 100%;
      height: 100%;
      list-style: none;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;
    }
    .navbar #socialLinks{
      display:flex;
      justify-content: space-between;
    }
    #socialLinks div{
      margin:2em;
    }
    /* .navbar ul li a {
      color: white;
      padding-bottom: 10px;
      border-bottom: 2px solid black;
      text-decoration: none;
      font-family: 'Open Sans', sans-serif;
      font-size: 1.2rem;
    }

    .navbar ul li a:hover, .navbar ul li a:focus {
      border-bottom: 2px solid white;
    } */

}
</style>
