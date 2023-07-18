<template>

  <div
    class="bg-gray-600 mx-auto max-w-screen  sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8">

    <div class="container flex">
      <h2 class="text-6xl text-white font-bold  leading-9 tracking-wide sm:leading-10 pl-12">
        Ooppsss!
        <p class=" flex text-lg font-light mt-5">Has encontrado una página que no
          <span class="flex  mx-2 text-indigo-500">existe</span>
        </p>
      </h2>
      <button @click="toggle">
      </button>
    </div><!-- Importante en el responsive este flexstart -->

  </div>

  <div class="bg-gradient-to-r from-indigo-300 to-indigo-600 min-h-screen">
    <div class="w-9/12 m-auto py-10 flex items-center justify-center">
      <div class="bg-indigo-100 shadow overflow-hidden sm:rounded-lg pb-8">
        <div class="border-t border-gray-300 text-center pt-8">
          <h1 class="text-9xl font-bold text-indigo-400">404</h1>
             
                <i class="fa-solid fa-mars fa-2xl mx-16"></i>  
                <i class="fa-solid fa-mars fa-2xl mx-16"></i>  
                <i class="fa-solid fa-mars fa-2xl mx-16"></i>  
                <i class="fa-solid fa-mars fa-2xl mx-16"></i>  
                <i class="fa-solid fa-mars fa-2xl mx-16"></i>  
             
               
          <h1 class="text-4xl  py-8 font-mono font-bold uppercase">Page not found</h1>
            <i class="fa-solid fa-venus h-8 fa-2xl px-16"></i>
            <i class="fa-solid fa-venus h-8 fa-2xl px-16"></i>
            <i class="fa-solid fa-venus h-8 fa-2xl px-16"></i>
            <i class="fa-solid fa-venus h-8 fa-2xl px-16"></i>
            <i class="fa-solid fa-venus h-8 fa-2xl px-16"></i>
            <i class="fa-solid fa-venus h-8 fa-2xl px-16"></i>
            
            
          
          <p class="text-xl mt-8 text-gray-600 pb-8 px-12 font-mono">La página que estas buscando no existe o ha sido eliminada.</p>
       
          <button
            class="bg-gradient-to-r shadow from-indigo-400 to-indigo-600 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
            Vuelve a la página principal
          </button>
          <button
            class="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
            Contacta con nostros
          </button>
        
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref, onMounted, inject, onBeforeUpdate, onBeforeMount, computed, reactive } from 'vue'

export default {
  components: {
  },
  setup() {
    const loading = inject('mySpinner');
    onMounted(() => {
      loading.val = false;
    })
  },
}

</script>

<style type="text/css">
.text-9xl {
  font-size: 14rem;
}

@media(max-width: 645px) {
  .text-9xl {
    font-size: 5.75rem;
  }

  .text-6xl {
    font-size: 1.75rem;
  }

  .text-2xl {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .py-8 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .px-6 {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .mr-6 {
    margin-right: 0.5rem;
  }

  .px-12 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
