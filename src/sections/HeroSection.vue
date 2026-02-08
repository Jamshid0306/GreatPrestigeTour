<script setup>
import { useI18n } from 'vue-i18n'
import { stats } from '../data/content'

const { t } = useI18n()
</script>

<template>
  <section id="home" class="relative overflow-hidden px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pt-20">
    <div class="hero-glow" aria-hidden="true" />
    <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
      <div class="animate-fade-up space-y-6">
        <p class="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          {{ t('hero.badge') }}
        </p>
        <h1 class="text-balance text-4xl font-black leading-tight text-emerald-950 sm:text-5xl lg:text-6xl">
          {{ t('hero.title') }}
        </h1>
        <p class="max-w-xl text-base text-emerald-800/80 sm:text-lg">
          {{ t('hero.description') }}
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="#destinations"
            class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
          >
            {{ t('hero.explore') }}
          </a>
          <a
            href="#advantages"
            class="rounded-full border border-emerald-300 px-6 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"
          >
            {{ t('hero.whyUs') }}
          </a>
        </div>
        <div class="grid grid-cols-3 gap-4 pt-2">
          <article
            v-for="item in stats"
            :key="item.labelKey"
            class="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm"
          >
            <p class="text-2xl font-black text-emerald-700">{{ item.value }}</p>
            <p class="text-xs text-emerald-900/70 sm:text-sm">{{ t(item.labelKey) }}</p>
          </article>
        </div>
      </div>

      <div class="animate-fade-up [animation-delay:120ms]">
        <div class="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-3 shadow-[0_20px_90px_-35px_rgba(5,150,105,0.65)]">
          <iframe
            class="h-full w-full rounded-[1.3rem]"
            src="https://www.youtube.com/embed/vQVwkyn3-F8?autoplay=1&mute=1&loop=1&playlist=vQVwkyn3-F8&controls=0&modestbranding=1&rel=0"
            :title="t('hero.videoTitle')"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>
