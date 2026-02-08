<script setup>
import { useI18n } from 'vue-i18n'
import { advantages } from '../data/content'

const { t } = useI18n()
</script>

<template>
  <section id="advantages" class="px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <p class="section-tag">{{ t('advantages.tag') }}</p>
      <h2 class="section-title mb-8">{{ t('advantages.title') }}</h2>

      <div class="grid gap-5 sm:grid-cols-2">
        <article
          v-for="(item, index) in advantages"
          :key="item.titleKey"
          class="card animate-fade-up p-6"
          :class="index > 1 ? '[animation-delay:120ms]' : ''"
        >
          <h3 class="text-xl font-extrabold text-emerald-900">{{ t(item.titleKey) }}</h3>
          <p class="mt-2 text-sm text-emerald-800/80 sm:text-base">{{ t(item.textKey) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
