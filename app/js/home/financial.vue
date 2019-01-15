<template>
  <Panel title="- 理财精选 -" :class="$style.panel">
    <section :class="$style.content">
      <dl v-for="item in items" :key="item.title" :class="$style.item">
        <dt>
          {{ item.title }}
          <span v-if="item.sub">
            {{ item.sub }}
          </span>
        </dt>
        <dd>{{ item.ratio }}</dd>
        <dd>
          {{ item.desc }}
        </dd>
      </dl>
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
        title: '长乐盈',
        sub: '180天可质押',
        ratio: '5.80%',
        desc: '近1年历史年化投资回报率',
      }, {
        title: '京智0号',
        sub: '大数据赋能',
        ratio: '6.00%',
        desc: '近1月历史年化投资回报率',
      }, {
        title: '建信养老飞益鑫',
        sub: '',
        ratio: '4.57%',
        desc: '近7日年化收益',
      }, {
        title: '小白基金',
        sub: '超短期',
        ratio: '4.50%',
        desc: '7日年化收益率',
      }],
    }
  },
}

</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  .content {
    @include list(row);
    .item {
      position: relative;
      box-sizing: border-box;
      width: 50%;
      height: 218px;
      padding-left: 32px;
      &:nth-child(2n+1) {
        &::after {
          content: ' ';
          display: block;
          width: 1px;
          height: 136px;
          background: #eee;
          position: absolute;
          top: 40px;
          right: 0;
        }
      }
      dt {
        color: #333;
        font-size: 30px;
        font-weight: 700;
        height: 42px;
        line-height: 42px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin: 34px 0 19px;
        span {
          box-sizing: border-box;
          color: #FF5155;
          height: 34px;
          line-height: 34px;
          font-size: 24px;
          border: 1px solid #FF5155;
          padding: 0 8px;
          margin-left: 8px;
          vertical-align: 1px;
        }
      }
      dd {
        &:nth-child(2) {
          font-size: 44px;
          font-weight: 700;
          height: 58px;
          line-height: 58px;
          color: #FF5155;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:nth-child(3) {
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    &::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      background: #eee;
      position: relative;
      top: -218px;
    }
  }
}
</style>
