<template>
  <panel title="- 众筹新品 -" :class="$style.panel">
    <section :class="$style.content">
      <slider :items="items" :options="options" cname="crow-slider" />
      <div :class="$style.more">
        查看尖货 >
      </div>
    </section>
  </panel>
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
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28174/190/417131104/41529/80db7464/5bf24dd8Nc031dff3.jpg?width=335&height=421',
        href: 'home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27892/325/1984931380/71410/61ed8546/5bf24deeNf7457c6f.jpg?width=335&height=421',
        href: 'home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26245/260/1932008857/33085/5329fce8/5bf28c0aN70c40dfd.jpg?width=335&height=421',
        href: 'home',
      }],
      options: {
        autoplay: false,
        loop: false,
        pagination: '',
        notNextTick: false,
        slidesPerView: 2.25,
        spaceBetween: 24,
        freeMode: true,
        observer: true,
        observeParents: true,
      },
    }
  },
}

</script>

<style lang='scss'>
.crow-slider {
  .swiper-slide {
    width: 250px!important;
    img {
      width: 100%;
    }
    &:first-child {
      margin-left: 32px;
    }
  }
}
</style>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  .content {
    padding-bottom: 40px;
    position: relative;
    .more {
      font-size: 28px;
      color: #999;
      height: 112px;
      line-height: 112px;
      position: absolute;
      top: -110px;
      right: 0;
      margin-right: 32px;
    }
  }
}
</style>
