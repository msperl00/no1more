<template>
    <div class="container flex flex-col mt-10  border-2  border-collapse">
        <div class='flex flex-grow'>
            <SidebarDomestica @get-violencia="tipoViolencia" />
            <div ref="root" class="container mt-10 mb-10 h-full w-full ">
                
                <span v-if="selected == 1"><iframe id='ep-chart-74777c5b-0002-4ea3-9018-d09d2eb04de0'
                        src='https://www.epdata.es/embed/74777c5b-0002-4ea3-9018-d09d2eb04de0/450'
                        style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no'
                        height='450'></iframe></span>
                <span v-else-if="selected == 2"><iframe id='ep-chart-44baab9b-25cb-42c4-ae0f-4865417675fe'
                        src='https://www.epdata.es/embed/44baab9b-25cb-42c4-ae0f-4865417675fe/450'
                        style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no'
                        height='450'></iframe></span>
                <span v-else-if="selected == 3"><iframe id='ep-chart-e298ca0e-5d34-49e3-8399-f8b67a2acedf'
                        src='https://www.epdata.es/embed/e298ca0e-5d34-49e3-8399-f8b67a2acedf/450'
                        style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no'
                        height='450'></iframe></span>
                <span v-else-if="selected == 4"><iframe id='ep-chart-1904f649-b6bd-4032-bc94-6cab8472a32c'
                        src='https://www.epdata.es/embed/1904f649-b6bd-4032-bc94-6cab8472a32c/450'
                        style='width: 100%; min-height: 450px; overflow: hidden;' frameborder='0' scrolling='no'
                        height='450'></iframe></span>

            </div>
        </div>

    </div>
</template>
  
<script >
import SidebarDomestica from "@/components/SidebarDomestica.vue"
import { reactive, toRefs, ref, inject, onMounted, onActivated, onUpdated, onBeforeMount, isRef } from 'vue'


export default {
    name: "ContainerDomestica",
    components: { SidebarDomestica },
    setup(props, context) {
        const loading = inject('mySpinner');
        let selected = ref('1');
        let iframeVariable = ref('Total de victimas');


        /**
           * Seleccionamos la grafica según el boton que se pulse
           * para pasarselos al dataBox
           * @param {*} item 
           */
        function tipoViolencia(item) {

            console.log(item);
            if (item === 'Total de victimas') {
                selected.value = 1;
            } else if (item === 'Domestica') {
                selected.value = 2;
            } else if (item === 'Detenidos') {
                selected.value = 3;
            } else if (item === 'Mortales') {
                selected.value = 4;
            }
            iframeVariable.value = item;


        }

        return { selected, tipoViolencia, iframeVariable }
    }
}
</script>
  
  
<style lang="scss" scoped></style>