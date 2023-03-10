import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 6000,
    transition: toast.TRANSITIONS.BOUNCE,
    toastClassName:
      "!rounded-lg !p-4 !text-[15px] !font-medium !font-sans !shadow-lg dark:!bg-gray-800 dark:!text-gray-100 ",
  });
});
