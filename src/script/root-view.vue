<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { VuePage } from '@/script/vue-page';
const vueRouter = useRouter();
const vueRoute = useRoute();

watch(
  () => vueRoute.name,
  () => {
    // document.title = String(vueRoute.meta.title);
  }
);
</script>
<template>
  <div class="view-root">
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <div
          class="navbar-brand"
          @click="vueRouter.push({ name: VuePage.home.name })"
        >
          Vue Modalサンプル
        </div>
      </div>
    </nav>
    <div class="view-page">
      <router-view></router-view>
    </div>
  </div>
  <teleport to="#teleport"></teleport>
</template>

<style lang="scss" scoped>
.view-root {
  width: 100%;
  min-height: 100%;
  min-height: 100vh;
  min-height: 100dvh;
}
</style>
