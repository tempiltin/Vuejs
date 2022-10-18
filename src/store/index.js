import { createStore } from "vuex";

const store = createStore({
    // Stateda o'zgaruvchilar yoziladi
    state :{
        showSidebar: true,
    },
    // mutuationsda sinxron funksiyalar yoziladi
    mutations: {

        handleShowSidebar(state, payload){
            state.showSidebar = payload
            console.log('====================================');
            console.log("SHOW SIDEBAR FUNCtion is loading in store");
            console.log('====================================');
        }


    },
    // actionsda Asinxron funksiyalar yoziladi async
    actions: {
        /**
        state.commit("handleShowSidebar", true)
        bunda actionsdan turib mutuationsdagi funksiya chaqiriladi
        */
    },
    modules: {},
    // gettersda state ichidagi o'zgaruvchilarni oladigan funksiya yozamiz
    getters: {
        getShowSidebar(state){
            return state.showSidebar
        }
    },
})

export default store;