<template>
  <div :class="$style.header">
    <span :class="$style.left">
      &lt;
    </span>
    <p :class="$style.title">
      {{ title }}
    </p>
    <!-- <span :class="$style.right">
      &gt;
    </span> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}

</script>

<style lang='scss' module>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 88px;
  line-height: 88px;
  color: #252525;
  background: #fff;
  text-align: center;
  font-family: PingHei,Lucida Grande,Lucida Sans Unicode,STHeiti,Helvetica,Arial,Verdana,"sans-serif";
  font-size: 32px; /*px*/
  border-bottom: 2px solid #e5e5e5;
  z-index: 999;
  .left {
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 88px;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 88px;
  }
}
</style>
