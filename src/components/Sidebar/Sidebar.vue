<script>
import "./sidebar.css"
import LinkRouter from "../Link-router/LinkRouter.vue"
export default {
  // computed : {
  //     showSidebar(){
  //       return  this.$store.getters.getShowSidebar;
  //     }
  //  },
  data() {
    return {
      state: false,
      categories: [
        {
          name: "O'rnatish",
          id: 1,
        },
        {
          name: "O'rnatish 2",
          "id": 2,
        },
        {
          name: "O'rnatish",
          id: 3,
        },
        {
          name: "O'rnatish",
          id: 4,
        },
      ],
    }
  },
  methods: {

    handleonclick(id) {
      this.state = !this.state;
      // if(this.state === false){this.state = true}
      // else{this.state = false}
    }
  },


  components: { LinkRouter }
}

</script>
<template>
  <nav class="navbar-left pt-5">
    <a href="#!" class="brand d-none d-lg-flex "><img src="https://laravel.com/img/logomark.min.svg" alt=""> Laravel</a>
    <ul>
      <!-- <li>
        <a href="#!" @click="handleonclick">Prolog </a>
        <ol :style="{display:state  ? 'block' : 'none'}">
          <li>Chiqarish eslatmalari</li>
          <li>Yangilash uchun qo'llanma</li>
          <li>Hissa qoʻshish boʻyicha qoʻllanma</li>
        </ol>
      </li> -->
      <LinkRouter :category="category" v-for="category in categories" />


    </ul>

  </nav>
</template>
<style scoped>
@media (max-width:1399px) {
  .navbar-left .brand {
    padding-right: 8rem;
    margin-left: 20px;
    color: #FF2D20;
    font-size: 46px;
    font-weight: 600;
  }
}

@media (max-width:1199px) {
  .navbar-left ul {
    margin-top: 4rem;
    padding-right: 0rem;
    padding-left: 20px;
  }
  .brand{
    font-size: 36px !important;
  }
  .navbar-left .brand[data-v-7382193b] {
    padding-right: 0rem;
    color: #FF2D20;
    font-size: 46px;
    font-weight: 600;
  }
}

@media (max-width:991px) {}

@media (max-width:767px) {}

@media (max-width:575px) {}
</style>