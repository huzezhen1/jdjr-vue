<template>
  <div>
    <Heador title="借钱" />
    <Bslider />
    <CarMoney />
    <White />
    <Activity />
    <NavB :current="curId" />
  </div>
</template>

<script>
import Heador from '../public/header.vue'
import NavB from '../public/navbar.vue'
import Bslider from './bslider.vue'
import CarMoney from './carmoney.vue'
import White from './white.vue'
import Activity from './activity.vue'

export default {
  components: {
    Heador,
    Bslider,
    CarMoney,
    White,
    Activity,
    NavB,
  },
  data() {
    return {
      curId: 3,
    }
  },
}

</script>

<style lang='scss'>

</style>
