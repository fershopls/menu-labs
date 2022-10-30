<template>
  <div class="inline-block rounded bg-yellow-600 select-none">
    <div class="flex items-center gap-2">
      <div class="text-yellow-400 hover:bg-yellow-700 px-2 py-2 cursor-pointer" @click.capture.stop="increment(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        </svg>

      </div>

      <div class="font-bold text-xl text-white">{{ modelValue ?? $props.default }}</div>

      <div class="text-yellow-400 hover:bg-yellow-700 px-2 py-2 cursor-pointer" @click.capture.stop="increment(+1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Number,
  },
  default: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number
  },
});

const emit = defineEmits(['update:modelValue', 'change', 'changed']);

function value() {
  if (props.modelValue === undefined) {
    return props.default;
  }

  return props.modelValue;
}

function increment(amount) {
  const new_value = value() + amount;

  if (props.min !== undefined && new_value < props.min) {
    return;
  }

  if (props.max !== undefined && new_value > props.max) {
    return;
  }

  emit('change', new_value);
  emit('update:modelValue', new_value);
  emit('changed', new_value);
}
</script>