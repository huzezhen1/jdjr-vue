<template>
  <Panel title="精品活动" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{name: 'Home'}">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/11683/4/3169/62437/5c1b2ddcEf8a48b38/ccab51775dd74d0b.png?width=730&height=264" alt="钢镚 天天领">
      </router-link>
    </section>
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
  margin-bottom: 100px;
  >h4 {
    text-align: initial;
    font-size: 32px;
    height: 112px;
    line-height: 112px;
  }
  .content {
    padding-bottom: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
