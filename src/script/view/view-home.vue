<script setup lang="ts">
import { useRouter } from 'vue-router';
import { VuePage } from '@/script/vue-page';
const vueRouter = useRouter();
</script>

<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header bg-primary text-white">menu</div>
      <div class="card-body bg-light">
        <div class="list-group">
          <router-link
            class="list-group-item list-group-item-action"
            :to="{ name: VuePage.modal1.name }"
          >
            普通のモーダル
          </router-link>
          <router-link
            class="list-group-item list-group-item-action"
            :to="{ name: VuePage.modal2.name }"
          >
            フォーカス制御されたモーダル （モーダル領域外クリック不可）
          </router-link>
          <router-link
            class="list-group-item list-group-item-action"
            :to="{ name: VuePage.modal3.name }"
          >
            フォーカス制御されたモーダル （モーダル領域外クリック可能）
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
