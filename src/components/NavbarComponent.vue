<template>
  <header id="header" class="header sticky-top">
    <div class="topbar d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="d-none d-md-flex align-items-center">Badan Kepegawaian, Pendidikan dan Pelatihan Kabupaten Kendal</div>
        <div class="d-flex align-items-center"><i class="bi bi-phone me-1"></i> Telp. (0294) 382900</div>
      </div>
    </div>
    <!-- End Top Bar -->

    <div class="branding d-flex align-items-center">
      <div class="container position-relative d-flex align-items-center justify-content-end">
        <a href="/" class="logo d-flex align-items-center me-auto">
          <!-- <img src="assets/img/logo-kendal.png" alt=""> -->
          <!-- Uncomment the line below if you also wish to use a text logo -->
          <h1 class="sitename">BKPP Kab. Kendal</h1>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="#">Beranda</a></li>
            <li class="dropdown">
              <a href="#"><span>Profil</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Visi dan Misi</a></li>
                <li><a href="#">Tugas dan Fungsi</a></li>
                <li><a href="#">Struktur Organisasi</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#"><span>Bidang</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Sekretariat</a></li>
                <li><a href="#">Bidang 1</a></li>
                <li><a href="#">Bidang 2</a></li>
                <li><a href="#">Bidang 3</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#"><span>Layanan</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Layanan</a></li>
                <li><a href="#">Layanan 1</a></li>
                <li><a href="#">Layanan 2</a></li>
                <li><a href="#">Layanan 3</a></li>
              </ul>
            </li>
            <li>
              <router-link to="/BeritaView">Berita</router-link>
              </li>
            <li>
              <router-link to="/PengumumanView">Pengumuman</router-link>
              </li>

            <li>
              <router-link to="/KontakView">Kontak</router-link>
            </li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style></style>
