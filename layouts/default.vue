<template>
  <div class="bg-gray-800 min-h-screen relative text-gray-700">
    <section id="desktop-background">
      <!-- BG PHOTO -->
      <div class="bg-red-100 bg-fixed bg-cover absolute inset-0" :style="{
      backgroundImage: `url('https://www.eltiempo.com/files/image_1200_680/uploads/2021/04/15/6078c68c2f49b.jpeg')`,
    }"></div>
      <!-- BG BACKDROP -->
      <div class="inset-0 absolute backdrop-blur-3xl bg-black/60 backdrop-saturate-150"></div>
    </section>

    <div class="overflow-x-auto min-h-screen relative">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>