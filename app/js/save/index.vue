<template>
  <div>
    <Heador title="省钱" />
    <SSlider />
    <!-- <NavB :current="curId" /> -->
  </div>
</template>

<script>
import Heador from '../public/header.vue'
import SSlider from './sslider.vue'
// import NavB from '../public/navbar.vue'

export default {
  components: {
    Heador,
    SSlider,
    // NavB,
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
