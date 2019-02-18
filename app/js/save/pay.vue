<template>
  <Panel title="支付优惠" :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&height=442" alt="">
      <div :class="$style.bottom">
        <div :class="$style.left">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t28342/281/144513453/24267/4b82f4f3/5be91415Nbbb51d03.png?width=335&height=420" alt="">
        </div>
        <div :class="$style.right">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/10835/30/6723/11247/5c244816E1faf5ca3/0982f1ffc9388654.png?width=335&height=200" alt="">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/15928/29/6608/35458/5c5ce25aEf7c6351f/c4a225edfc9c873d.png?width=335&height=210" alt="">
        </div>
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
    }
  },
}

</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  >h4 {
    text-align: left;
  }
  .content {
    >img {
      display: block;
      width: 100%;
    }
    .bottom {
      @include list(row);
      padding: 0 30px;
      box-sizing: border-box;
      .left {
        width: 50%;
        position: relative;
        &::before {
          content: ' ';
          display: block;
          width: 10px;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          background: #f5f5f5;
        }
        img {
          width: 100%;
          height:100%;
          display: block;
        }
      }
      .right {
        @include list(column);
        width: 50%;
        position: relative;
        &::before {
          content: ' ';
          display: block;
          width: 10px;
          // height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background: #f5f5f5;
        }
        &::after {
          content: ' ';
          display: block;
          // width: 100%;
          height: 20px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 50%;
          background: #f5f5f5;
        }
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}

</style>
