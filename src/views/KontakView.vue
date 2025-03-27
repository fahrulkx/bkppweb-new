<template>
  <div class="KontakView">
    <NavbarComponent />

    <!-- Contact Section -->
    <section id="contact" class="contact section">
      <!-- Section Title -->
      <div class="container section-title">
        <h2>Kontak Kami</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <!-- End Section Title -->

      <div class="container">
        <div class="mb-5">
          <iframe
            style="border: 0; width: 100%; height: 370px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.732917639515!2d110.20166437499657!3d-6.9224972930771935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705c699941cc7f%3A0x127394b47b7c183b!2sBadan%20Kepegawaian%2C%20Pendidikan%20dan%20Pelatihan%20Kabupaten%20Kendal!5e0!3m2!1sid!2sid!4v1741665902447!5m2!1sid!2sid"
            frameborder="0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <!-- End Google Maps -->

        <div class="row gy-4">
          <div class="col-md-4">
            <div class="info-item d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-geo-alt"></i>
              <h3>Alamat</h3>
              <p>Jl. Soekarno-Hatta No. 193 Kendal 51313</p>
            </div>
          </div>
          <!-- End Info Item -->

          <div class="col-md-4">
            <div class="info-item d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-telephone"></i>
              <h3>Telepon</h3>
              <p>(0294) 382900</p>
            </div>
          </div>
          <!-- End Info Item -->

          <div class="col-md-4">
            <div class="info-item d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>bkpp@kendalkab.go.id</p>
            </div>
          </div>
          <!-- End Info Item -->

          <!-- End Contact Form -->
        </div>
      </div>
    </section>
    <!-- /Contact Section -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'KontakView',
  components: {
    NavbarComponent,
  },
};
</script>

<style></style>
