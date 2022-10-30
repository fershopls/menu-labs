<template>
  <div class="bg-gray-800 min-h-screen relative overflow-x-auto">
    <!-- BG PHOTO -->
    <div class="bg-red-100 bg-fixed bg-cover absolute inset-0" :style="{
      backgroundImage: `url('https://www.eltiempo.com/files/image_1200_680/uploads/2021/04/15/6078c68c2f49b.jpeg')`,
    }"></div>
    <div class="inset-0 absolute backdrop-blur-sm bg-black/40"></div>

    <!-- BG BACKDROP -->
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
          <div v-for="(item, x) in items" :key="item.name"
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
const items = [
  {
    name: 'Hamburger',
    price: 5.99,
    description: 'A hamburger, with lettuce, tomato, and onions.',
    photo: 'https://www.tastingtable.com/img/gallery/steakburger-vs-hamburger-whats-the-biggest-difference/l-intro-1657643502.jpg',
  },
  {
    name: 'Classic Sliders',
    price: 4.99,
    description: 'Three sliders, with lettuce, tomato, and onions.',
    photo: 'http://www.tastewiththeeyes.com/wp-content/uploads/2014/01/IMG_2887.jpg',
  },
  {
    name: 'Fries',
    price: 2.99,
    description: 'A small order of fries. Perfect for sharing.',
    photo: 'https://www.unileverfoodsolutions.com.my/dam/global-ufs/mcos/SEA/calcmenu/recipes/MY-recipes/appetisers/kentang-goreng-pasti-sedap/main-header.jpg',
  },
  {
    name: 'Soda',
    price: 1.99,
    description: 'A refreshing soda to wash down your meal.',
    photo: 'https://media.istockphoto.com/photos/pour-soft-drink-in-glass-with-ice-splash-on-dark-background-picture-id1062831310?k=20&m=1062831310&s=612x612&w=0&h=kvadNOzqCnDYUH83ffviQie1G7E62kBzvZZ8CmZuoxU=',
  },
  {
    name: 'Coffee',
    price: 1.99,
    description: 'A coffe to wake you up. Or keep you up.',
    photo: 'https://post.healthline.com/wp-content/uploads/2020/08/coffee-worlds-biggest-source-of-antioxidants-1296x728-feature_0-732x549.jpg',
  }
];
</script>