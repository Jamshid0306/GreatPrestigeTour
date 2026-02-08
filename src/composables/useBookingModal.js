import { reactive, ref } from 'vue'
import { destinations } from '../data/content'

const isBookingOpen = ref(false)

const bookingForm = reactive({
  fullName: '',
  phone: '',
  note: '',
  tour: destinations[0]?.titleKey || '',
})

function openBookingModal(tourKey) {
  bookingForm.tour = tourKey || destinations[0]?.titleKey || ''
  isBookingOpen.value = true
}

function closeBookingModal() {
  isBookingOpen.value = false
}

export function useBookingModal() {
  return {
    isBookingOpen,
    bookingForm,
    openBookingModal,
    closeBookingModal,
  }
}
