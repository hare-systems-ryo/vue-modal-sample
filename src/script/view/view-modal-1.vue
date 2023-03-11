<script setup lang="ts">
import VcModal1 from '@/script/modal/vc-modal-1.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { VuePage } from '@/script/vue-page';
const vueRouter = useRouter();
const isShow = ref(false);
</script>

<template>
  <div class="container-fluid mt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item"
          @click="vueRouter.push({ name: VuePage.home.name })"
        >
          <router-link :to="{ name: VuePage.home.name }"> Home </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          普通のモーダル
        </li>
      </ol>
    </nav>
    <div class="card">
      <div class="card-header bg-primary text-white">普通のモーダル</div>
      <div class="card-body bg-light">
        <div class="mb-3">
          <label class="form-label">入力１</label>
          <input type="text" class="form-control" placeholder="" />
        </div>
        <div class="mb-3">
          <label class="form-label">入力２</label>
          <input type="text" class="form-control" placeholder="" />
        </div>
        <button
          type="button"
          class="btn btn-warning w-100"
          @click="isShow = true"
        >
          モーダルひらく
        </button>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            入力３
          </label>
          <input type="text" class="form-control" placeholder="" />
        </div>
      </div>
    </div>
  </div>
  <teleport to="#teleport">
    <div
      class="modal-container"
      @click="isShow = false"
      :class="{ isShow: isShow }"
    >
      <VcModal1 class="" @close="isShow = false"></VcModal1>
    </div>
  </teleport>
</template>
<style lang="scss" scoped>
.modal-container {
  position: fixed;
  inset: 0;
  background-color: rgba(23, 29, 78, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 300ms;
  &.isShow {
    pointer-events: all;
    opacity: 1;
  }
}
</style>
