<script setup>
import SiteHeader from './sections/SiteHeader.vue'
import HeroSection from './sections/HeroSection.vue'
import DestinationsSection from './sections/DestinationsSection.vue'
import AdvantagesSection from './sections/AdvantagesSection.vue'
import TestimonialsSection from './sections/TestimonialsSection.vue'
import SiteFooter from './sections/SiteFooter.vue'
import BookingModal from './components/BookingModal.vue'
</script>

<template>
  <div class="min-h-screen bg-emerald-pattern">
    <SiteHeader />
    <main>
      <HeroSection />
      <DestinationsSection />
      <AdvantagesSection />
      <TestimonialsSection />
    </main>
    <BookingModal />
    <SiteFooter />
  </div>
</template>
