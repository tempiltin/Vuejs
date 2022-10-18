
<template>
  
    <header class="header d-flex" style=" background: #000000 !important; color: white;">
      <div class="header-left"  v-show="showSidebar">
        <Sidebar />
      </div>
      <div class="header-right">
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-lg-10">
              <Search/>
              <div class="row mt-5">
                <div class="col-lg-12">
                  <!-- <Instal/> -->
                  <RouterView />
                </div>
              </div>

            </div>
          </div>
        </div>
  
      </div>
  
    </header>
    <Footer />
  </template>


<script>
import Sidebar from "../../components/Sidebar/Sidebar.vue"
import Search from "../../components/Navbar/Search.vue"
import Instal from "../../components/Install/Instal.vue";
import Footer from "../../components/Laravel/Footer/Footer.vue"
export default {
  computed : {
      showSidebar(){
        return  this.$store.getters.getShowSidebar;
      }
   },
  components: {
    Sidebar,
    Search,
    Instal,
    Footer
  },
  data() {
    return {
      buttonMsg: "X",
      show: true
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.header-left {
  background: #171923da;
}
</style>