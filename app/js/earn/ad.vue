<template>
  <Panel title="广告模块" :class="$style.panel">
    <section>
      <div :class="$style.banner">
        <router-link :to="{name:'Home'}">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/9227/13/9806/25058/5c1b08deE96a140f8/8f56d28b6971f046.jpg?width=750&height=200" alt="京东金融APP撒钱啦">
        </router-link>
      </div>
      <div :class="$style.bottom">
        <dl>
          <dt>{{ title }}<span>%</span></dt>
          <dd :class="$style.desc">
            {{ desc }}
          </dd>
          <dd :class="$style.buy">
            立即抢购 >
          </dd>
        </dl>
        <div :class="$style.bottomRight">
          <swiper :options="options" :not-next-tick="options.notNextTick" class="swiper-no-swiping">
            <swiper-slide v-for="item in items" :key="item.href">
              <img :src="item.src" :alt="item.title">
              <p :class="$style.rightTitle">
                {{ item.title }}
              </p>
            </swiper-slide>
            <div v-if="options.pagination" slot="pagination" class="swiper-pagination" />
          </swiper>
          <div :class="$style.rightRecommend">
            <span>为您推荐</span>
            <img src="../../img/earn-ad-right-btn.png">
          </div>
        </div>
      </div>
      <div :class="$style.banner">
        <router-link :to="{name:'Home'}">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/19177/30/1905/31495/5c16fa39E36adbf51/d50e36f5b8f6de0d.jpg?width=750&height=200" alt="领金豆">
        </router-link>
      </div>
    </section>
  </Panel>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Panel from '../core/panel.vue'

export default {
  components: {
    Panel,
    swiper,
    swiperSlide,
  },

  data() {
    return {
      title: '6.00',
      desc: '协议约定年化利率',
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28846/271/1053460054/9310/8b77e950/5c0636aaN2f225153.jpg?width=160&height=160',
        href: 'Home',
        title: '手机遥控全屋红外家电 领券优惠',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t29206/24/1072569199/8462/3e0935d6/5c0636e5Nd347a70c.jpg?width=160&height=160',
        href: 'Home',
        title: '可充电垂直鼠标  直降100元',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t30469/244/1061274239/5363/c5418ddc/5c063704N0965726d.jpg?width=160&height=160',
        href: 'Home',
        title: '多功能智能指纹锁  立省2000元',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27865/260/2629694974/8515/a88ce4bf/5c063716Ndd838868.jpg?width=160&height=160',
        href: 'Home',
        title: '4G随身WiFi  月享2000G',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t30484/91/1059571756/6630/359ab1aa/5c063730N5bbe6bcd.jpg?width=160&height=160',
        href: 'Home',
        title: '白岩马克杯 触摸过就不想放下',
      }],
      options: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: '',
        notNextTick: false,
        direction: 'vertical',
      },
    }
  },
}

</script>

<style lang="scss" scoped>
  .swiper-container-vertical {
    height: 200px;
    img {
      display: block;
      float: left;
      width: 160px;
      height: 160px;
      padding: 20px;
    }
  }
</style>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  >h4 {
    display: none;
  }
  margin-top: 0;
  .banner {
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .bottom {
    @include list(row);
    margin: 16px 30px 16px 30px;
    height: 200px;
    >dl {
      width: 33%;
      box-sizing: border-box;
      padding: 0 38px 0 24px;
      margin-right: 16px;
      background: #fff url('../../img/earn-ad-left.png') center no-repeat / cover;
      color: #fff;
      border-radius: 4px;
      dt {
        font-family: DIN-Bold;
        height: 70px;
        font-size: 50px;
        margin-top: 24px;
        span {
          font-size: 24px;
        }
      }
      .desc {
        height: 28px;
        font-family: PingFangSC-Regular;
        font-size: 24px;
        border-bottom: 1px solid hsla(0,0%,100%,.3);
        padding-bottom: 12px;
        margin-bottom: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .buy {
        font-size: 24px;

      }
    }
    .bottomRight {
      position: relative;
      width: 64.24%;
      box-sizing: border-box;
      border-radius: 4px;
      background: #fff url('../../img/earn-ad-right.png') center no-repeat / cover;
      .rightTitle {
        width: 44%;
        margin-top: 24px;
        font-size: 24px;
        color: #fff;
        overflow: hidden;
        height: 56px;
        line-height: 1.2;
        text-overflow: ellipsis;
      }
      .rightRecommend {
        width: 50%;
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 0;
        span {
          font-size: 24px;
          color: #fff;
          position: absolute;
          left: 0;
          bottom: 45px;
        }
        img {
          float: right;
          width: 114px;
          height: 114px;
        }
      }
    }
  }
}

</style>
