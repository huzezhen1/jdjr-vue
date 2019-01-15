<template>
  <Panel title="小金库" :class="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.data">
        <dt>3.0330<span>%</span></dt>
        <dd>七日年化收益</dd>
        <dd>支付/缴费/优质理财/大额理财</dd>
      </dl>
      <div :class="$style.btn">
        开启送礼包
      </div>
      <p>稳健灵活 小白精选</p>
      <swiper :options="options" class="gold-swiper">
        <swiperSlide v-for="item in items" :key="item.title">
          <dl>
            <dt>{{ item.title }}</dt>
            <dd><p>{{ item.limit }}</p></dd>
            <dd>{{ item.per }}<span>%</span> </dd>
            <dd>{{ item.desc }}</dd>
          </dl>
        </swiperSlide>
      </swiper>
      <div :class="$style.more">
        前往APP查看更多理财 >
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
      items: [{
        title: '月月盈',
        limit: '每日限量',
        per: '3.97',
        desc: '近七日年化收益率',
      }, {
        title: '年年盈',
        limit: '每日限量',
        per: '4.90',
        desc: '近七日年化收益率',
      }, {
        title: '至尊盈',
        limit: '180天后可贷',
        per: '6.00',
        desc: '历史年化收益率',
      }],
      options: {
        autoplay: false,
        loop: false,
        pagination: '',
        notNextTick: false,
        slidesPerView: 2.65,
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
.gold-swiper {
  padding: 20px 0 40px 30px;
  .swiper-slide {
    box-shadow: 0 0 20px 1px rgba(101,118,155,.15);
    width: 210px!important;
    height: 260px;
    padding: 0 30px;
    box-sizing: border-box;
    dt {
      font-size: 32px;
      height: 46px;
      line-height: 46px;
      margin: 39px 0 10px;
      white-space: no-wrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    dd:nth-child(2) {
      display: inline-block;
      min-width: 100px;
      font-size: 24px;
      height: 32px;
      line-height: 32px;
      background-image: linear-gradient(#5e8fff,#2f6fff);
      border-radius: 22px;
      color: #fff;
    }
    dd:nth-child(3) {
      font-size: 50px;
      height: 60px;
      line-height: 60px;
      color: #ff281e;
      white-space: no-wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        font-size: 36px;
      }
    }
    dd:nth-child(4) {
      font-size: 24px;
      height: 28px;
      line-height: 28px;
      color: #999;
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
    position: relative;
    .data {
      height: 200px;
      box-sizing: border-box;
      padding-left: 28px;
      margin: auto 30px;
      border-radius: 4px;
      background: url('../../img/earn_gold_banner.png') 50% / cover no-repeat;
      dt {
        font-family: DIN-Bold;
        font-size: 60px;
        width: 280px;
        height: 72px;
        line-height: 72px;
        padding-top: 24px;
        color: #fff;
        border-bottom: 1px solid #fff;
      }
      dd:nth-child(2) {
        margin: 8px 0 4px 0;
        height: 34px;
        line-height: 34px;
        color: #fff;
        font-size: 24px;
      }
      dd:nth-child(3) {
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        opacity: .6;
        color: #fff;
      }
    }
    .btn {
      width: 332px;
      height: 200px;
      line-height: 200px;
      background: url('../../img/earn-gold-button.png') 50% / cover no-repeat;
      font-size: 24px;
      color: #fff;
      position: absolute;
      top: 0;
      right: 30px;
      text-align: center;
    }
    >p {
      height: 80px;
      line-height: 80px;
      font-size: 28px;
      margin: 20px 30px 0;
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
  }
}
</style>
