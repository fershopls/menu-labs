<template>
  <div class="text-3xl font-black uppercase border-b-8 inline-block" :class="[classes]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['color']);

const classes = computed(() => {
  const color = props.color;

  if (color === 'white') {
    return 'text-white border-white';
  }
  if (color === 'yellow') {
    return 'text-yellow-500 border-yellow-500';
  }
  return 'text-gray-800 border-gray-800';
});
</script>