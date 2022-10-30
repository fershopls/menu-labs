<template>
  <container class="md:max-w-lg">

    <section id="alert">
      <div class="flex bg-yellow-400 justify-between py-3 px-4 items-center">
        <UiButton @click="goToEdit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
          </svg>

          Edit this page
        </UiButton>

        <div class="font-bold">
          Edit products, change prices, and more.
        </div>
      </div>
    </section>

    <section id="header">
      <div class="bg-red-100 bg-cover bg-center relative" :style="{
      height: '300px',
      backgroundImage: `url('https://www.eltiempo.com/files/image_1200_680/uploads/2021/04/15/6078c68c2f49b.jpeg')`,
    }">
        <div class="inset-0 text-white absolute bg-black/50 flex flex-col items-center justify-center gap-5">
          <div class="text-5xl font-black">THE MENU</div>
          <div class="text-lg">Serving up the whole menu all day long!</div>
        </div>
      </div>
    </section>

    <section id="choose-items">
      <div class="mt-4 px-3">
        <UiTitle color="yellow">Appetizers</UiTitle>

        <div class="mt-3">Start off your meal with a variety of delicious appetizers!</div>
      </div>
    </section>

    <section id="item-list" class="mt-4 pb-12">
      <!-- Item Start -->
      <div v-for="(item, x) in menu.items" :key="item.name"
           v-show="item.active"
           @click="!isSelected(item.id) && select(item.id)"
           class="flex px-5 py-4 border-4 transition-transform duration-200"
           :class="[
                   isSelected(item.id) === false ? (x % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1') : null,
                   {
                     'border-yellow-300 bg-yellow-300 text-gray-800': isSelected(item.id) === true,
                     'border-transparent bg-white group hover:border-yellow-400 hover:scale-105 hover:shadow-yellow-400/10 hover:shadow-xl cursor-pointer': isSelected(item.id) === false,
                   }
              ]"
      >
        <div class="flex-grow grid">
          <div class="font-black uppercase text-xl group-hover:text-yellow-400 flex items-center gap-2">
            {{ item.name }}
            <span>
                  ${{ price(count(item.id, 1) * item.price) }}
                </span>
          </div>

          {{ item.description }}

          <div v-if="isSelected(item.id)" class="flex items-center gap-2">
            <div class="p-2 rounded cursor-pointer select-none text-yellow-800 hover:text-white hover:bg-red-600 bg-yellow-500"
                 @click.stop="unselect(item.id)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>

            <counter v-model="item_selection_counts[item.id]" :default="1"
                     @change="(x) => x === 0 && unselect(item.id)"/>
          </div>

        </div>

        <div class="w-28 h-28 rounded overflow-hidden bg-center bg-cover"
             :style="{backgroundImage: `url('${item.photo}')`}"></div>
      </div>
      <!-- Item End -->
    </section>

    <section v-if="total_count > 0">
      <div class="bg-gray-800 py-12">

        <div class="flex justify-center pb-8">
          <UiTitle color="white">Your Order</UiTitle>
        </div>

        <div class="mx-auto w-2/3">
          <!-- Ticket-->
          <div class="border rounded p-2 shadow-2xl shadow-white/20 bg-white select-none">
            <div class="text-center">
              <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
                </svg>
              </div>

              <div class="mt-2 text-xl font-black tracking-wider">
                STARBUCKS
              </div>

              <div class="text-sm">
                <p>1234 Main St, New York, NY 10001</p>
              </div>
            </div>

            <div class="mt-4"></div>

            <div v-for="id in item_selection_ids" :key="id" class="flex justify-between">
              <div>
                <span class="font-bold">{{ count(id) }}</span>
                <span class="text-sm"> x </span>
                <span class="font-bold">{{ item(id).name }}</span>
              </div>

              <div>
                {{ price(count(id) * item(id).price) }}
              </div>
            </div>

            <div class="border-t-2 border-dashed my-4"></div>

            <div class="flex justify-between">
              <span class="font-bold">Subtotal</span>

              <span class="">{{ price(total_price) }}</span>
            </div>

            <div class="flex justify-between">
              <span class="font-bold">Tax</span>

              <span class="">{{ price(total_price * 0.19) }}</span>
            </div>

            <div class="border-t-2 border-dashed my-4"></div>

            <div class="flex justify-between">
              <div>
                <span class="font-bold">Total</span>
                <span class="ml-1 text-sm">({{ total_count }} items)</span>
              </div>

              <span class="font-bold">{{ price(total_price * 1.19) }}</span>
            </div>

            <div class="border-t-2 border-dashed mt-4"></div>

            <div class="py-6 font-bold text-center text-3xl">
              ${{ price(total_price * 1.19) }} USD
            </div>

            <div class="border-t-2 border-dashed mb-2"></div>

            <div class="text-center text-sm italic text-gray-500 flex justify-center gap-2">
              Thanks for shopping with us!

              <div class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path
                      d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
                </svg>
              </div>
            </div>
          </div>


          <!-- Button-->
          <div class="mt-6 grid">
            <UiButton color="green">
                <span class="tracking-wider" @click="goPayment">
                  CONTINUE TO PAYMENT
                </span>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clip-rule="evenodd"/>
              </svg>
            </UiButton>
          </div>

        </div>

      </div>

    </section>


    <div class="py-12">
      <div class="text-center">
        <ui-title>FAQ</ui-title>
      </div>

      <div class="py-6 px-2 grid gap-4">
        <ui-faq label="About this project">
          <ui-label>Technologies</ui-label>
           This project was made in less than 12 hours using
          <ui-link href="https://v3.nuxtjs.org/" target="_blank">Nuxt 3</ui-link> carefully configured with <ui-link href="https://vitejs.dev/" target="_blank">Vite</ui-link> as the build tool,
          <ui-link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</ui-link>,
          and
          <ui-link href="https://v3.vuejs.org/" target="_blank">Vue 3</ui-link>
          with
          <ui-link href="https://www.typescriptlang.org/" target="_blank">Typescript</ui-link> using only the Composition API.
          <br>
          For the state management I used <ui-link href="https://pinia.vuejs.org/" target="_blank">Pinia</ui-link>.

          <br><br>

          <ui-label>Why?</ui-label>
          I wanted to try out Nuxt 3 and Vite, and I thought it would be a good idea to make a small project with it.
          <br>
          I am a fast worker and I was able to finish this project in less than 12 hours. Working with completely new technologies (Nuxt 3, Pinia, Vite) was a bit challenging since a lot of errors came up, but I solved them all.

          <br><br>

          <ui-label>Project Bonus!</ui-label>
          Dont forget to see the admin panel where you can edit existing items, and add new ones!

          <br><br>

          <ui-label>Source code?</ui-label>

          You can see the source code on <ui-link href="https://github.com/fershopls/menu-labs">Github repo here</ui-link>, just in case you want to see how clean is my code.

          <br><br>

          <ui-label>About me</ui-label>
          My name is Fernando Muñoz, I am a 22 year old self taught developer. <br>
          I started learning web development in 2012. At the age of 12!<br>
          I have been programming since I was 10 years old making creative things with Batch (calendar, small text games).<br>
          I have been learning a lot of things since then, and I am still learning new things every day.<br>
          I know a lot about: PHP 8, Laravel 9, Python 3, Vue 3, Tailwind CSS, Google Colab, and more!<br>
        </ui-faq>

        <ui-faq label="The design was made by you?">
          Yes. Directly on HTML and Tailwind CSS. (I didn't used figma or any other design tool)
        </ui-faq>

        <ui-faq label="Developer Contact Details">
          <div class="grid gap-4">

            <div>
              <ui-label>Email</ui-label>
              <div class="select-all border border-gray-300 rounded p-2">
                shaaf4ever@gmail.com
              </div>
            </div>

            <div>
              <ui-label>Github</ui-label>
              <ui-link href="https://github.com/fershopls" target="_blank">
                https://github.com/fershopls
              </ui-link>
            </div>

          </div>
        </ui-faq>
      </div>
    </div>

  </container>
</template>

<script lang="ts" setup>
const menu = useMenuStore();

const item_selection_ids = ref([]);
const item_selection_counts = ref({});

function select(id) {
  if (item_selection_ids.value.includes(id) === false) {
    item_selection_counts.value[id] = 1;
    item_selection_ids.value.push(id);
  }
}

function unselect(id) {
  item_selection_ids.value = item_selection_ids.value.filter(x => x !== id);
  item_selection_counts.value[id] = 1;
}

function isSelected(id) {
  return item_selection_ids.value.includes(id);
}

function price(x) {
  return (Math.round(x * 100) / 100).toFixed(2);
}

function item(id) {
  return menu.items.find(x => x.id === id);
}

function count(id, default_ = 0) {
  return item_selection_counts.value[id] ?? default_;
}

const total_count = computed(() => {
  return item_selection_ids.value.reduce((acc, id) => {
    return acc + count(id);
  }, 0);
});

const total_price = computed(() => {
  return price(item_selection_ids.value.reduce((acc, id) => {
    return acc + count(id) * item(id).price;
  }, 0));
});

function goToEdit() {
  navigateTo('/edit');
}

function goPayment() {
  alert('Order received, this time is free!! Enjoy the demo :)');
}
</script>