<template>
  <div @click="$emit('update:modelValue', !modelValue)" class="cursor-pointer select-none flex items-center justify-center">
    <div
        class="rounded-xl p-1 w-10 flex transition-all"
        :class="{
        'bg-green-500 justify-end': modelValue,
        'bg-gray-300': !!modelValue === false,
      }"
    >
      <div class="bg-white w-4 h-4 rounded-full"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>