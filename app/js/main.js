import Vue from "vue"
import VueAwesomeSwiper from "vue-awesome-swiper"
import App from "./App.vue"
import router from "./router"

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
