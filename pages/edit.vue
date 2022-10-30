<template>
  <div class="pt-8">
    <container class="rounded md:max-w-3xl px-4 py-8 grid gap-6">
      <div class="flex justify-between">
        <ui-title>Your products</ui-title>

        <ui-button color="green" @click="addNew">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>

          Add new item
        </ui-button>
      </div>

      <div class="border rounded">
        <VueDraggable
            v-model="menu.items"
            :item-key="(item) => item.id"
            handle=".cursor-move"
            ghost-class="bg-gray-500"
            chosen-class="bg-gray-200"
            drag-class="bg-gray-300"
        >
          <template #item="{ element: item }">
            <div class="border-b flex items-center gap-1">
              <div class="px-3 hover:bg-gray-200 self-stretch flex items-center cursor-move bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              </div>

              <div class="self-stretch flex items-stretch">
                <UiCheckbox v-model="item.active"/>
              </div>

              <div class="flex-grow font-bold py-3 px-2 text-lg"
                   :class="{
              'text-gray-400': item.active === false
            }">
                {{ item.name }}
              </div>

              <div class="pr-2">
                <ui-button color="blue" size="sm" @click="edit(item.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                  </svg>

                  Edit
                </ui-button>
              </div>
            </div>
          </template>

        </VueDraggable>
      </div>
    </container>

    <container class="mt-12 rounded md:max-w-3xl px-4 py-6 grid gap-6" v-if="editItem">
      <ui-title>{{ addingNew ? 'Add new item' : 'Edit item' }}</ui-title>

      <div class="grid">
        <ui-label>Name</ui-label>
        <ui-input v-model="editItem.name"/>
      </div>

      <div class="grid">
        <ui-label>Price</ui-label>
        <ui-input v-model="editItem.price"/>
      </div>

      <div class="grid">
        <ui-label>Description</ui-label>
        <ui-input v-model="editItem.description"/>
      </div>

      <div class="grid">
        <ui-label>Photo URL</ui-label>
        <ui-input v-model="editItem.photo"/>
      </div>


      <div class="flex gap-2">
        <ui-checkbox v-model="editItem.active"/>
        <ui-label>Enabled</ui-label>
      </div>

      <ui-button color="green" @click="addingNew? onAdd() : editItem = null">
        {{ addingNew ? 'Save' : 'Close' }}
      </ui-button>
    </container>


    <container class="mt-12 rounded md:max-w-3xl px-4 py-6 grid gap-6">
      <ui-button @click="navigateTo('/')" color="green">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
        </svg>

        GO BACK TO STORE
      </ui-button>
    </container>
  </div>
</template>

<script lang="ts" setup>
import VueDraggable from "vuedraggable";

const menu = useMenuStore();

const editItem = ref(null);
const addingNew = ref(false);

function edit(id) {
  editItem.value = menu.items.find((item) => item.id === id);
}

function addNew() {
  editItem.value = {
    id: Math.random().toString(36).slice(2, 9),
    active: true,
  };
  addingNew.value = true;
}

function onAdd() {
  menu.items.push(editItem.value);
  editItem.value = null;
}

</script>