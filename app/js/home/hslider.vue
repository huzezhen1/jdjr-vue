<template>
  <div :class="$style.content">
    <Slider :cname="$style.slider" :items="items" :options="options" />
    <section :class="$style.list">
      <div v-for="item in menus" :key="item.href" :class="$style.item">
        <router-link :to="{name: item.href}">
          <img :src="item.src" :alt="item.title">
          <span :class="$style.title">
            {{ item.title }}
          </span>
          <span v-if="item.desc" :class="$style.desc">
            {{ item.desc }}
          </span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '../core/slider.vue'

export default {
  components: {
    Slider,
  },

  data() {
    return {
      items: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/24357/18/1289/35699/5c10f343E2e857108/982ab45efb174fef.jpg?width=750&height=320',
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/19332/30/1338/46685/5c10f376E2ce4cc68/282ce40e231430ba.jpg?width=750&height=320',
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/16719/28/1283/110213/5c10f3a5E29a56118/2474656ea96f9ccf.png?width=750&height=320',
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/7526/23/8981/46410/5c10f3daE33232ee2/0f53912d9fab4296.jpg?width=750&height=320',
      }],
      menus: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        href: 'home',
        title: '优惠券',
        desc: '100-99券',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        href: 'home',
        title: '领福利',
        desc: '',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        href: 'home',
        title: '抢钢镚',
        desc: '',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        href: 'home',
        title: '白条提额',
        desc: '',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
        href: 'home',
        title: '工资理财',
        desc: '',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
        href: 'home',
        title: '众筹',
        desc: '',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90',
        href: 'home',
        title: '租房',
        desc: '',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27088/243/2089650291/12365/2469f395/5bf677f9N795eec5e.png?width=120&height=120',
        href: 'home',
        title: '车主服务',
        desc: '',
      }],
      options: {
        autoplay: true,
        loop: true,
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

<style lang='scss' module>
@import '../../css/element.scss';
.content {
  margin-top: 90px;
  .slider {
    position: relative;
    img {
      width: 100%;
    }
  }
  .list {
    @include list(row);
    padding-top: 40px;
    background-color: #fff;
    .item {
      display: inline-block;
      width: 25%;
      text-align: center;
      padding-bottom: 40px;
      &:nth-child(3) {
        .title {
          color: #ff0000;
        }
      }
      img {
        width: 90px;
        height: 90px;
      }
      .title {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 26px;
        text-align: center;
        color: #666;
        margin-top: 12px;
      }
      .desc {
        display: block;
        line-height: normal;
        color: #ff0000;
        font-size: 24px;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 8px;
      }
    }
  }
}
</style>
