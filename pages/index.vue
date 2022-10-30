<template>
  <div class="bg-gray-800 min-h-screen relative overflow-x-auto">
    <!-- BG PHOTO -->
    <div class="bg-red-100 bg-fixed bg-cover absolute inset-0" :style="{
      backgroundImage: `url('https://www.eltiempo.com/files/image_1200_680/uploads/2021/04/15/6078c68c2f49b.jpeg')`,
    }"></div>
    <!-- BG BACKDROP -->
    <div class="inset-0 absolute backdrop-blur-3xl bg-black/60 backdrop-saturate-150"></div>

    <div class="text-gray-700  mx-auto md:max-w-lg bg-white md:shadow-xl relative">
      <div class="bg-red-100 bg-cover bg-center relative" :style="{
      height: '300px',
      backgroundImage: `url('https://www.eltiempo.com/files/image_1200_680/uploads/2021/04/15/6078c68c2f49b.jpeg')`,
    }">
        <div class="inset-0 text-white absolute bg-black/50 flex flex-col items-center justify-center gap-5">
          <div class="text-5xl font-black">THE MENU</div>
          <div class="text-lg">Serving up the whole menu all day long!</div>
        </div>
      </div>

      <div class="pb-12">
        <div class="mt-8 px-3">
          <div class="text-3xl text-yellow-500 font-black uppercase border-b-8 border-yellow-500 inline-block">APPETIZERS</div>
          <div class="mt-3">Start off your meal with a variety of delicious appetizers!</div>
        </div>

        <div class="mt-6">
          <div v-for="(item, x) in menu.items" :key="item.name"
               class="flex cursor-pointer px-5 py-4 group hover:border-yellow-400 border-4 border-transparent bg-white hover:scale-105 transition-transform duration-200 hover:shadow-yellow-400/10 hover:shadow-xl"
               :class="x % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'"
          >
            <div class="flex-grow">
              <div class="font-black uppercase text-xl group-hover:text-yellow-400">
                {{ item.name }}
                <span>${{ item.price }}</span>
              </div>
              {{ item.description }}
            </div>

            <div class="w-28 h-28 rounded overflow-hidden bg-center bg-cover"
                 :style="{backgroundImage: `url('${item.photo}')`}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
usePinia();

import {useMenuStore} from "~/pages/store";
const menu = useMenuStore();
</script>