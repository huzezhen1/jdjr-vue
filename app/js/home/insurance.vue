<template>
  <Panel title="- 保险保障 -" :class="$style.panel">
    <section :class="$style.content">
      <Slider :items="items" :options="options" cname="insu-slider" />
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
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260',
        href: 'home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260',
        href: 'home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260',
        href: 'home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260',
        href: 'home',
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260',
        href: 'home',
      }],
      options: {
        autoplay: false,
        loop: false,
        pagination: '',
        notNextTick: false,
        slidesPerView: 2.32,
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
.insu-slider {
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
    }
  }
</style>
