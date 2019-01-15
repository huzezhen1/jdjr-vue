<template>
  <Panel title="钢镚广告" :class="$style.panel">
    <router-link :to="{name: 'Home'}">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t28858/7/1058667857/15792/606d0f10/5c050f76Ndb650556.png?width=750&height=120" alt="钢镚天天领，最高10钢镚，速领">
    </router-link>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel,
  },
}

</script>

<style lang='scss' module>
  @import '../../css/element.scss';
  .panel {
    >h4 {
      display: none;
    }
    position: fixed;
    top: 88px;
    z-index: 99;
    margin-top: 0!important;
    background: transparent!important;
    img {
      display: block;
      width: 100%;
    }
  }
</style>
