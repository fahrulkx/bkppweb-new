<template>


      <div class="row mb-4">
        <div v-for="news in newsList" :key="news.id" class="col-md-4 mt-4">
          <div class="card">
            <img
              :src="`http://bkpp.kendalkab.go.id/packages/photo/${news.fav}`"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ news.titel }}</h5>
              <p class="card-text">{{ news.desc }}</p>
              <router-link :to="`/berita/${news.id}`" class="btn btn-success"
                >Baca Selengkapnya test</router-link
              >
            </div>
          </div>
        </div>
      </div>


</template>

<script>
import axios from "axios";

export default {
  name: "BeritaTerkini",
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
        this.newsList = response.data.data;
        // console.log(response.data)
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
