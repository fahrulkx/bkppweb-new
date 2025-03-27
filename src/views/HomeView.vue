<template>
  <div class="home">
    <NavbarComponent />
    <HeroSection />

    <BeritaTerkini />

    <PengumumanComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import BeritaTerkini from '@/components/BeritaTerkini.vue';
import PengumumanComponent from '@/components/PengumumanComponent.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    HeroSection,
    BeritaTerkini,
    PengumumanComponent,
  },
};
</script>
