<script>
// import { GiMoon } from "oh-vue-icons/icons";
// export default {
//    components: {
//       GiMoon
//    }
// }
// addIcons(GiMoon);

export default {
   created(){
      this.showSidebar = this.$store.getters.getShowSidebar;
   },
  
   data() {
      return {
         isState: false,
         value: '',
         buttonMsg:"X",
         showSidebar: true

      }
   },
   methods: {
      HandleClick() {
         this.isState = !this.isState
      },
      yoz() {
         this.value = "TEMUR";
      },
      handleShow(){
         this.$store.commit("handleShowSidebar", !this.showSidebar)
         this.showSidebar = this.$store.getters.getShowSidebar
         if(this.showSidebar){
            this.buttonMsg = "-"
         }else{
            this.buttonMsg = "X"
         }
      }

   }
}
</script>
<template>
   <div class="row nav-btn-check justify-content-between align-center align-content-center d-lg-none">
      <div class="col-auto">
         <a href="#!" class="brands "><img src="https://laravel.com/img/logomark.min.svg" alt=""> Laravel</a>
      </div>
      <div class="col-auto">
         <button class="navBars" @click="handleShow">
            {{this.$store.getters.getShowSidebar ? "✖️" : "➖" }}
         </button>
      </div>
   </div>
   <div class="row media992 justify-content-between border-bottom">
      <div class="col-auto cursor-pointer" @click="HandleClick">
         <h5 class="search-btn">Search</h5>
      </div>
      <div class="col-auto">
         <select name="" id="">
            <option value="">9.x</option>
            <option value="">9.x</option>
            <option value="">9.x</option>
            <option value="">9.x</option>
            <option value="">9.x</option>
            <option value="">9.x</option>
            <option value="">9.x</option>
            <option value="">9.x</option>
            <option value="">9.x</option>
            <option value="">9.x</option>
         </select>

      </div>
   </div>
   <main v-show="isState">
      <div class="container-fluid">
         <div class="row justify-content-end">
            <div class="col-auto">
               <button @click="HandleClick" class="btn-close">✖️</button>
            </div>
         </div>
         <div class="row justify-content-center mt-5">
            <div class="col-md-6">
               <div class="searchCard">
                  <input class="InpSearch" type="search" v-model="value" name="" id=""
                     placeholder="Search Docs (Press '/')">
               </div>
               <div class="card">
                  <a href="#!" class="search-result">
                     <h5 @click="yoz">Eloquent ORM {{value}}</h5>

                     <a href="" class="name mt-2"><span class="hashtag">#</span>Lorem ipsum dolor sit.</a>
                     <hr>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>
<style scoped>
.navBars{
   border: none;
    color: #FF2D20;
    font-weight: 900;
    font-size: 22px;
    padding: 3px 12px;
    border-radius: 9px;
}
.brands {
   padding-right: 4rem;

   color: #FF2D20;
   font-size: 46px;
   font-weight: 600;
}

.search-btn {
   padding-right: 500px;
}

.btn-close {
   border: none;
   color: white;
   font-weight: 900;
   font-size: 32px;
}

select {
   background: transparent;
   color: white;
   border: none;
   font-size: 18px;
   padding: 10px 15px;
}

select option {
   color: black;
}

.btn-close:hover {
   color: white;
}

.btn-close:active {
   color: white;
}

.name {
   font-size: 22px !important;
   color: white;
}

.card {
   padding: 15px;
   background-color: rgb(23, 25, 35);
}

.cursor-pointer {
   cursor: pointer;
}

main {
   width: 100%;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   background: rgba(0, 0, 0, 0.749);

}

.searchCard {
   width: 100%;
   height: 100px;
   background: rgb(23, 25, 35);
   display: flex;
}

.InpSearch {
   width: 90%;
   margin: auto;
   background: transparent;
   border-top: none;
   border-left: none;
   border-right: none;
   color: white;
   padding: 20px 0px 15px 30px;
}

.InpSearch::before {
   content: "o";
   display: inline-block;
   width: 10px;
   height: 10px;

}

:focus {
   outline: none;
}

@media (max-width:1399px) {
   .docName {
      font-size: 40px;
   }
}

@media (max-width:1199px) {
   .search-btn {
      padding-right: 300px;
   }
}

@media (max-width:991px) {}

@media (max-width:767px) {}

@media (max-width:575px) {}
</style>