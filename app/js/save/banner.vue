<template>
  <Panel title="知识胶囊" :class="$style.panel">
    <router-link :to="{name: 'Home'}">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t24091/103/334342904/113413/13be9e7e/5b2c6e44N6ec010f7.jpg?width=1500&height=956" alt="">
    </router-link>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'

export default {
  components: {
    Panel,
  },

  data() {
    return {
    }
  },
}

</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  padding-bottom: 60px;
  margin-bottom: 100px;
  >h4 {
    display: none;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
