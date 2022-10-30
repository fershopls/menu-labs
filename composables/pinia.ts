import {useNuxtApp} from "#app";
import {createPinia} from "pinia";

export const usePinia = () => {
    const nuxtApp = useNuxtApp();
    const pinia = createPinia();

    nuxtApp.vueApp.use(pinia);

}