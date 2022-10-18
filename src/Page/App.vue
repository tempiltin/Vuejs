<template>
  <RouterView />
</template>

<script>
export default {
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  mounted() {
    console.log("salom", this.layout)
  },
  data() {
    return {
      layout: null,
      showSidebar: true,
    }
  },
  methods: {
    myEventHandler(e) {
      let width = window.innerWidth

      if(width < 993){
        if(this.showSidebar){
          this.showSidebar = false;
          this.$store.commit("handleShowSidebar", this.showSidebar)
        }
      }else{
        if(!this.showSidebar){
          this.showSidebar = true;
          this.$store.commit("handleShowSidebar", this.showSidebar)
        }
      }
    }
  }
}
</script>