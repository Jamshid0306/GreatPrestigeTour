<script setup>
import { computed, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SnapSwiper from '../components/SnapSwiper.vue'
import { destinations } from '../data/content'
import { useBookingModal } from '../composables/useBookingModal'

const fallbackImage = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80'
const isVideoModalOpen = ref(false)
const activeDestination = ref(null)
const { openBookingModal } = useBookingModal()
const { t } = useI18n()

function handleImageError(event) {
  const img = event.target
  if (img && img.src !== fallbackImage) {
    img.src = fallbackImage
  }
}

function getYoutubeVideoId(url) {
  if (!url) return ''
  try {
    const parsedUrl = new URL(url)
    const host = parsedUrl.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      return parsedUrl.pathname.split('/').filter(Boolean)[0] || ''
    }
    if (host.endsWith('youtube.com')) {
      if (parsedUrl.pathname === '/watch') {
        return parsedUrl.searchParams.get('v') || ''
      }
      if (parsedUrl.pathname.startsWith('/shorts/')) {
        return parsedUrl.pathname.split('/')[2] || ''
      }
      if (parsedUrl.pathname.startsWith('/embed/')) {
        return parsedUrl.pathname.split('/')[2] || ''
      }
    }
  } catch {
    return ''
  }
  return ''
}

const activeVideoEmbedUrl = computed(() => {
  const videoId = getYoutubeVideoId(activeDestination.value?.videoUrl)
  if (!videoId) return ''
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
})

function openDestinationVideo(item) {
  activeDestination.value = item
  isVideoModalOpen.value = true
}

function closeDestinationVideo() {
  isVideoModalOpen.value = false
  activeDestination.value = null
}

async function handleBookFromVideo() {
  const tourKey = activeDestination.value?.titleKey
  closeDestinationVideo()
  await nextTick()
  openBookingModal(tourKey)
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
          <article
            role="button"
            tabindex="0"
            class="card flex h-full cursor-pointer flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-25px_rgba(4,120,87,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            @click="openDestinationVideo(item)"
            @keydown.enter.prevent="openDestinationVideo(item)"
            @keydown.space.prevent="openDestinationVideo(item)"
          >
            <img :src="item.image" :alt="t(item.titleKey)" class="h-56 w-full object-cover" @error="handleImageError" />
            <div class="flex flex-1 flex-col gap-3 p-5">
              <h3 class="text-xl font-extrabold text-emerald-950">{{ t(item.titleKey) }}</h3>
              <p class="text-sm leading-6 text-emerald-800/85">{{ t(item.infoKey) }}</p>
              <button
                type="button"
                class="mt-auto w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
                @click.stop="openDestinationVideo(item)"
              >
                {{ t('destinations.watch') }}
              </button>
            </div>
          </article>
        </template>
      </SnapSwiper>
    </div>
  </section>

  <Teleport to="body">
    <div
      v-if="isVideoModalOpen && activeDestination"
      class="fixed inset-0 z-[80] flex items-center justify-center bg-emerald-950/55 px-4"
      @click.self="closeDestinationVideo"
    >
      <div class="w-full max-w-4xl rounded-2xl bg-white p-4 shadow-2xl sm:p-6">
        <div class="mb-4 flex items-start justify-between gap-4">
          <h3 class="text-lg font-extrabold text-emerald-950 sm:text-2xl">
            {{ t(activeDestination.titleKey) }}
          </h3>
          <button
            type="button"
            class="rounded-lg px-2 py-1 text-xl leading-none text-emerald-700 transition hover:bg-emerald-50"
            :aria-label="t('modal.close')"
            @click="closeDestinationVideo"
          >
            ×
          </button>
        </div>

        <div class="overflow-hidden rounded-2xl border border-emerald-100 bg-black">
          <iframe
            v-if="activeVideoEmbedUrl"
            :src="activeVideoEmbedUrl"
            :title="`${t(activeDestination.titleKey)} video`"
            class="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <div
            v-else
            class="flex aspect-video items-center justify-center p-6 text-center text-sm font-semibold text-emerald-100"
          >
            {{ t('destinations.videoUnavailable') }}
          </div>
        </div>

        <button
          type="button"
          class="mt-4 w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500 sm:w-auto sm:px-6"
          @click="handleBookFromVideo"
        >
          {{ t('destinations.book') }}
        </button>
      </div>
    </div>
  </Teleport>
</template>
