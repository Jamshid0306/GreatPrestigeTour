<script setup>
import { useI18n } from 'vue-i18n'
import { destinations } from '../data/content'
import { useBookingModal } from '../composables/useBookingModal'

const {
  isBookingOpen,
  bookingForm,
  closeBookingModal,
  submitBooking,
} = useBookingModal()

const { t } = useI18n()
</script>

<template>
  <div
    v-if="isBookingOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/45 px-4"
    @click.self="closeBookingModal"
  >
    <div class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
      <div class="mb-4 flex items-start justify-between gap-4">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.12em] text-emerald-500">{{ t('modal.tag') }}</p>
          <h3 class="mt-1 text-xl font-extrabold text-emerald-950">{{ t('modal.title') }}</h3>
        </div>
        <button
          type="button"
          class="rounded-lg px-2 py-1 text-xl leading-none text-emerald-700 hover:bg-emerald-50"
          :aria-label="t('modal.close')"
          @click="closeBookingModal"
        >
          ×
        </button>
      </div>

      <form class="space-y-4" @submit.prevent="submitBooking">
        <div>
          <label for="fullName" class="mb-1 block text-sm font-semibold text-emerald-900">{{ t('modal.fullName') }}</label>
          <input
            id="fullName"
            v-model="bookingForm.fullName"
            type="text"
            required
            :placeholder="t('modal.fullNamePlaceholder')"
            class="w-full rounded-xl border border-emerald-200 px-3 py-2.5 text-sm text-emerald-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          >
        </div>

        <div>
          <label for="phone" class="mb-1 block text-sm font-semibold text-emerald-900">{{ t('modal.phone') }}</label>
          <input
            id="phone"
            v-model="bookingForm.phone"
            type="tel"
            required
            :placeholder="t('modal.phonePlaceholder')"
            class="w-full rounded-xl border border-emerald-200 px-3 py-2.5 text-sm text-emerald-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          >
        </div>

        <div>
          <label for="tour" class="mb-1 block text-sm font-semibold text-emerald-900">{{ t('modal.tour') }}</label>
          <select
            id="tour"
            v-model="bookingForm.tour"
            required
            class="w-full rounded-xl border border-emerald-200 bg-white px-3 py-2.5 text-sm text-emerald-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          >
            <option
              v-for="tour in destinations"
              :key="tour.titleKey"
              :value="tour.titleKey"
            >
              {{ t(tour.titleKey) }}
            </option>
          </select>
        </div>

        <div>
          <label for="note" class="mb-1 block text-sm font-semibold text-emerald-900">{{ t('modal.note') }}</label>
          <textarea
            id="note"
            v-model="bookingForm.note"
            rows="4"
            :placeholder="t('modal.notePlaceholder')"
            class="w-full rounded-xl border border-emerald-200 px-3 py-2.5 text-sm text-emerald-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
        >
          {{ t('modal.submit') }}
        </button>
      </form>
    </div>
  </div>
</template>
