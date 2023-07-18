<template>
<div>
   <NavRoutes v-bind:flag="true"/>
    <div class="max-h-screen flex flex-col"></div>
      <div class='relative flex flex-grow'>
          <!-- KeepAlive -->
          
        <Map  />
  </div>
</div>
 
</template>

<script >
import ButtonRepo from "@/components/ButtonRepo.vue";
import Map from "@/components/Map.vue"
import Spinner from "@/components/Spinner.vue";
import NavRoutes from "@/components/NavRoutes.vue"
import Sidebar from "@/components/Sidebar.vue"
import { reactive, toRefs, ref, inject, onMounted} from 'vue'

export default {
  name: "Home",
  inject: ['mySpinner'],
  components: {
    Spinner, ButtonRepo, Map, NavRoutes, Sidebar
  },
    setup () {
      /*  False to spinner*/
      const loading = inject('mySpinner')
      loading.val = false;
    },  
};
</script>
