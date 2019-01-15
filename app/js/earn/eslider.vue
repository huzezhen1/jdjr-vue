<template>
  <div :class="$style.wrap">
    <Slider :items="items" :options="options" cname="eslider-slider" />
    <section :class="$style.assets">
      <span :class="$style.level">
        会员等级
      </span>
      <p>立即登录 马上赚钱！</p>
      <span :class="$style.sign">
        签到
      </span>
    </section>
    <section :class="$style.list">
      <div v-for="item of lists" :key="item.title">
        <router-link :to="item.href">
          <img :src="item.src" :alt="item.title">
          <p>{{ item.title }}</p>
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/24150/11/2262/34198/5c1b0bd5E34fa892f/054c0bf91c3bcb76.jpg?width=750&height=400',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/24733/37/2361/23079/5c1c48ffEad48af45/578866c21e03afa3.jpg?width=750&height=400',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/29334/14/2299/53725/5c1b4fdfE5552d7d4/684900a8f6f0fbcf.png?width=750&height=400',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/24409/14/2377/31206/5c1c834bEcb324ac7/e75d2b9059a8774e.jpg?width=750&height=400',
        href: 'Home',
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
      lists: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28189/232/289098066/5076/dfe2d74f/5bee6bb4N4ec4cede.png?width=90&height=90',
        href: 'Home',
        title: '领红包',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27334/12/1829630702/5159/f8133cd6/5bee6bbdN8606cfbb.png?width=90&height=90',
        href: 'Home',
        title: '领福利',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27796/46/1836066448/4169/de69ccb0/5bee6bc3N92ca0e60.png?width=90&height=90',
        href: 'Home',
        title: '领券',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27850/30/1789047580/4856/13f8bcb9/5bee6bcbN996fb433.png?width=90&height=90',
        href: 'Home',
        title: '支付抽奖',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90',
        href: 'Home',
        title: '全部',
      }],
    }
  },
}

</script>

<style lang='scss'>
.eslider-slider {
  .swiper-slide {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>

<style lang='scss' module>
  @import '../../css/element.scss';
  .wrap {
    margin-top: 88px;
    background-color: #fff;
    .assets {
      @include list(row);
      align-items: center;
      justify-content: space-evenly;
      margin: 0 32px;
      width: 576px;
      height: 130px;
      color: #fff;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 20px 1px rgba(101,118,155,.15);
      margin-top: -14px;
      z-index: 9;
      position: relative;
      .level {
        width: 96px;
        height: 66px;
        line-height: 66px;
        font-size: 24px;
        // margin-left: 20px;
        background:#fff url('../../img/earn_level.png') no-repeat center / cover;
        border-radius: 4px;
        box-shadow: 0 6px 8px 0 hsla(41,44%,63%,.51);
        text-align: center;
      }
      p {
        display: inline-block;
        font-size: 28px;
        color: #c6a76f;
      }
      .sign {
        width: 140px;
        height: 66px;
        line-height: 66px;
        font-size: 24px;
        background:#fff url('../../img/earn_sign.png') no-repeat center / cover;
        border-radius: 30px;
        box-shadow: 0 6px 8px 0 hsla(41,44%,63%,.51);
        text-align: center;
      }
    }
    .list {
      @include list(row);
      box-sizing: border-box;
      >div {
        font-size: 0; // 解决img标签3px的bug
        width: 20%;
        text-align: center;
        margin-top: 38px;
        a {
          display: block;
          height: 100%;
        }
        img {
          width: 90px;
          height: 90px;
        }
        p {
          margin-top: 18px;
          margin-bottom: 48px;
          color: #333;
          font-size: 24px;
        }
      }
    }
  }
</style>
