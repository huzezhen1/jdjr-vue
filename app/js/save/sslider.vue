<template>
  <Panel title="省钱轮播图" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.loginBar">
        <p>亲，您没有登录哦～</p>
        <router-link :to="{name: 'Home'}" :class="$style.btn" />
      </div>
      <Slider :items="items" :options="options" cname="save-slider" />
      <router-link :to="{name: 'Home'}" :class="$style.banner">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/23431/8/4065/30807/5c2ef1b3E80c47139/c901b71c2172da4c.png?width=704&height=246" alt="9.9抵100">
      </router-link>
      <div :class="$style.coupons">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&height=480" alt="10-5">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t16630/362/2707031119/15173/aa5acde3/5b03d5c7Nccffa23f.jpg?width=750&height=480" alt="100-99">
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/10328/6/8291/72790/5c341e07Ebe2a97b0/3dbdeea85717ebad.jpg?width=750&height=360',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/18803/30/2929/42368/5c21f2e5Eb6bbe97a/dc3b2f2603b9d753.jpg?width=750&height=360',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/22580/36/3474/50550/5c273a69E21aa9541/7b6bd853dd67847c.jpg?width=750&height=360',
        href: 'Home',
      }],
      options: {
        autoplay: {
          disableOnInteraction: false,
        },
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true,
        },
        notNextTick: false,
      },
    }
  },
}

</script>

<style lang="scss">
.save-slider {
  .swiper-slide {
    img {
      width: 100%;
    }
  }
  .swiper-pagination {
    font-size: 25.6px;
    color: #ccc;
    text-align: right!important;
    padding-right: 17.0667*2px;
    box-sizing: border-box;
    bottom: 20px!important;
    .swiper-pagination-current {
      color: #fff;
    }
  }
}
</style>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  margin-top: 88px!important;
  >h4 {
    display: none;
  }
  .content {
    .loginBar {
      position: relative;
      p {
        height: 58.875*2px;
        line-height: 58.875*2px;
        color: #b67e38;
        padding-left: 17.0667*2px;
      }
      .btn {
        display: block;
        height: 58.0156*2px;
        width: 61.8594*2px;
        position: absolute;
        top: 0;
        right: 17.0667*2px;
        background-image: url(//storage.360buyimg.com/jr-mobile-active-forever/saveMoney/login-btn.png);
        background-size: contain;
      }
    }
    .banner {
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .coupons {
      @include list(row);
      img {
        display: inline-block;
        width: 50%;
        height: 100%;
      }
    }
  }
}
</style>
