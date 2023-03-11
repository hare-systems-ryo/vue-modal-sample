<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { ref, watch } from 'vue';
type Props = {
  isShow: boolean;
};
const props = defineProps<Props>();
type Emits = {
  (e: 'close'): void;
};
const emit = defineEmits<Emits>();
const target = ref();
const { hasFocus, activate, deactivate } = useFocusTrap(target, {
  allowOutsideClick: true,
});

watch(
  () => props.isShow,
  () => {
    if (props.isShow) {
      //
      activate();
    } else {
      //
      deactivate();
    }
  }
);
</script>

<template>
  <div class="card" @click.stop ref="target">
    <div
      class="card-header bg-primary text-white d-flex justify-content-between align-items-center"
    >
      フォーカス制御されたモーダル2
      <button
        type="button"
        class="btn btn-outline-light"
        @click="emit('close')"
      >
        閉じる{{ hasFocus }}
      </button>
    </div>
    <div class="card-body bg-light">
      <div class="mb-3">
        <label class="form-label">入力</label>
        <input type="text" class="form-control" placeholder="" />
      </div>
      <div class="mb-3">
        <div class="alert alert-warning" role="alert">
          タブでフォーカス移動してもモーダルからフォーカスが離れない。
        </div>
      </div>
      <div class="mb-3">
        <div class="alert alert-warning" role="alert">
          フォーカス対象外をクリックしたときのイベントが発火できる
          ※モーダルを閉じれる
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
