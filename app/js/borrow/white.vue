<template>
  <Panel title="白条服务" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.left">
        <img src="../../img/borrow-white-left.png" alt="开通小白卡">
      </div>
      <div :class="$style.right">
        <img src="../../img/borrow-white-right.png" alt="小白信用">
        <p :class="$style.credit">
          小白信用
        </p>
        <p :class="$style.login">
          登录查看
        </p>
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
    font-size: 15.75*2px;
    text-align: left;
    color: #000;
    font-weight: 500;
    &:before {
      content: ' ';
      background: url('../../img/borrow-carmoney-title.png') 0 0 no-repeat;
      background-size: 100% 100%;
      width: 2.625*2px;
      height: 15.75*2px;
      display: inline-block;
      margin-right: 17.4px;
      vertical-align: middle;
    }
  }
  .content {
    @include list(row);
    padding-bottom: 35px;
    .left {
      width: 63.5%;
      box-sizing: border-box;
      padding-left: 6.563*2px;
      img {
        width: 100%;
      }
    }
    .right {
      width: 36%;
      box-sizing: border-box;
      padding-right: 6.563*2px;
      position: relative;
      img {
        width: 100%;
      }
      .credit {
        font-size: 24px;
        color: #ffeac9;
        position: absolute;
        top: 36%;
        left: 0;
        right: 0;
        text-align: center;
        padding-right: 6.563*2px;
      }
      .login {
        font-size: 24px;
        color: #ae8339;
        position: absolute;
        top: 66%;
        left: 0;
        right: 0;
        text-align: center;
        padding-right: 6.563*2px;
      }
    }
  }
}
</style>
