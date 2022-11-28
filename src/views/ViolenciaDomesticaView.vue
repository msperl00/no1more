<template>
  <div
    class="bg-gray-600 mx-auto max-w-screen pl-10 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8">

    <div class="container flex">
      <h2 class="text-3xl text-white font-bold pt-5 md:pt-0 leading-9 tracking-wide sm:text-2xl sm:leading-10 pl-12 uppercase">
      Violencia doméstica
      </h2>
      <button @click="toggle">
      </button>
    </div>
    <div id="BackHome" class="mt-8 flex flex-row lg:mt-0 lg:flex-shrink-0 flexstart">
      <div class="inline-flex rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm ">
        <router-link to="/"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base btn">
          Back Home</router-link>
           <ButtonRepo />
      </div>
    </div>
  </div>

  <div class="py-12 min-h-screen">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
     
      
    </div>
  </div>

</template>

<script>
import ButtonRepo from "@/components/ButtonRepo.vue";
import Map from "@/components/Map.vue"
import Spinner from "@/components/Spinner.vue";
import NavRoutes from "@/components/NavRoutes.vue"
import Sidebar from "@/components/Sidebar.vue"
import { reactive, toRefs, ref, inject, onMounted } from 'vue'

export default {
  name: "ViolenciaDomestica",
  components: { NavRoutes },
  setup() {
    const loading = inject('mySpinner');
    onMounted(() => {
      loading.val = false;
    })
  },
};
</script>


<style lang="scss" scoped>

</style>