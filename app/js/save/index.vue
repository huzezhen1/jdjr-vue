<template>
  <div>
    <Heador title="省钱" />
    <SSlider />
    <Pay />
    <Life />
    <Banner />
    <NavB :current="curId" />
  </div>
</template>

<script>
import Heador from '../public/header.vue'
import NavB from '../public/navbar.vue'
import SSlider from './sslider.vue'
import Pay from './pay.vue'
import Life from './life.vue'
import Banner from './banner.vue'


export default {
  components: {
    Heador,
    SSlider,
    Pay,
    Life,
    Banner,
    NavB,
  },
  data() {
    return {
      curId: 4,
    }
  },
}

</script>

<style lang='scss'>

</style>
