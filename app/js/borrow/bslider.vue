<template>
  <Panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.card">
        <p>最高可借</p>
        <p><span>¥</span>300,000</p>
        <span :class="$style.btn">
          立即登录
        </span>
      </div>
      <Slider :items="items" :options="options" cname="bslider-slider" />
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/6758/25/12426/30531/5c3327b7Ea2d96add/3cbcac830338b901.png?width=1080&height=240',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/19369/40/1882/141911/5c173d38Ef1e2ddfa/2fa872f603964988.png?width=1080&height=240',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/21509/20/4531/39775/5c33281eE7e0635bb/6a8c62f841f035a7.png?width=1080&height=240',
        href: 'Home',
      }],
      options: {
        autoplay: true,
        loop: true,
        speed: 3e3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        notNextTick: false,
      },
    }
  },
}
</script>

<style lang="scss">
  .bslider-slider {
    .swiper-slide {
      box-sizing: border-box;
      padding: 0 13.125*2px;
      img {
        width: 100%;
      }
    }
    .swiper-pagination-bullet {
      background-color: #ececec;
      opacity: 1;
      width: 10px;
      height: 10px;
    }
    .swiper-pagination-bullet-active {
      background-color: #c7c4c4;
    }
    .swiper-pagination-bullets {
      bottom: 28px!important;
    }
  }
</style>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  >h4 {
    display: none;
  }
  margin-top: 88px!important;
  padding-top: 23.625*2px!important;
  background: url('../../img/borrow-bslider-bj.png') 0 0 no-repeat;
  background-size: 100% auto;
  .content {
    .card {
      background: url('../../img/borrow-bslider-card.png') 0 0 / cover no-repeat;
      margin: 0 13.125*2px 0 13.125*2px;
      padding: 31.266*2px 0 96px 29.375*2px;
      box-sizing: border-box;
      color: #fff;
      p:nth-child(1) {
        font-size: 28px;
        margin-bottom: 12px;
      }
      p:nth-child(2) {
        font-family: DINAlternate-Bold;
        text-shadow: 0 0.3125rem 0.3125rem rgba(63,39,0,.2);
        font-size: 37.625*2px;
        margin-bottom: 16px;
        span {
          font-size: 26.25*2px;
          margin-right: 6px;
        }
      }
      .btn {
        display: block;
        height: 28.4375*2px;
        line-height: 28.4375*2px;
        width: 90.125*2px;
        text-align: center;
        font-size: 24.5px;
        background: url('../../img/borrow-bslider-cardButton.png') 0 0 no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}

</style>
