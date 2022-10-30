<template>
  <div class="border border-gray-400">
    <div class="flex items-center p-4 gap-3 select-none hover:bg-gray-100 cursor-pointer" @click="isExpanded = !isExpanded">
      <svg v-if="isExpanded === false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>

      <div class="border-r border-gray-300 self-stretch"></div>

      <div class="font-bold text-2xl">{{ label }}</div>
    </div>

    <div v-if="isExpanded" class="border-t border-gray-300 p-3">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['label']);

const isExpanded = ref(false);
</script>