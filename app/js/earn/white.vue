<template>
  <Panel title="白条" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.wrap">
        <div :class="$style.left">
          <div :class="$style.circle">
            <p>小白信用分</p>
          </div>
          <span>登录查看</span>
        </div>
        <ul :class="$style.right">
          <li v-for="item of items" :key="item.src">
            <router-link :to="{name: item.href}">
              <img :src="item.src" :alt="item.title">
              <p>{{ item.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div :class="$style.more">
        年轻不留白 >
      </div>
      <div :class="$style.banner">
        <router-link :to="{name:'Home'}">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200" alt="白条权益中心">
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56',
        title: '白条',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56',
        title: '还款',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56',
        title: '1元抢券',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56',
        title: '小白卡',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56',
        title: '金条',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56',
        title: '校园',
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
    text-align: initial;
    font-size: 36px;
    height: 120px;
    line-height: 120px;
  }
  .content {
    padding-bottom: 40px;
    position: relative;
    .wrap {
      @include list(row);
      padding: 0 30px;
      .left {
        width: 210px;
        height: 260px;
        margin-right: 16px;
        box-shadow: 0 0 20px 1px rgba(101, 118, 155, 0.15);
        .circle {
          width: 184px;
          height: 184px;
          background: url('../../img/earn-white-left.png') no-repeat top;
          background-size: 100% auto;
          position: relative;
          margin: 16px auto 14px auto;
          p {
            width: 100%;
            font-size: 24px;
            color: #c4a36c;
            text-align: center;
            position: absolute;
            top: 60px;
          }
        }
        >span {
          display: block;
          color: #fff;
          margin: 0 auto;
          width: 140px;
          height: 50px;
          line-height: 50px;
          font-size: 24px;
          text-align: center;
          background: #d4b575;
          border-radius: 30px;
          position: relative;
          left: 0;
          bottom: 30px;
        }
      }
      .right {
        @include list(row);
        width: 354px;
        height: 260px;
        box-shadow: 0 0 20px 1px rgba(101, 118, 155, 0.15);
        li {
          width: 33.33%;
          height: 130px;
          text-align: center;
          img {
            margin: 20px auto 2px auto;
            display: block;
            width: 56px;
            height: 56px;
          }
          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: PingFangSC-Regular;
            font-size: 24px;
            color: #333;
          }
        }
      }
    }
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
