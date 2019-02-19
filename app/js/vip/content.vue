<template>
  <Panel title="会员内容" :class="$style.panel">
    <section :class="$style.top">
      <router-link :to="{name: 'Home'}">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
        <span>会员福利<i>></i></span>
      </router-link>
    </section>
    <section :class="[$style.main, $style.middle]">
      <div v-for="item of items" :key="item.src" :class="$style.item">
        <router-link :to="{name: item.href}">
          <img :src="item.src" :alt="item.title">
          <span :class="$style.title">
            {{ item.title }}
          </span>
          <span :class="$style.desc">
            <em :style="{color: item.color}">
              {{ item.desc }}
            </em>
            <i>></i>
          </span>
        </router-link>
      </div>
    </section>
    <section :class="$style.main">
      <div :class="$style.item">
        <router-link :to="{name: 'Home'}">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70" alt="">
          <span :class="$style.title">
            实名认证
          </span>
          <span :class="$style.desc">
            <i>></i>
          </span>
        </router-link>
      </div>
    </section>
    <section :class="$style.main">
      <div :class="$style.item">
        <router-link :to="{name: 'Home'}">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70" alt="">
          <span :class="$style.title">
            帮助中心
          </span>
          <span :class="$style.desc">
            <i>></i>
          </span>
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70',
        title: '我的资产',
        desc: '查看全部资产',
        href: 'Home',
      }, {
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70',
        title: '我的优惠券',
        desc: '查看全部',
        href: 'Home',
      }, {
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90',
        title: '我的金币',
        desc: '赚金币兑好物',
        href: 'Home',
      }, {
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90',
        title: '我的金条',
        desc: '查看额度',
        href: 'Home',
      }, {
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70',
        title: '我的借钱',
        desc: '查看全部产品',
        href: 'Home',
      }, {
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70',
        title: '我的白条',
        desc: '去提额',
        href: 'Home',
      }, {
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70',
        title: '我的众筹',
        desc: '查订单/物流',
        href: 'Home',
      }, {
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70',
        title: '我的保障',
        desc: '全方位保障',
        href: 'Home',
      }, {
        src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&height=54',
        title: '我的爱车',
        desc: '绑车享专属福利',
        href: 'Home',
        color: '#FF801A',
      }],
    }
  },
}

</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  margin-top: 88px!important;
  margin-bottom: 120px;
  background-color: #f5f5f5!important;
  >h4 {
    display: none;
  }
  .top {
    height: 140px;
    margin-bottom: 20px;
    background-color: #fff;
    position: relative;
    img {
      display: inline-block;
      width: 100px;
      height: 100px;
      margin-top: 20px;
      margin-left: 32px;
    }
    span {
      font-size: 28px;
      color: #999;
      position: absolute;
      right: 32px;
      height: 140px;
      line-height: 140px;
      i {
        margin-left: 20px;
      }
    }
  }
  .main {
    background-color: #fff;
    margin-bottom: 20px;
    .item {
      height: 112px;
      font-size: 0;
      position: relative;
      img {
        display: inline-block;
        width: 48px;
        height: 48px;
        margin: 32px 32px 0 32px;
      }
      .title {
        color: #333;
        display: inline-block;
        font-size: 32px;
        height: 112px;
        line-height: 112px;
        vertical-align: top;
      }
      .desc {
        font-size: 28px;
        color: #999;
        position: absolute;
        right: 32px;
        height: 112px;
        line-height: 112px;
        i {
          margin-left: 20px;
        }
      }
    }
  }
  .middle {
    .item {
      border-bottom: 1px solid #eee;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
