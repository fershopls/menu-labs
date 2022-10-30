<template>
  <input
      type="text"
      class="border rounded border-gray-300 px-3 py-3 text-lg focus:outline-none focus:ring-0"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script lang="ts" setup>

const props = defineProps(['modelValue']);

const emit = defineEmits(['update:modelValue']);

</script>