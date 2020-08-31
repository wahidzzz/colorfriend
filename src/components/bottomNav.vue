<template>
  <div id="bottomNav" class="bottomNav">
    <div id="heart" title="like" @click="likedPalette">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 391.837 391.837"
        style="enable-background:new 0 0 391.837 391.837;"
        xml:space="preserve"
      >
        <g>
          <path
            d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58
		c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0
		c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
          />
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    </div>
    <div id="copy" title="quick copy to clipboard" @click="copyPalette">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 477.867 477.867"
        style="enable-background:new 0 0 477.867 477.867;"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              d="M341.333,85.333H51.2c-28.277,0-51.2,22.923-51.2,51.2v290.133c0,28.277,22.923,51.2,51.2,51.2h290.133
			c28.277,0,51.2-22.923,51.2-51.2V136.533C392.533,108.256,369.61,85.333,341.333,85.333z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M426.667,0h-307.2c-28.124-0.001-50.984,22.684-51.2,50.807c0,0.137,0,0.256,0,0.393h273.067
			c47.105,0.056,85.277,38.228,85.333,85.333V409.6c0.137,0,0.256,0,0.393,0c28.124-0.216,50.808-23.076,50.807-51.2V51.2
			C477.867,22.923,454.944,0,426.667,0z"
            />
          </g>
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    </div>
    <button id="prevButton" title="Get Previous random palette">Previous</button>
    <button id="ranButton" title="Generate random palettes" @click="setColors">Random Generate</button>
    <form>
      <div id="saveName">
        <label for="name">Name :</label>
        <input
          type="text"
          id="name"
          placeholder="color name to save"
          title="name to be saved"
          v-model="colorName"
        />
      </div>
      <select name="langSel" id="langSel" title="language options" v-model="selectedLang">
        <option value selected>Language</option>
        <option value="css">CSS</option>
        <option value="Less">less</option>
        <option value="python">Python</option>
        <option value="js">JS</option>
        <option value="plain">Plain Text</option>
      </select>
      <button id="copyWithLang" @click="copyWithLang" title="copy with language syntax">Copy</button>
      <button id="downloadAsFile" @click="createPDF">Download</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import jsPDF from "jspdf";
export default {
  name: "bottomNav",
  data() {
    return {
      colorName: "",
      selectedLang: "",
    };
  },
  methods: {
    ...mapActions(["setColors"]),
    copyPalette() {
      this.$copyText(this.allColorValues);
      this.$toasted.show("Copied !", {
        theme: "bubble",
        className: "toastElement",
        containerClass: "toastContainer",
        position: "bottom-right",
        duration: 3000,
      });
    },
    createPDF() {
      var selectedLang = this.selectedLang == "" ? "plain" : this.selectedLang;
      var saveColorName =
        this.colorName == ""
          ? "colorfriend-color-palette" + this.selectedLang
          : "colorfriend-" + this.colorName + this.selectedLang;
      console.log(selectedLang, saveColorName);
      var doc = new jsPDF();
      doc.setFont("poppins", "normal");
      doc.text("colorfriend color-palette", 50, 20);
      doc.text(saveColorName + "", 50, 40);
      var y = 40;
      this.allColorValues.forEach((color) => {
        doc.text(color + "", 60, (y += 20));
      });
      doc.save("colorfriend-" + this.colorName + ".pdf");
    },
    copyWithLang() {
      console.log("");
    },
    likedPalette() {
      fetch("https://api.ipify.org?format=json")
        .then((x) => x.json())
        .then(({ ip }) => {
          if (localStorage.getItem("colorFriend") === null) {
            localStorage.setItem(
              "colorFriend",
              JSON.stringify({ userID: ip, colorPalette: {} })
            );
          }
          var colorFriendData = JSON.parse(localStorage.getItem("colorFriend"));
          colorFriendData.colorPalette[
            "color" + Date.now()
          ] += this.allColorValues;
          localStorage.setItem("colorFriend", JSON.stringify(colorFriendData));
        });
    },
  },
  computed: {
    ...mapGetters(["allColorValues"]),
  },
};
</script>
<style scoped>
#bottomNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  height: 10%;
  width: 100vw;
  background-color: var(--dark-color);
}
#heart,
#heart svg,
#copy,
#copy svg {
  height: 1.5rem;
  width: 1.5rem;
  background: transparent;
  fill: var(--background-color);
  transition: fill 0.5s;
}
#copy svg:hover,
#heart svg:hover {
  cursor: pointer;
  fill: var(--accent-color);
}
form {
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-color);
}
/* form #downloadAsFile {
  margin-left: 0.5rem;
  border-left: 0.02rem solid var(--accent-color);
  border-radius: 0;
} */
#saveName input {
  background-color: var(--light-color);
  height: 2rem;
  padding: 0.5rem;
  outline: none;
  border: none;
  border-bottom: 0.2rem solid transparent;
  color: var(--accent-color);
  font-size: 1rem;
  transition: border 0.2s ease-in;
}
#saveName input:hover,
input:focus {
  border-bottom: 0.2rem solid var(--accent-color);
}
#saveName label {
  background-color: var(--dark-color);
  color: var(--accent-color);
  font-size: 1.2rem;
  padding: 1rem;
  border: none;
}
#langSel {
  width: 8rem;
  height: 2rem;
  font-size: 1rem;
  padding: 0.2rem;
  color: var(--accent-color);
  background-color: var(--light-color);
  border: none;
  outline: none;
  border-radius: 0.2rem;
}
#ranButton,
#downloadAsFile,
#prevButton,
#copyWithLang {
  height: 2rem;
  padding: 1rem;
  padding-top: 0.2rem;
  text-align: center;
  font-size: 1rem;
  background-color: var(--light-color);
  color: var(--accent-color);
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: color, background 0.5s ease-in-out;
}
#ranButton:hover {
  color: var(--light-color);
  background: var(--accent-color);
}
@media only screen and (max-width: 768px) {
  #bottomNav {
    display: flex;
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
  }
}
</style>
