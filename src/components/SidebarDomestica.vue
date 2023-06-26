<template>
    <div 
      class=" mx-auto lg:flex inset-0 transform lg:transform-none lg:opacity-100  lg:relative z-10 text-dark  p-3 pt-5 ">
      <transition name="slide-fade">
        <nav v-if="true" >
          <button
            class="block  px-1 py-2 hover:bg-violet-400 active:bg-violet-500 w-full font-mono shadow-lg shadow-grey-700/30 mx-auto"
            @click="intersected('Total de victimas', $event)
                  ">Total de victimas</button>
          <button
            class="block px-1 py-2 hover:bg-violet-400 active:bg-violet-500 w-full font-mono shadow-lg shadow-grey-700/30 mx-auto"
            @click="intersected('Domestica', $event)
                  ">Victimas de violencia de género y doméstica</button>
          <button
            class="block  px-1 py-2 hover:bg-violet-400 active:bg-violet-500 w-full font-mono shadow-lg shadow-grey-700/30 "
            @click="intersected('Detenidos', $event)
                  ">Detenidos e investigados en total</button>
          <button
            class="block  px-1 py-2 hover:bg-violet-400 active:bg-violet-500 w-full font-mono shadow-lg shadow-grey-700/30 "
            @click="intersected('Mortales', $event)
                  ">Victimas mortales</button>
  
          <ul class="scroll-container">
  
          </ul>
        </nav>
      </transition>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs, ref, inject, onMounted, isRef } from 'vue'
  export default {
    name: "SidebarDomestica",
    setup(props, context) {
  
    },
    methods: {
   /**
       * Metodo que emite el evento que proporcionar
       * el nombre de los datos que hemos seleccionado y queremos mostrar
       * @param {*} item 
       */
      intersected(item, event) {
        this.$emit('get-violencia', item);
      }
    }
  }
  </script>
  
  
  <style scoped>
  /*
    Enter and leave animations can use different
    durations and timing functions.
  */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(50px);
    opacity: 0;
  }
  
  .sidebar {
    background-color: var(--sidebar-bg-color);
  }
  
  .active {
    background-color: greenyellow;
  }
  
  .scroll-container {
    overflow-y: scroll;
  }
  </style>