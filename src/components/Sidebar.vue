<template>
  <div
    class="lg:flex inset-0 transform lg:transform-none lg:opacity-100  lg:relative z-10  bg-gray-700 text-white min-h-screen p-3 pt-5 border-t-2 border-b-2">
    
  </div>

</template>

<script>
import { useSideBarStore } from '@/stores/sidebarStore'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import Observer from "./Observer.vue";

export default {
  components: {
    Observer,
  },
  props: {
    global: Boolean,
    countries: Array,
  },
  data: () => ({ page: 1, items: [], isActive: false, selectedItem: null }),
  setup(props, context) {

    let selected = 0;
    const store = useSideBarStore();
    const { visibility, measures } = storeToRefs(store);
    function toggleSideBar() {
      store.toggleSideBar();
    }
    return {
      // you can return the whole store instance to use it in the template
      store, visibility, measures, toggleSideBar, selected
    }
  },
  methods: {
    /**
     * Metodo que emite el evento que proporcionar
     * el pais seleccionado en el sidebar
     * @param {*} item 
     */
    intersected(item, event) {

      // ? IF IS COUNTRY
      if (item != null) {
        if (this.selectedItem == null) {
          this.selectedItem = item.country;
        } else {
          document.getElementById(this.selectedItem).style.color = 'white';
          this.selectedItem = item.country;
        }
        document.getElementById(item.country).style.color = 'rgb(34 197 94)';
        this.$emit('get-country', item);
/*         this.$emit('get-global', 'DataGlobalBox');
 */        
      // IF IS GLOBAL
      } else {
         if (this.selectedItem != null) {
          document.getElementById(this.selectedItem).style.color = 'white';
        }
        this.$emit('get-country', item);
/*         this.$emit('get-global', 'DatalBox');
 */      }
    },
  },
}
</script>

<style>
:root {
  --sidebar-bg-color: #1d2431;
  --sidebar-item-hover: #3a38a1;
  --sidebar-item-active: #2a38a1;

}
</style>

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
  height: 750px;
}
</style>