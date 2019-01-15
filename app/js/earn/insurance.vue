<template>
  <Panel title="保险保障" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.wrap">
        <dl :class="$style.left">
          <dt>200万</dt>
          <dd :class="$style.name">
            个人账户安全险
          </dd>
          <dd :class="$style.btn">
            立即查看
          </dd>
          <dd>今日推荐</dd>
        </dl>
        <ul :class="$style.right">
          <li v-for="item of kinds" :key="item.src">
            <router-link :to="{name: item.href}">
              <img :src="item.src" :alt="item.title">
              <p>{{ item.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div :class="$style.banner">
        <router-link :to="{name:'Home'}">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/29266/18/3258/25520/5c24b675Ebf5adb3b/d3171bed6dc16839.jpg?width=750&height=200" alt="少儿健康险">
        </router-link>
      </div>
      <p>热销保险</p>
      <Slider :items="items" :options="options" class="insu-slider" />
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
      kinds: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56',
        title: '车险',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56',
        title: '人寿',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56',
        title: '意外',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56',
        title: '财产',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56',
        title: '健康',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56',
        title: '旅行',
        href: 'Home',
      }],
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/4348/19/6052/23261/5ba1b654E348ecfa8/6db1f6144439c704.jpg?width=210&height=260',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28279/347/570877273/11310/f78c7b5/5bf76a9eN5b755f88.jpg?width=210&height=260',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t29101/62/394095356/10954/b75a42b/5bf22127N614ee042.jpg?width=210&height=260',
        href: 'Home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28720/143/415348627/10924/71f1924/5bf22160Nfb3c2621.jpg?width=210&height=260',
        href: 'Home',
      }],
      options: {
        autoplay: false,
        loop: false,
        pagination: '',
        notNextTick: false,
        slidesPerView: 2.72,
        spaceBetween: 16,
        freeMode: true,
        observer: true,
        observeParents: true,
      },
    }
  },
}

</script>

<style lang="scss">
.insu-slider {
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
    .wrap {
      @include list(row);
      padding: 0 30px;
      .left {
        width: 210px;
        height: 260px;
        margin-right: 16px;
        box-shadow: 0 0 20px 1px rgba(101, 118, 155, 0.15);
        position: relative;
        dt {
          height: 62px;
          line-height: 62px;
          font-size: 50px;
          color: #1bd5c7;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          box-sizing: border-box;
          padding: 0 12px;
          margin: 62px 0 4px;
        }
        .name {
          height: 34px;
          line-height: 34px;
          font-size: 24px;
          color: #000;
          text-align: center;
          box-sizing: border-box;
          padding: 0 12px;
          margin-bottom: 24px;
        }
        .btn {
          width: 140px;
          min-width: 120px;
          height: 50px;
          line-height: 50px;
          font-size: 24px;
          text-align: center;
          border-radius: 30px;
          background-color: #1bd5c7;
          color: #fff;
          padding: 0 12px;
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        dd:last-child {
          height: 32px;
          line-height: 32px;
          padding: 0 12px;
          font-size: 24px;
          background-color: #000;
          color: #fff;
          position: absolute;
          left: 0;
          top: 0;
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
    .banner {
      margin-top: 16px;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    >p {
      height: 100px;
      line-height: 100px;
      font-size: 28px;
      margin: 0 30px;
    }
  }
}
</style>
