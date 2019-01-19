<template>
  <Panel title="菜单栏" :class="$style.panel">
    <ul :class="$style.content">
      <li v-for="item in items" :key="item.title">
        <router-link :to="{name: item.href}">
          <img :src="item.src" :alt="item.title">
          <p :class="current==item.index ? $style.current : ''">
            {{ item.title }}
          </p>
          <span v-if="item.unread" />
        </router-link>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel,
  },

  props: {
    current: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90',
        href: 'Home',
        title: '首页',
        unread: false,
        index: 1,
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60',
        href: 'Earn',
        title: '赚钱',
        unread: false,
        index: 2,
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60',
        href: 'Borrow',
        title: '借钱',
        unread: true,
        index: 3,
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60',
        href: 'Save',
        title: '省钱',
        unread: false,
        index: 4,
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60',
        href: 'Home',
        title: '金融会员',
        unread: false,
        index: 5,
      }],
    }
  },
}

</script>

<style lang='scss' module>
  @import '../../css/element.scss';
  .panel {
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-bottom: 0;
    z-index: 999;
    box-shadow: 0 -6px 8px rgba(0,0,0,.03);
    >h4 {
      display: none;
    }
    .content {
      @include list(row);
      justify-content: space-around;
      height: 100px;/*px*/
      li {
        width: 20%;
        text-align: center;
        position: relative;
        img {
          width: 44px; /*px*/
          margin: 12px auto 6px; /*px*/
        }
        p {
          color: #B1B4BB;
          font-size: 24px; /*px*/
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &.current {
            color: #508CEE;
          }
        }
        span {
          width: 14px;  /*px*/
          height: 14px; /*px*/
          background: #FF801A;
          display: block;
          position: absolute;
          top: 12px;  /*px*/
          right: 32px;  /*px*/
          border-radius: 7px; /*px*/
        }
      }
    }
  }
</style>
