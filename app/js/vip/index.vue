<template>
  <div>
    <Heador title="金融会员" />
    <Cont />
    <Navb :current="curId" />
  </div>
</template>

<script>
import Heador from '../public/header.vue'
import Navb from '../public/navbar.vue'
import Cont from './content.vue'

export default {
  components: {
    Heador,
    Cont,
    Navb,
  },

  data() {
    return {
      curId: 5,
    }
  },
}

</script>

<style lang='scss' module>

</style>
