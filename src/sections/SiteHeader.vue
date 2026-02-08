<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { navLinks } from '../data/content'
import { useBookingModal } from '../composables/useBookingModal'

const { openBookingModal } = useBookingModal()
const { t, locale } = useI18n()

const locales = ['uz', 'ru', 'en']
const isLangOpen = ref(false)
const desktopLangDropdown = ref(null)
const mobileLangDropdown = ref(null)

const localizedLinks = computed(() =>
  navLinks.map((link) => ({
    href: link.href,
    label: t(link.labelKey),
  })),
)

function toggleLangDropdown() {
  isLangOpen.value = !isLangOpen.value
}

function selectLocale(lang) {
  locale.value = lang
  isLangOpen.value = false
}

function handleOutsideClick(event) {
  const outsideDesktop = desktopLangDropdown.value && !desktopLangDropdown.value.contains(event.target)
  const outsideMobile = mobileLangDropdown.value && !mobileLangDropdown.value.contains(event.target)
  if (outsideDesktop && outsideMobile) {
    isLangOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleOutsideClick)
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-emerald-100/80 bg-white/85 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <img src="/logo.png" alt="" class="w-45">
      <nav class="hidden items-center gap-6 md:flex">
        <a
          v-for="link in localizedLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-emerald-800 transition hover:text-emerald-500"
        >
          {{ link.label }}
        </a>
        <div ref="desktopLangDropdown" class="relative ml-2">
          <button
            type="button"
            class="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-50"
            @click.stop="toggleLangDropdown"
          >
            {{ t(`lang.${locale}`) }}
            <span class="text-[10px]">▼</span>
          </button>
          <div
            v-if="isLangOpen"
            class="absolute right-0 top-10 z-20 min-w-[70px] rounded-xl border border-emerald-100 bg-white p-1.5 shadow-lg"
          >
            <button
              v-for="lang in locales"
              :key="lang"
              type="button"
              class="block w-full rounded-lg px-2 py-1.5 text-left text-xs font-semibold text-emerald-800 transition hover:bg-emerald-50"
              :class="locale === lang ? 'bg-emerald-50' : ''"
              @click="selectLocale(lang)"
            >
              {{ t(`lang.${lang}`) }}
            </button>
          </div>
        </div>
      </nav>
      <div class="flex items-center gap-2">
        <div ref="mobileLangDropdown" class="relative md:hidden">
          <button
            type="button"
            class="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-2.5 py-1 text-[10px] font-bold text-emerald-800 transition hover:bg-emerald-50"
            @click.stop="toggleLangDropdown"
          >
            {{ t(`lang.${locale}`) }}
            <span>▼</span>
          </button>
          <div
            v-if="isLangOpen"
            class="absolute right-0 top-8 z-20 min-w-[64px] rounded-xl border border-emerald-100 bg-white p-1 shadow-lg"
          >
            <button
              v-for="lang in locales"
              :key="`mobile-${lang}`"
              type="button"
              class="block w-full rounded-lg px-2 py-1 text-left text-[10px] font-semibold text-emerald-800 transition hover:bg-emerald-50"
              :class="locale === lang ? 'bg-emerald-50' : ''"
              @click="selectLocale(lang)"
            >
              {{ t(`lang.${lang}`) }}
            </button>
          </div>
        </div>
        <button
          type="button"
          class="rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-emerald-500"
          @click="openBookingModal()"
        >
          {{ t('nav.book') }}
        </button>
      </div>
    </div>
  </header>
</template>
