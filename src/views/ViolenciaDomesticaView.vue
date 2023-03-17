<template>
  <div
    class="bg-gray-600 mx-auto max-w-screen pl-10 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8">

    <div class="container flex">
      <h2
        class="text-3xl text-white font-bold pt-5 md:pt-0 leading-9 tracking-wide sm:text-2xl sm:leading-10 pl-12 uppercase">
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
      <h1
        class="text-xl font-bold pt-5 md:pt-0 leading-9 tracking-wide sm:text-xl sm:leading-10  border-t-2  border-b-2 border-solid border-black">
        PRINCIPALES CIFRAS DE LA VIOLENCIA DOMÉSTICA EN ESPAÑA</h1>
      <div class="mt-8 mx-auto lg:max-w-5xl lg:mx-0 lg:pr-64 flex flex-col">
        <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid"> Victimas totales (desde
          el 1 de enero de 2011 hasta 2022): {{victimas}} </p>
          <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid"> Victimas que son hombres: {{victimasHombres }} </p>
          <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid"> Victimas que son mujeres: {{ victimasMujeres}} </p>
        <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid"> Denuncias
          desde el 1 de enero de 2011: {{denuncias}} </p>
          <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid"> Hombres que han sido denunciados: {{denunciasHombres }} </p>
          <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid  mb-3"> Mujeres que han sido denunciadas: {{ denunciasMujeres}} </p>
        <span class="text-xs italic text-red-500  ">Last update: {{ lastUpdate() }}</span>
      </div>
    </div>
    <ContainerDomestica />
  </div>

</template>

<script>
import ButtonRepo from "@/components/ButtonRepo.vue";
import ContainerViolencia from "@/components/ContainerViolencia.vue"
import SidebarViolencia from "@/components/SidebarViolencia.vue"
import Spinner from "@/components/Spinner.vue";
import NavRoutes from "@/components/NavRoutes.vue"
import Sidebar from "@/components/Sidebar.vue"
import { reactive, toRefs, ref, inject, onMounted, onActivated, onUpdated, onBeforeMount, isRef } from 'vue'
import ContainerDomestica from "@/components/ContainerDomestica.vue";

export default {
  name: "ViolenciaDomestica",
  components: { ContainerViolencia, SidebarViolencia, ContainerDomestica },
  setup(props, context) {

    const loading = inject('mySpinner');

    let getVictimas = ref([]);
    let anyo = ref(0);

    let victimasTotales = ref([]);
    let denuncias = ref(0);
    let denunciasMujeres = ref(0);
    let denunciasHombres = ref(0);
    let victimas = ref(0);
    let victimasHombres = ref(0);
    let victimasMujeres = ref(0);

    async function getVictimasViolenciaDomestica() {
      const response = await fetch('https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/28195?tip=A');
      getVictimas.value = await response.json();
      return getVictimas.value;

    }


    onBeforeMount(
      async () => {

        getVictimasViolenciaDomestica().then(

          function (response) {

            console.log(response);
      
            console.log(response[0].Data[0]);

            // último año de actualización
            anyo.value = response[0].Data[0].Anyo
            // Victimas
            // Utilizado para la inserción del punto en las unidades
            victimas.value = new Intl.NumberFormat('de-DE').format(response[0].Data[0].Valor);
            victimasHombres.value = new Intl.NumberFormat('de-DE').format(response[1].Data[0].Valor)
            victimasMujeres.value = new Intl.NumberFormat('de-DE').format(response[2].Data[0].Valor);
            // Denuncias
            denuncias.value = new Intl.NumberFormat('de-DE').format(response[6].Data[0].Valor);
            denunciasHombres.value = new Intl.NumberFormat('de-DE').format(response[7].Data[0].Valor);
            denunciasMujeres.value = new Intl.NumberFormat('de-DE').format(response[8].Data[0].Valor);
            

            return victimasTotales.value;
          },
          function (err) {
            alert(err.message);
          }

        );

       
      });

    function lastUpdate() {

      let cfecha = document.lastModified;
      let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
      let fecha = new Date(Date.parse(cfecha));
      let dia = fecha.getDate();
      let mes = meses[fecha.getMonth()];
      let agno = fecha.getFullYear();


      return (dia + " de " + mes + " de " + agno);
    }
    onMounted(() => {
      loading.val = false;
    })

    return { lastUpdate, getVictimasViolenciaDomestica, victimas, victimasTotales, victimasMujeres, victimasHombres, denuncias, denunciasMujeres, denunciasHombres, getVictimas }
  },
  watch: {

    victimasTotales: function(newItem, oldItem){
      console.log(oldItem + " changed to: " + newItem);

    }
  }
};
</script>


<style lang="scss" scoped>

</style>