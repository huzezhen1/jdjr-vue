<template>
  <Panel title="便利生活" :class="$style.panel">
    <section :class="$style.content">
      <div v-for="item of items" :key="item.src" :class="$style.item">
        <router-link :to="{name: item.href}">
          <img :src="item.src" :alt="item.title">
          <p>{{ item.title }}</p>
        </router-link>
      </div>
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
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/11629/38/3882/11046/5c2343adEdffe019b/268dd718568f0ce2.png?width=120&height=120',
        title: '低价手机',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/2912/35/8453/10948/5ba98db3E43593435/e8cd55fcebe851b2.png?width=120&height=120',
        title: '每日特惠',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/2919/38/8573/9112/5ba98db9E3096b801/0520550e7994d3a4.png?width=120&height=120',
        title: '领钢镚',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/5639/36/8328/9956/5ba98dc0Eda29abc6/27669c89e743fbda.png?width=120&height=120',
        title: '信用卡还款',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24811/310/2150446270/4499/41ff95d9/5bc43903N17a87d6f.png?width=120&height=120',
        title: '火车票',
        href: 'Home',
      }],
    }
  },
}

</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  >h4 {
    text-align: left;
  }
  .content {
    @include list(row);
    padding-bottom: 40px;
    .item {
      width: 20%;
      text-align: center;
      img {
        width: 90px;
        height: 90px;
      }
      p {
        font-size: 26px;
        text-align: center;
        color: #666;
        margin-top: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
