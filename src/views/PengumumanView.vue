<template>
  <div class="PengumumanView">
    <NavbarComponent />

    <section class="section light-background">
      <div class="container">
        <!-- Pengumuman -->
        <div class="row mt-2">
          <div class="col">
            <h2>
              <strong>Pengumuman</strong>
            </h2>
          </div>
        </div>
        <PengumumanComponent />
        
      </div>
    </section>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import PengumumanComponent from '@/components/PengumumanComponent.vue'

export default {
    name: 'PengumumanView',
    components: {
        NavbarComponent,
        PengumumanComponent,
    }
}

</script>

<style>

</style>