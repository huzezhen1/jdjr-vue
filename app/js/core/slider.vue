<template>
  <section :class="cname">
    <Swiper :options="options" :not-next-tick="options.notNextTick">
      <SwiperSlide v-for="item in items" :key="item.href">
        <RouterLink :to="{name: item.href}">
          <img :src="item.src" alt="">
        </RouterLink>
      </SwiperSlide>
      <div v-if="options.pagination" slot="pagination" class="swiper-pagination" />
    </Swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: 'swiper-pagination',
          },
          notNextTick: false,
        }
      },
      items: {
        type: Array,
        default() {
          return []
        },
      },
    },
  },
}
</script>

<style lang='scss'>
  @import "~swiper/dist/css/swiper.css"
</style>
