<template>
  <button
      class="rounded font-bold text-center uppercase"
      :class="[colorStyle, sizeStyle]"
  >
    <span class="flex justify-center gap-1 items-center">
      <slot/>
    </span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps(['color', 'size']);

const colorStyle = computed(() => {
  const color = props.color;

  if (color === 'green') {
    return 'text-white bg-green-500 hover:bg-green-600 shadow-green-400/20 shadow-xl';
  }

  if (color === 'blue') {
    return 'text-white bg-blue-500 hover:bg-blue-600 shadow-blue-400/20 shadow-xl';
  }

  return 'bg-white hover:bg-gray-200';
});

const sizeStyle = computed(() => {
  const size = props.size;

  if (size === 'sm') {
    return 'px-2 py-2 text-sm';
  }

  if (size === 'lg') {
    return 'px-4 py-4 text-lg';
  }

  return 'px-3 py-3 text-base';
});
</script>
