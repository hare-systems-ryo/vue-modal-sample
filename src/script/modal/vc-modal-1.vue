<script setup lang="ts">
type Emits = {
  (e: 'close'): void;
};
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="card" @click.stop>
    <div
      class="card-header bg-primary text-white d-flex justify-content-between align-items-center"
    >
      普通のモーダル
      <button
        type="button"
        class="btn btn-outline-light"
        @click="emit('close')"
      >
        閉じる
      </button>
    </div>
    <div class="card-body bg-light">
      <div class="mb-3">
        <label class="form-label">入力</label>
        <input type="text" class="form-control" placeholder="" />
      </div>
      <div class="mb-3">
        <div class="alert alert-warning" role="alert">
          タブでフォーカスがモーダルから外れる問題がありあます。
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  min-width: 260px;
}
</style>
