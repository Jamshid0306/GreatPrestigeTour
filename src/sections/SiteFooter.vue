<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { navLinks } from '../data/content'

const { t } = useI18n()
const localizedLinks = computed(() =>
  navLinks.map((link) => ({
    href: link.href,
    label: t(link.labelKey),
  })),
)
</script>

<template>
  <footer class="mt-10 border-t border-emerald-100/80 bg-gradient-to-b from-white/70 to-emerald-50/70 px-4 pb-6 pt-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-8 rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-[0_24px_70px_-45px_rgba(5,150,105,0.75)] backdrop-blur sm:p-8 lg:grid-cols-3">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-emerald-500">{{ t('footer.brand') }}</p>
          <h3 class="mt-2 text-2xl font-black text-emerald-950">{{ t('footer.title') }}</h3>
          <p class="mt-3 text-sm leading-6 text-emerald-800/85">
            {{ t('footer.description') }}
          </p>
          <a
            href="/license.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-flex rounded-xl border border-emerald-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
          >
            {{ t('footer.license') }}
          </a>
          <a
            href="/license.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 block overflow-hidden rounded-2xl border border-emerald-100 bg-white"
          >
            <iframe
              src="/license.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1"
              class="h-48 w-full"
              title="License preview"
            />
          </a>
        </div>

        <div>
          <p class="text-sm font-extrabold text-emerald-900">{{ t('footer.quickLinks') }}</p>
          <div class="mt-3 grid grid-cols-2 gap-2">
            <a
              v-for="link in localizedLinks"
              :key="link.href"
              :href="link.href"
              class="rounded-xl border border-emerald-100 bg-white px-3 py-2 text-sm font-medium text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <div>
          <p class="text-sm font-extrabold text-emerald-900">{{ t('footer.contact') }}</p>
          <div class="mt-3 space-y-2 text-sm text-emerald-800/90">
            <p>{{ t('footer.phone') }}:</p>
            <a class="block font-semibold text-emerald-700 hover:text-emerald-500" href="tel:+998701049999">
              +998 70 104 99 99
            </a>
            <a class="block font-semibold text-emerald-700 hover:text-emerald-500" href="tel:+998775249999">
              +998 77 524 99 99
            </a>
          </div>
          <a
            href="#home"
            class="mt-4 inline-flex rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            {{ t('footer.contactBtn') }}
          </a>
        </div>
      </div>

      <div class="mt-5 flex flex-col items-center justify-between gap-2 px-2 text-center sm:flex-row sm:text-left">
        <p class="text-sm font-semibold text-emerald-900">{{ t('footer.brand') }}</p>
        <p class="text-xs text-emerald-700/80">© 2026 {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>
