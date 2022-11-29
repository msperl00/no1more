<template>
  <div v-if="flag">
    <div
      class="bg-gray-600 mx-auto max-w-screen pl-10 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8">

      <div class="container flex">
        <h2
          class="text-3xl text-white font-bold pt-5 md:pt-0 leading-9 tracking-wide sm:text-2xl sm:leading-10 pl-12 uppercase">

          Estadísticas y datos sobre <span class="text-red-500">la violencia</span> <span class="text-violet-600">de
            género y doméstica</span>
          <!--        <i class="  fas fa-question fa-2xl"></i>
 -->
        </h2>
        <button id="PopUp " @click="() => TogglePopup('buttonTrigger')"
          class="lg:block items-center justify-center mx-10 text-3xl text-gray-300 ">
          <i class="fa fa-notes-medical"></i> </button>
        <button @click="toggle">
        </button>
      </div><!-- Importante en el responsive este flexstart -->
      <div id="BackHome" class="mt-8 flex flex-row lg:mt-0 lg:flex-shrink-0 flexstart ">
        <div class="inline-flex rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm ">
          <router-link to="/violencia"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base btn">
            Go track
          </router-link>

          <ButtonRepo />

        </div>
      </div>
    </div>
    <!-- Better rendering with teleport -->
    <Teleport to="body">
      <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
        <p class="font-normal text-indigo-500  tracking-wide uppercase mb-5 underline underline-offset-2">How to use it
        </p>
        <p class="text-lg text-gray-500 text-justify font-light">
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </p>
        <p class="text-lg text-gray-500 text-justify font-light">
          2. Sed nec sapien id purus mattis ornare.
          Proin vitae nisl at elit finibus pharetra.
        </p>
        <p class="text-lg text-gray-500 text-justify font-light">
          3. Vestibulum vestibulum mi a dolor sollicitudin, ac molestie nibh consectetur.

        </p>
        <p class="text-lg text-gray-500 text-justify font-light">
          4. Nunc placerat nulla a interdum accumsan.
          Suspendisse sed ex in nisl maximus rutrum in vitae ipsum.
        </p>
      </Popup>
    </Teleport>
  </div>
  <div v-else>
    <div class="bg-gray-600 mx-auto max-w-screen pl-10 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8">
      <div class="flex-initial flex w-72 mx-1 my-1 flexstart min-w-full sm:min-w-0">
        <div class="inline-flex">
          <router-link to="/" class="inline-flex  tracking-wider rounded-md  border border-transparent btn text-base ">
            Go back</router-link>
          <ButtonRepo />
        </div>
      </div>
      <div class="grow mx-1  flexstart pl-12 md:flex">
        <div class="grid md:grid-cols-1 text-center items-center">
          <h2
            class="  block  text-center tracking-widest font-light text-white leading-4  text-4xl sm:leading-10 sm:my-3  uppercase">
            {{ title }}
          </h2>
          <div class="relative flexstart">
            <span class=" font-bold uppercase tracking-widest italic mx-10">{{ titleContinent }}</span>
            <img :src="this.url" :alt="this.title" class="relative w-auto h-10   shadow-white ">
          </div>
          <!--  <Clock /> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ButtonRepo from "@/components/ButtonRepo.vue";
import Popup from "@/components/Popup.vue"

import { reactive, toRefs, ref, inject, provide, onMounted } from 'vue'

export default {
  name: "NavRoutes",
  components: {
    ButtonRepo, Popup
  },
  props: {
    TogglePopup: Boolean,
    flag: Boolean,
    title: String,
    titleContinent: String,
    url: String
  },
  setup() {
    const home = true;
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];

    }
    setTimeout(() => {
      popupTriggers.value.timedTrigger = true;
    }, 3000);

    return {
      home,
      Popup,
      popupTriggers,
      TogglePopup,
    }
  },

}
</script>

<style>

</style>

