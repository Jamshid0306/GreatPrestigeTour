<script setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 4000,
  },
})

const uid = Math.random().toString(36).slice(2, 9)
const prevClass = `swiper-prev-${uid}`
const nextClass = `swiper-next-${uid}`

const modules = [Navigation, Pagination, Autoplay, A11y]

const autoplayConfig = computed(() => {
  if (!props.autoplay || props.items.length < 2) return false
  return {
    delay: props.interval,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }
})

const navigationConfig = computed(() => {
  if (props.items.length < 2) return false
  return {
    prevEl: `.${prevClass}`,
    nextEl: `.${nextClass}`,
  }
})

const paginationConfig = computed(() => {
  if (props.items.length < 2) return false
  return {
    clickable: true,
    dynamicBullets: true,
  }
})
</script>

<template>
  <div class="group relative">
    <button
      v-if="items.length > 1"
      :class="`swiper-nav left-2 ${prevClass}`"
      type="button"
      aria-label="Previous slide"
    >
      ‹
    </button>

    <Swiper
      class="pb-10"
      :modules="modules"
      :slides-per-view="1.2"
      :space-between="24"
      :navigation="navigationConfig"
      :pagination="paginationConfig"
      :autoplay="autoplayConfig"
      :breakpoints="{
        640: { slidesPerView: 1.7 },
        1024: { slidesPerView: 3 },
      }"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        class="h-auto"
      >
        <slot name="slide" :item="item" :index="index" />
      </SwiperSlide>
    </Swiper>

    <button
      v-if="items.length > 1"
      :class="`swiper-nav right-2 ${nextClass}`"
      type="button"
      aria-label="Next slide"
    >
      ›
    </button>
  </div>
</template>
