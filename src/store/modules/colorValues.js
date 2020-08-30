import convert from "color-convert";
const state = {
  colorValues: [],
};

const getters = {
  allColorValues: (state) => state.colorValues,
};

const actions = {
  setColors({ commit }) {
    if (
      state.colorValues.length == 0 ||
      state.colorValues.length != 0 ||
      state.colorValues.length < 0
    ) {
      var genRandomColor = Math.floor(Math.random() * 16777215).toString(16);
      genRandomColor = convert.rgb.hex(
        convert.hex.rgb(genRandomColor)[0] - 60 < 0
          ? convert.hex.rgb(genRandomColor)[0] + 60
          : convert.hex.rgb(genRandomColor)[0] + 60 > 255
          ? convert.hex.rgb(genRandomColor)[0] - 60
          : convert.hex.rgb(genRandomColor)[0],
        convert.hex.rgb(genRandomColor)[1] - 60 < 0
          ? convert.hex.rgb(genRandomColor)[1] + 60
          : convert.hex.rgb(genRandomColor)[1] + 60 > 255
          ? convert.hex.rgb(genRandomColor)[1] - 60
          : convert.hex.rgb(genRandomColor)[1],
        convert.hex.rgb(genRandomColor)[2] - 60 < 0
          ? convert.hex.rgb(genRandomColor)[2] + 60
          : convert.hex.rgb(genRandomColor)[2] + 60 > 255
          ? convert.hex.rgb(genRandomColor)[2] - 60
          : convert.hex.rgb(genRandomColor)[2]
      );
      var genCompColor = convert.hsl.hex(
        convert.hex.hsl(genRandomColor)[0] + 180,
        convert.hex.hsl(genRandomColor)[1],
        convert.hex.hsl(genRandomColor)[2]
      );

      state.colorValues[0] =
        "#" +
        convert.rgb.hex(
          convert.hex.rgb(genRandomColor)[0] - 60,
          convert.hex.rgb(genRandomColor)[1] - 60,
          convert.hex.rgb(genRandomColor)[2] - 60
        );
      state.colorValues[1] = "#" + genRandomColor;
      state.colorValues[2] =
        "#" +
        convert.rgb.hex(
          convert.hex.rgb(genRandomColor)[0] + 60,
          convert.hex.rgb(genRandomColor)[1] + 60,
          convert.hex.rgb(genRandomColor)[2] + 60
        );
      state.colorValues[3] =
        "#" +
        convert.rgb.hex(
          convert.hex.rgb(genCompColor)[0] - 60,
          convert.hex.rgb(genCompColor)[1] - 60,
          convert.hex.rgb(genCompColor)[2] - 60
        );
      state.colorValues[4] = "#" + genCompColor;
      state.colorValues[5] =
        "#" +
        convert.rgb.hex(
          convert.hex.rgb(genCompColor)[0] + 60,
          convert.hex.rgb(genCompColor)[1] + 60,
          convert.hex.rgb(genCompColor)[2] + 60
        );
    } else {
      console.log("hell");
    }
    console.log(state.colorValues);
    commit("setColors", state.colorValues);
  },
};

const mutations = {
  setColors: (state, colorValues) => (state.colorValues = colorValues),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
