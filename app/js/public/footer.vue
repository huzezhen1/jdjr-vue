<template>
  <Panel title="底部信息" :class="$style.panel">
    <section :class="$style.content">
      <ul>
        <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
        <li>
          <router-link :to="{name:'home'}">
            投资有风险，购买需谨慎
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}">
            京东金融平台服务协议
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}">
            京东金融隐私政策
          </router-link>
        </li>
      </ul>
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
  margin-bottom: 120px;
  >h4 {
    display: none;
  }
  .content {
    background-color: #F5F5F5;;
    li {
      font-size: 24px;
      line-height: 38.4px;
      padding: 24px 32px;
      box-sizing: border-box;
      color: #999;
      text-align: center;
      border-top: 1px solid #DDD;
      a {
        color: #999;
      }
    }
  }
}

</style>
