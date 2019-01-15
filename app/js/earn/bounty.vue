<template>
  <Panel title="赏金任务" :class="$style.panel">
    <section :class="$style.content">
      <Slider :items="items" :options="options" cname="bounty-slider" />
      <div :class="$style.more">
        查看更多任务 >
      </div>
      <div :class="$style.banner">
        <router-link :to="{name:'Home'}">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&height=200" alt="金币兑换">
        </router-link>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'

export default {
  components: {
    Panel,
    Slider,
  },

  data() {
    return {
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t30418/166/1039421072/8983/a6f90d5b/5c04eccbN581f6287.png?width=210&height=260',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260',
        href: 'Home',
      }],
      options: {
        autoplay: false,
        loop: false,
        pagination: '',
        notNextTick: false,
        slidesPerView: 2.73,
        spaceBetween: 16,
        freeMode: true,
        observer: true,
        observeParents: true,
      },
    }
  },
}
</script>

<style lang='scss'>
.bounty-slider {
  .swiper-slide {
    width: 210px!important;
    img {
      width: 100%;
    }
    &:first-child {
      margin-left: 30px;
    }
  }
}
</style>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  >h4 {
    text-align: initial;
    font-size: 36px;
    height: 120px;
    line-height: 120px;
  }
  .content {
    padding-bottom: 40px;
    position: relative;
    .more {
      font-size: 24px;
      color: #999;
      height: 120px;
      line-height: 120px;
      position: absolute;
      top: -120px;
      right: 0;
      margin-right: 32px;
    }
    .banner {
      margin-top: 16px;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
