<template>
   <section id="clients" class="clients bg-secondary bg-gradient">
    <div class="container">

        <div class="row">

            <div class="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <a href="https://jdihn.go.id" target="_blank"> <img src="assets/img/logokendal.png" class="img-fluid" alt=""></a>
            </div>

            <div class="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/logokendal.png" class="img-fluid" alt="">
            </div>

            <div class="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/logokendal.png" class="img-fluid" alt="">
            </div>



        </div>

    </div>
</section>
  <div class="container">
   
    <div
      class="tomorrow"
      data-location-id="056965"
      data-language="EN"
      data-unit-system="METRIC"
      data-skin="light"
      data-widget-type="upcoming"
      style="padding-bottom: 22px; position: relative"
    >
      <a
        href="https://www.tomorrow.io/weather-api/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        style="
          position: absolute;
          bottom: 0;
          transform: translateX(-50%);
          left: 50%;
        "
      >
        <img
          alt="Powered by the Tomorrow.io Weather API"
          src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
          width="250"
          height="18"
        />
      </a>
    </div>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.73296233452!2d110.2016643759589!3d-6.922491967758217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705c699941cc7f%3A0x127394b47b7c183b!2sBadan%20Kepegawaian%2C%20Pendidikan%20dan%20Pelatihan%20Kabupaten%20Kendal!5e0!3m2!1sid!2sid!4v1743011028864!5m2!1sid!2sid" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <footer id="footer" class="footer accent-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-8 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/logokendal.png">
            <span class="sitename"
              >Badan Kepegawaian, Pendidikan dan Pelatihan <br />Kabupaten
              Kendal</span
            >
          </a>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-youtube"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 footer-contact pt-3">
          <p class="mt-3"><strong>Alamat:</strong></p>
          <p>Jl. Soekarno-Hatta No. 193 Kendal, Jawa Tengah | Kode Pos 51313</p>
          <p class="mt-3"><strong>Phone:</strong> <span>0294 382900</span></p>
          <p><strong>Email:</strong> <span>bkpp@kendalkab.go.id</span></p>
        </div>
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span>
        <strong class="px-1 sitename">BKPP Kendal</strong>
        <span>All Rights Reserved</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};

(function (d, s, id) {
  if (d.getElementById(id)) {
    if (window.__TOMORROW__) {
      window.__TOMORROW__.renderWidget();
    }
    return;
  }
  const fjs = d.getElementsByTagName(s)[0];
  const js = d.createElement(s);
  js.id = id;
  js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "tomorrow-sdk");
</script>

<style></style>
