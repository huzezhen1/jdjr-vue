<template>
  <div>
    <Heador title="赚钱" />
    <TopBar />
    <Eslider />
    <Ad />
    <Bounty />
    <White />
    <Gold />
    <Insu />
    <Recommend />
    <Footor />
    <NavB :current="curId" />
  </div>
</template>

<script>
import Heador from '../public/header.vue'
import NavB from '../public/navbar.vue'
import Footor from '../public/footer.vue'
import Eslider from './eslider.vue'
import TopBar from './topBar.vue'
import Ad from './ad.vue'
import Bounty from './bounty.vue'
import White from './white.vue'
import Gold from './gold.vue'
import Insu from './insurance.vue'
import Recommend from './recommend.vue'

export default {
  components: {
    Heador,
    Eslider,
    TopBar,
    NavB,
    Ad,
    Bounty,
    White,
    Gold,
    Insu,
    Recommend,
    Footor,
  },
  data() {
    return {
      curId: 2,
    }
  },
}

</script>

<style lang='scss'>

</style>
