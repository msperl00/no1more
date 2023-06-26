<template>
  <div class="container flex flex-col mt-10  border-2  border-collapse">
    <div class='flex flex-grow'>
      <SidebarViolencia @get-violencia="tipoViolencia"/>
      <div ref="root" class="container mt-5 mb-5 h-full w-full ">
        <div class="relative flex flex-row h-12 mb-3 ">
          <div class=" flex w-64  flex-grow items-center min-w-full sm:min-w-0">
            <select v-show="iframeVariable === 'Total de victimas'" v-model="selected">
              <option value="1">En el ultimo año</option>
              <option value="2">Últimos 5 años</option>
              <option value="3">Desde que se tiene registro</option>
            </select>
            <select v-show="iframeVariable === 'Nacionalidad'" v-model="selected">
              <option value="6">Según nacionalidad</option>
              <option value="7">Según nacimiento del agresor</option>
            </select>
            <select v-show="iframeVariable === 'Denuncias'" v-model="selected">
              <option value="4">No habian interpuesto denuncia</option>
              <option value="8">Evolución en lo que va de año</option>
              <option value="9">Persentadas por terceros</option>
              <option value="10">Presentadas por la victima directamente en juzgado</option>
              <option value="11">Presentadas mediante atestados policiales</option>
              <option value="12">Tabla resumen</option>
            </select>
            <select v-show="iframeVariable === 'Edad'" v-model="selected">
              <option value="14">No habian interpuesto denuncia</option>
              <option value="15">Evolución en lo que va de año</option>
            </select>
          </div>
        </div>
        <span v-if="selected == 1"><iframe id='ep-chart-d7e1fe7d-b978-49ca-b4cb-5161748ba17d' src='https://www.epdata.es/embed/d7e1fe7d-b978-49ca-b4cb-5161748ba17d/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 2"><iframe id='ep-chart-ff5b3ca5-d715-4279-9caa-41ab85d09cd7-106' src='https://www.epdata.es/embed/ff5b3ca5-d715-4279-9caa-41ab85d09cd7-106/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 3"><iframe id='ep-chart-63635ead-6cae-4379-8d43-0c0d0ad18655-106' src='https://www.epdata.es/embed/63635ead-6cae-4379-8d43-0c0d0ad18655-106/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 4"><iframe id='ep-chart-9b8a70bb-9b94-4a7c-9edb-e0a9d0dd707d' src='https://www.epdata.es/embed/9b8a70bb-9b94-4a7c-9edb-e0a9d0dd707d/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 5"><iframe id='ep-chart-0567f3f6-6a89-4c9c-b97c-873dcac8facf' src='https://www.epdata.es/embed/0567f3f6-6a89-4c9c-b97c-873dcac8facf/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 6"><iframe id='ep-chart-f8bcb0e4-088e-42df-9463-496c52caa0b9' src='https://www.epdata.es/embed/f8bcb0e4-088e-42df-9463-496c52caa0b9/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 7"><iframe id='ep-chart-624040fb-26d3-42a1-908c-9e98100b5a92' src='https://www.epdata.es/embed/624040fb-26d3-42a1-908c-9e98100b5a92/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 8"><iframe id='ep-chart-11554f19-60c3-4bb3-8a67-77acb8edb258' src='https://www.epdata.es/embed/11554f19-60c3-4bb3-8a67-77acb8edb258/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 9"><iframe id='ep-chart-ea831369-55e2-47cc-b750-4239f69d5ca0-106' src='https://www.epdata.es/embed/ea831369-55e2-47cc-b750-4239f69d5ca0-106/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 10"><iframe id='ep-chart-41f6c172-6095-4b6c-83ae-e5d32603d479' src='https://www.epdata.es/embed/41f6c172-6095-4b6c-83ae-e5d32603d479/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 11"><iframe id='ep-chart-6993bca8-d78a-4877-8e01-0eeb3bbe000b' src='https://www.epdata.es/embed/6993bca8-d78a-4877-8e01-0eeb3bbe000b/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 12"><iframe id='ep-chart-b203a4a3-55a0-455e-b8e1-3f4cd132a004' src='https://www.epdata.es/embed/b203a4a3-55a0-455e-b8e1-3f4cd132a004/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 13"><iframe id='ep-chart-74777c5b-0002-4ea3-9018-d09d2eb04de0' src='https://www.epdata.es/embed/74777c5b-0002-4ea3-9018-d09d2eb04de0/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 14"><iframe id='ep-chart-c08580eb-6b0a-4089-be53-d5c410255472' src='https://www.epdata.es/embed/c08580eb-6b0a-4089-be53-d5c410255472/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 15"><iframe id='ep-chart-7d4c1f8f-1ecd-46ea-86f1-d3901e778604' src='https://www.epdata.es/embed/7d4c1f8f-1ecd-46ea-86f1-d3901e778604/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
        <span v-else-if="selected == 16"><iframe id='ep-chart-3fb10277-6568-440f-b30f-56a604bfad19' src='https://www.epdata.es/embed/3fb10277-6568-440f-b30f-56a604bfad19/450' style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no' height='450'></iframe></span>
      </div>
    </div>
  </div>
</template>

<script >
import SidebarViolencia from "@/components/SidebarViolencia.vue"
import { reactive, toRefs, ref, inject, onMounted, onActivated, onUpdated, onBeforeMount, isRef } from 'vue'


export default {
  name: "ContainerViolencia",
  components: { SidebarViolencia },
  setup(props, context) {
    const loading = inject('mySpinner');
    let selected = ref('1');
    let iframeVariable = ref('Total de victimas');


      /**
         * Seleccionamos la grafica según el boton que se pulse
         * para pasarselos al dataBox
         * @param {*} item 
         */
    function tipoViolencia(item){

      console.log(item);
      if(item === 'Total de victimas'){
        selected.value = 1;
      }else if(item === 'Nacionalidad'){
        selected.value = 6;
      }else if(item === 'Llamadas al 016'){
        selected.value = 5;
      }else if(item === 'Denuncias'){
        selected.value = 4;
      }else if(item === 'INE'){
        selected.value = 13;
      }else if(item === 'Edad'){
        selected.value = 14;
      }else if(item === 'Comunidad'){
        selected.value = 14;
      }
      iframeVariable.value = item;


    }

    return {selected, tipoViolencia, iframeVariable}
  }
}
</script>


<style lang="scss" scoped>

</style>