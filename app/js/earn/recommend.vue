<template>
  <Panel title="特色推荐" :class="$style.panel">
    <section :class="$style.content">
      <ul>
        <li v-for="item in items" :key="item.src">
          <div :class="$style.bg">
            <img :src="item.src" :alt="item.title">
            <p :class="$style.title">
              {{ item.title }}
            </p>
            <p :class="$style.price">
              <span :class="$style.sign">
                ￥
              </span>
              <span>{{ item.price }}</span>
              <span :class="$style.up">
                起
              </span>
            </p>
            <div :class="$style.progress">
              <div :class="$style.wrapper">
                <div :class="$style.inner" :style="{width:item.progress+'%'}" />
              </div>
              <span>{{ item.progress }}%</span>
            </div>
          </div>
        </li>
      </ul>
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
        src: '//img30.360buyimg.com/cf/jfs/t1/20424/4/1419/44718/5c120e7eEe7be8d1e/14fecd3271d27a14.jpg!q70.dpg',
        title: '大拇指小厨宝热水器',
        price: '769.00',
        progress: 10,
      }, {
        src: '//img30.360buyimg.com/cf/jfs/t1/26271/29/1074/52359/5c0f0f0bEd2214e03/1a2da21db88f8d8c.jpg!q70.dpg',
        title: '名庭印象 声控人体感应灯画',
        price: '268.00',
        progress: 114,
      }, {
        src: '//img30.360buyimg.com/cf/jfs/t1/15433/36/1883/42606/5c1751e1E8320e4cd/28166c79ab0b1ead.jpg!q70.dpg',
        title: 'Cozzzi个人暖风透气垫 ',
        price: '1499.00',
        progress: 228,
      }, {
        src: '//img30.360buyimg.com/cf/jfs/t1/7163/17/9670/9313/5c19acbaEa92e6feb/c02fc9117cfe7dc9.jpg!q70.dpg',
        title: '宾多康 软激光膝关节按摩仪',
        price: '659.00',
        progress: 367,
      }, {
        src: '//img30.360buyimg.com/cf/jfs/t1/21954/24/4961/142969/5c3837ccE10778496/cd05694565f9e62f.jpg!q70.dpg',
        title: '步谷杂粮美食库 全能营养餐',
        price: '99.00',
        progress: 101,
      }, {
        src: '//img30.360buyimg.com/cf/jfs/t1/472/25/9554/30621/5bac9b10Ef8c60712/8597e94411e297dc.jpg!q70.dpg',
        title: '10万次捶打只为这只壶',
        price: '298.00',
        progress: 26,
      }, {
        src: '//img30.360buyimg.com/cf/jfs/t1/24000/38/1085/65673/5c0f39edE3fadf534/9d634d021a8cfbef.jpg!q70.dpg',
        title: '江湖边 贴身好酒 独立行头',
        price: '59.00',
        progress: 190,
      }, {
        src: '//img30.360buyimg.com/cf/jfs/t1/26767/31/220/44127/5c07c46bEb5c4b4d0/e08a3479946b86d0.jpg!q70.dpg',
        title: '小摩兽纯气囊智能车载按摩垫',
        price: '660.00',
        progress: 10,
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
    ul {
      @include flex(row);
      background-color: rgb(243, 245, 247);
      li {
        width: 50%;
        box-sizing: border-box;
        margin-bottom: 8px;
        display: block;
        &:nth-child(odd) {
          padding-right: 4px;
        }
        &:nth-child(even) {
          padding-left: 4px;
        }
        .bg {
          background-color: #fff;
          img {
            width: 100%;
            display: block;
            padding: 44px 44px 22px 44px;
            box-sizing: border-box;
          }
          .title {
            height: 42px;
            line-height: 42px;
            letter-spacing: -0.75008px;
            font-size: 30px;
            padding: 0 0 22px 30px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .price {
            font-family: DIN-Bold;
            height: 34px;
            line-height: 34px;
            font-size: 0;
            color: #ff9a1c;
            padding: 0 0 14px 30px;
            span {
              font-size: 32px;
              display: inline-block;
            }
            .sign {
              font-size: 24px;
              color: #f92;
            }
            .up {
              font-size: 24px;
              color: #999;
              margin-left: 10px;
            }
          }
          .progress {
            height: 30px;
            font-size: 24px;
            padding: 0 30px 26px 30px;
            .wrapper {
              float: left;
              width: 70%;
              height: 10px;
              margin-top: 10px;
              background: #f3f5f7;
              border-radius: 20px;
              .inner {
                height: 10px;
                max-width: 100%;
                border-radius: 20px;
                background: linear-gradient(270deg, #f55 1%, #ff9c31);
              }
            }
            span {
              font-size: 24px;
              color: #999;
              margin-left: 6px;
            }
          }
        }
      }
    }
  }
}
</style>
