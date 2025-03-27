<template>
  <div class="BeritaView">
    <NavbarComponent />

    <section class="section">
      <div class="container">
        <!-- berita -->
        <div class="row mt-2">
          <div class="col ">
            <h2>
              <strong>Info Seputar BKPP</strong>
            </h2>
          </div>
        </div>

        <BeritaTerkini />
      </div>
    </section>
  </div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import BeritaTerkini from '@/components/BeritaTerkini.vue'
export default {
    name: 'BeritaView',
    components: {
        NavbarComponent,
        BeritaTerkini
    }
}
</script>

<style>

</style>