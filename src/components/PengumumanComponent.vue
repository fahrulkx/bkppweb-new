<template>
  <div class="row mb-4">
    <!-- <div v-for="pengumuman in pengumumanList" :key="pengumuman.id" class="col-md-12 mt-4"></div> -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <!-- {{ pengumuman.titel }} --> Judul Pengumuman
          </h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          Tanggal Pengumuman
        </h6>
        <p class="card-text">
          <!-- {{ news.desc }} --> Lorem Assentator adsum contigo coepi suus tenax volup aggredior hic auctus. Rerum pariatur depereo vilitas. Aiunt vinum qui sto succedo veritas aedificium usitas statim decet.\nClamo claro sum pectus. Auxilium curatio tametsi solio trans aurum uberrime. Tamisium suus texo deporto crux adeptio aequitas.\nAestus aliqua vel cicuta vetus corporis vinitor tubineus peccatus suffragium. Sursum ascit cruentus cubo taedium cupio vigilo velut complectus. Adulatio cunctatio cunabula.
        </p>
        <router-link
            class="btn btn-success"
          >Baca Selengkapnya</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: 'PengumumanComponent',
  // data() {
  //   return {
  //     pengumumanList: [],
  //     loading: true,
  //     error: null,
  //   };
  // },
  // methods: {
  //   async fetchPengumuman() {
  //     try {
  //       const response = await axios.get(
  //         "http://192.168.10.176:3000/content/posts?pages=1&limit=5"
  //       );
  //       this.pengumumanList = response.data.data;
  //       console.log(response.data)
  //     } catch (err) {
  //       this.error = "Gagal memuat berita. Coba lagi nanti.";
  //     } finally {
  //       this.loading = false;
  //     }
  //   },
  //   formatDate(date) {
  //     const options = { year: "numeric", month: "long", day: "numeric" };
  //     return new Date(date).toLocaleDateString("id-ID", options);
  //   },
  // },
  // created() {
  //   this.fetchPengumuman();
  // },
};
</script>

<style></style>
