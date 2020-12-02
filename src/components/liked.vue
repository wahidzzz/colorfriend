<template>
  <div id="liked">
    <body>
            <headerNav/>
    </body>
  </div>
</template>

<script>
import headerNav from "../components/headerNav"
export default {
    name: "liked",
    components:{
        headerNav,
    }
//     data() {
//       return {
//         colorData : JSON.parse(localStorage.colorFriend),
//         colArr :this.colorData.colorPalette,
//         colName : [],
//         colVal :[],
//         columns:"",
//         rowNum : this.colName.length / 3,
//       };
//     },
//     methods:{
//       addCols(rowNumber = 0) {
//         for (let i = rowNumber; i < this.colName.length; i++) {
//             this.columns.innerHTML +=
//                 `<div class="column">
//                 <div class="card">
//                     <header class="card-header">
//                         <p class="card-header-title">
//                             ${this.colName[i]}
//                         </p>
//                         <a href="#" class="card-header-icon" aria-label="more options">
//                             <span class="icon">
//                                 <i class="fas fa-angle-down" aria-hidden="true"></i>
//                             </span>
//                         </a>
//                     </header>
//                     <div class="card-content">
//                         <div class="content">
//                             <div class="columns is-mobile is-desktop">
//                                 <div class="column is-one-third" style="background:${this.colVal[i][0]};">${this.colVal[i][0]}</div>
//                                 <div class="column is-one-third" style="background:${this.colVal[i][1]};">${this.colVal[i][1]}</div>
//                                 <div class="column is-one-third" style="background:${this.colVal[i][2]};">${this.colVal[i][2]}</div>
//                             </div>
//                             <div class="columns is-mobile is-desktop">
//                                 <div class="column is-one-third" style="background:${this.colVal[i][3]};">${this.colVal[i][3]}</div>
//                                 <div class="column is-one-third" style="background:${this.colVal[i][4]};">${this.colVal[i][4]}</div>
//                                 <div class="column is-one-third" style="background:${this.colVal[i][5]};">${this.colVal[i][5]}</div>
//                             </div>
//                         </div>
//                     </div>
//                     <footer class="card-footer">
//                         <a href="#" class="card-footer-item">Save</a>
//                         <a href="#" class="card-footer-item">Delete</a>
//                     </footer>
//                 </div>
//             </div>`;
//         }

//       }
//     },
//     created() {
//         // var colorData = JSON.parse(localStorage.colorFriend);
//         // var colArr = colorData.colorPalette;
//         // var colName = [];
//         // var colVal = [];
//         for (var i in this.colArr) {
//             this.colName.push(i);
//             this.colVal.push(this.colorData.colorPalette[i]);
//         }
//         for (let row = 0; row < this.rowNum; row++) {
//             var liked=document.getElementById("liked");
//             var rowVal = document.createElement("div");
//             rowVal.setAttribute("class", `row${row}`);
//             rowVal.innerHTML += ` <div id="columns${row}" class="columns is-desktop"></div>`;
//             liked.appendChild(rowVal);
//             this.columns = document.getElementById(`columns${row}`);
//             this.addCols(row);
//         }
//   },

};
</script>

<style scoped>
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

        }

        body,
        html {
            background-color: var(--dark-color);
        }

        .card {
            background-color: var(--background-color);
            border-radius: .5em;
            margin: 1rem;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.30), 0 15px 10px rgba(0, 0, 0, 0.15);
        }

        .card-content {
            color: var(--accent-color);
        }


        .row {
            padding: .5em;
            border-radius: .5em;
        }
</style>