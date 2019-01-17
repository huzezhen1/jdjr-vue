<template>
  <Panel title="有车有钱" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.imgs">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/26147/22/5476/26298/5c3ee5a2E89b2503e/3d31566224d39ff1.png?width=375&height=233" alt="月供2000起">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t26107/112/1207936110/82835/78b44bc9/5bc40c53N864d17dc.png?width=375&height=233" alt="车抵贷">
      </div>
      <swiper :options="options" :not-next-tick="options.notNextTick" :class="$style.swiper" class="car-slider">
        <swiper-slide v-for="group in groups" :key="group.id" :class="$style.slider">
          <div v-for="item in group.items" :key="item.src" :class="$style.item">
            <img :src="item.src" :alt="item.title">
            <span>{{ item.title }}</span>
          </div>
        </swiper-slide>
        <div v-if="options.pagination" slot="pagination" class="swiper-pagination" />
      </swiper>
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
      groups: [{
        id: 1,
        items: [{
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/14341/37/3393/6583/5c26c570E1c91365c/a12b127c15c524c4.png?width=90&height=90',
          href: 'Home',
          title: '机票',
        }, {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&height=88',
          href: 'Home',
          title: '租房',
        }, {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&height=90',
          href: 'Home',
          title: '房抵贷',
        }, {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&height=88',
          href: 'Home',
          title: '分期用',
        }, {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&height=90',
          href: 'Home',
          title: '彩票推荐',
        }],
      }, {
        id: 2,
        items: [{
          src: '//img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90',
          href: 'Home',
          title: '教育',
        }, {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90',
          href: 'Home',
          title: '车险',
        }, {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88',
          href: 'Home',
          title: '家装',
        }, {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
          href: 'Home',
          title: '驾校',
        }],
      }],
      options: {
        autoplay: false,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        observer: true,
        observeParents: true,
        notNextTick: false,
      },
    }
  },
}

</script>

<style lang='scss'>
@import '~swiper/dist/css/swiper.css';
.car-slider {
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #ececec;
      opacity: 1;
      width: 10px;
      height: 10px;
    }
    .swiper-pagination-bullet-active {
      background: #c7c4c4;
      opacity: 1;
      width: 10px;
      height: 10px;
    }
  }
}

</style>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  background: #fff url('../../img/borrow-bslider-bj.png') 0 -480px no-repeat;
  background-size: 100% auto;
  >h4 {
    font-size: 15.75*2px;
    text-align: left;
    color: #000;
    font-weight: 500;
    &:before {
      content: ' ';
      background: url('../../img/borrow-carmoney-title.png') 0 0 no-repeat;
      background-size: 100% 100%;
      width: 2.625*2px;
      height: 15.75*2px;
      display: inline-block;
      margin-right: 17.4px;
      vertical-align: middle;
    }
  }
  .content {
    .imgs {
      @include list(row);
      width: 100%;
      margin-bottom: 26.25*2px;
      img {
        width: 50%;
        height:100%
      }
    }
    .swiper {
      height: 140px;
      padding-bottom: 17.5px;
      .slider {
        @include list(row);
        padding: 0 13.125*2px;
        box-sizing: border-box;
        .item {
          flex: 1;
          text-align: center;
          img {
            width: 77px;
            height: 77px;
            display: block;
            margin: 0 auto;
          }
          span {
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
