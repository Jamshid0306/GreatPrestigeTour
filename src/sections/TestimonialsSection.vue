<script setup>
import { useI18n } from 'vue-i18n'
import SnapSwiper from '../components/SnapSwiper.vue'
import { testimonials } from '../data/content'

const { t } = useI18n()
</script>

<template>
  <section id="testimonials" class="px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <p class="section-tag">{{ t('testimonials.tag') }}</p>
      <h2 class="section-title mb-8">{{ t('testimonials.title') }}</h2>

      <SnapSwiper :items="testimonials" :interval="5000">
        <template #slide="{ item }">
          <article class="card h-full p-6">
            <p class="text-base leading-relaxed text-emerald-900/90">“{{ t(item.textKey) }}”</p>
            <div class="mt-6 border-t border-emerald-100 pt-4">
              <p class="font-bold text-emerald-900">{{ item.author }}</p>
              <p class="text-sm text-emerald-700/80">{{ t(item.cityKey) }}</p>
            </div>
          </article>
        </template>
      </SnapSwiper>
    </div>
  </section>
</template>
