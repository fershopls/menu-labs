<template>
  <button
      class="rounded font-bold px-3 py-3 text-center"
      :class="colorStyle"
  >
    <span class="flex justify-center gap-1 items-center">
      <slot/>
    </span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps(['color']);

const colorStyle = computed(() => {
  if (props.color === 'green') {
    return 'text-white bg-green-500 hover:bg-green-600 shadow-green-400/20 shadow-xl';
  }
  return 'bg-white hover:bg-gray-200';
});

</script>
