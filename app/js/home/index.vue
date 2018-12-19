<template lang="html">
  <div>
    <Heador title="京东金融" />
    <HSlider />
    <Financial />
    <Bounty />
    <Insurance />
    <CrowdF />
    <Footor />
    <NavB />
  </div>
</template>

<script>
import Heador from '../public/header.vue'
import HSlider from '../home/hslider.vue'
import Financial from '../home/financial.vue'
import Bounty from '../home/bounty.vue'
import Insurance from '../home/insurance.vue'
import CrowdF from '../home/crowdfunding.vue'
import Footor from '../public/footer.vue'
import NavB from '../public/navbar.vue'
export default {
  components: {
    Heador,
    HSlider,
    Financial,
    Bounty,
    Insurance,
    CrowdF,
    Footor,
    NavB,
  },
}
</script>

<style lang="scss" module>
@import "../../css/reset.scss";
</style>
