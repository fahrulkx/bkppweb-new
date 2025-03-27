<template>
  <router-view />
  <FooterComponent />
</template>

<script>
// @ is an alias to /src
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
  },
};
</script>
