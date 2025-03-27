<template>
      <!-- Daftar Pengumuman -->
      <div v-if="newsList.length" class="row mb-4">
        <div v-for="news in newsList" :key="news.id" class="col-md-12 mt-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {{ news.title }}
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                {{ formatDate(news.created_at) }}
              </h6>
              <p class="card-text">
                {{ news.desc }}
              </p>
              <router-link class="btn btn-success">Baca Selengkapnya</router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Pesan Saat Loading -->
      <p v-else class="text-center">Memuat pengumuman...</p>
    
</template>

<script>
import axios from "axios";

export default {
  name: "PengumumanComponent",
  data() {
    return {
      newsList: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchNews() {
      try {
        const response = await axios.get(
          "http://192.168.10.176:3000/content/posts?pages=1&limit=3"
        );
        console.log(response.data); // Cek struktur API

        if (Array.isArray(response.data.data)) {
          this.newsList = response.data.data;
        } else {
          console.error("Data tidak berbentuk array:", response.data);
          this.error = "Format data tidak valid";
        }
      } catch (err) {
        this.error = "Gagal memuat berita. Coba lagi nanti.";
      } finally {
        this.loading = false;
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("id-ID", options);
    },
  },
  created() {
    this.fetchNews();
  },
};
</script>

<style></style>
