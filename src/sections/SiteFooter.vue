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
          <div class="mt-4 flex items-center gap-2">
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-white text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600"
            >
              <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" stroke="currentColor" stroke-width="1.8">
                <path d="M21 4.5L3.8 11.2c-.9.3-.9 1.6.1 1.9l3.8 1.2c.5.2 1 .1 1.4-.2l8.5-6.3-6.7 7.9c-.3.3-.4.8-.3 1.2l.7 3.1c.2.9 1.3 1.1 1.8.3L21 6.2c.4-.8-.2-1.8-1-1.7Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-white text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600"
            >
              <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" stroke="currentColor" stroke-width="1.8">
                <rect x="4" y="4" width="16" height="16" rx="4.5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-white text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600"
            >
              <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" stroke="currentColor" stroke-width="1.8">
                <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
                <path d="M10 9.4L15 12l-5 2.6V9.4Z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-5 flex flex-col items-center justify-between gap-2 px-2 text-center sm:flex-row sm:text-left">
        <p class="text-sm font-semibold text-emerald-900">{{ t('footer.brand') }}</p>
        <p class="text-xs text-emerald-700/80">© 2026 {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>
