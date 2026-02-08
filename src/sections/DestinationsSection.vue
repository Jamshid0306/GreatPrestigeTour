<script setup>
import { useI18n } from 'vue-i18n'
import SnapSwiper from '../components/SnapSwiper.vue'
import { destinations } from '../data/content'
import { useBookingModal } from '../composables/useBookingModal'

const fallbackImage = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80'
const { openBookingModal } = useBookingModal()
const { t } = useI18n()

function handleImageError(event) {
  const img = event.target
  if (img && img.src !== fallbackImage) {
    img.src = fallbackImage
  }
}
</script>

<template>
  <section id="destinations" class="px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mb-8 flex items-end justify-between gap-4">
        <div>
          <p class="section-tag">{{ t('destinations.tag') }}</p>
          <h2 class="section-title">{{ t('destinations.title') }}</h2>
        </div>
      </div>

      <SnapSwiper :items="destinations" :interval="3600">
        <template #slide="{ item }">
          <article class="card flex h-full flex-col overflow-hidden">
            <img :src="item.image" :alt="t(item.titleKey)" class="h-56 w-full object-cover" @error="handleImageError" />
            <div class="flex flex-1 flex-col gap-3 p-5">
              <h3 class="text-xl font-extrabold text-emerald-950">{{ t(item.titleKey) }}</h3>
              <p class="text-sm leading-6 text-emerald-800/85">{{ t(item.infoKey) }}</p>
              <button
                type="button"
                class="mt-auto w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
                @click="openBookingModal(item.titleKey)"
              >
                {{ t('destinations.book') }}
              </button>
            </div>
          </article>
        </template>
      </SnapSwiper>
    </div>
  </section>
</template>
