<template>
  <container class="md:max-w-3xl px-4 py-12 grid gap-6">
    <div class="flex justify-between">
      <ui-title>Your products</ui-title>

      <ui-button @click="navigateTo('/')" color="green">SAVE & PREVIEW</ui-button>
    </div>

    <div class="border rounded">
      <template v-for="item in menu.items" :key="item.id">
        <div class="border-b flex items-center">
          <div class="px-2 self-stretch flex items-stretch">
            <UiCheckbox v-model="item.active" />
          </div>

          <div class="font-bold py-3 px-2 text-lg">
            {{ item.name }}
          </div>
        </div>
      </template>
    </div>

  </container>
</template>

<script lang="ts" setup>
const menu = useMenuStore();
</script>