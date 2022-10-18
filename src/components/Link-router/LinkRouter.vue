<script>

export default{
    props: {
        category: Map,
    },
    data() {
    return {
      state: false,
    }
  },
    methods: {
        handleonclick() {
      this.state = !this.state;
      // if(this.state === false){this.state = true}
      // else{this.state = false}
    }
    }
}

</script>
<template>
      <li >
        <a href="#!" @click="handleonclick">{{category.name}}</a>
        <ol v-show="state"  >
          <li><router-link to="/docs">Chiqarish eslatmalari</router-link></li>
          <li><router-link to="/docs">Chiqarish eslatmalari</router-link></li>
          <li><router-link to="/docs">Chiqarish eslatmalari</router-link></li>
        
        </ol>
      </li>
</template>