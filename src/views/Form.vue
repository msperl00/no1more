<template>

  <div
    class="bg-gray-600 mx-auto max-w-screen pl-10 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8">

    <div class="container flex">
      <h2 class="text-3xl text-white font-bold pt-5 md:pt-0 leading-9 tracking-wide sm:text-4xl sm:leading-10 pl-12">
        <i class="fa fa-brush mr-3 h-10 mb-3"></i>

        Details are <span class="text-indigo-500">everything</span>
        <p class=" flex text-lg font-light ml-16">Help me
          <span class="flex  mx-2 text-indigo-500">thinking</span>
        </p>

      </h2>
      <button @click="toggle">
      </button>
    </div><!-- Importante en el responsive este flexstart -->
    <div id="BackHome" class="mt-8 flex flex-row lg:mt-0 lg:flex-shrink-0 flexstart ">
      <div class="inline-flex rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm ">
        <router-link to="/"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base btn">
          Volver
        </router-link>

        <ButtonRepo />
      </div>
    </div>
  </div>
  <div class="py-12 min-h-screen">
    <Formulario />
  </div>

</template>

<script>
import ButtonRepo from '@/components/ButtonRepo.vue'
import Formulario from '@/components/Formulario.vue'
import { ref, onMounted, inject, onBeforeUpdate, onBeforeMount, computed, reactive } from 'vue'

export default {
  components: {
    ButtonRepo, Formulario
  },
  setup() {
    const loading = inject('mySpinner');
    onMounted(() => {
      loading.val = false;
    })
  },
}

</script>

<style lang="scss" scoped>
</style>
