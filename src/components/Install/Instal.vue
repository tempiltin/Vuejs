<template>
    <ul>
         <li v-for="category in categories" key=" index" >
            <router-link to="/asd/">{{category.name}}</router-link>
        </li>
        
    </ul>
    <button @click="openSearchBox" >Meni bos</button>
    <h1 :style="{color: isRed ? 'red' : 'white'}">Vue is awesome!</h1>
</template>
<script>
export default {
data(){
    return {
        isRed: false,
        categories: [
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
            {
                name: "Nimadir",
            },
        ],
        surname: "Temur",
    }
},
methods: {
    openSearchBox(){
        alert("Nimadir chiqar")
        this.isRed = true;
    }
}
       

    
}

</script>