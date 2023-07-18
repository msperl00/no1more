<template>
  <div
    class="bg-gray-600 mx-auto max-w-screen pl-10 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8">

    <div class="container flex">
      <h2
        class="text-3xl text-white font-bold pt-5 md:pt-0 leading-9 tracking-wide sm:text-2xl sm:leading-10 pl-12 uppercase">

        Violencia de género
      </h2>
     
      <button @click="toggle">
      </button>
    </div>
    <div id="BackHome" class="mt-8 flex flex-row lg:mt-0 lg:flex-shrink-0 flexstart">
      <div class="inline-flex rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm ">
        <router-link to="/"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base btn">
          Volver</router-link>
        <ButtonRepo />
      </div>
    </div>
  </div>

  <div class="py-12 min-h-screen">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl ">
      <h1
        class="text-xl font-bold  md:pt-0 leading-9 tracking-wide sm:text-xl sm:leading-10  border-t-2  border-b-2 border-solid border-black">
        PRINCIPALES CIFRAS DE LA VIOLENCIA DE GENERO EN ESPAÑA</h1>
      <div class="mt-8 mx-auto lg:max-w-5xl lg:mx-0 lg:pr-64 flex flex-col">
        <p class="text-lg text-justify	font-dm border-b-2  border-red-600 border-solid "> TOTAL MUJERES VÍCTIMAS MORTALES 2003 - 2023: 1.212 </p>
        <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid"> Victimas de maltrato (desde el 1 de enero de 2003 hasta {{ anyo }}): {{
            victimas
        }} </p>
        <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid"> Mujeres fallecidadas desde el 1 de enero de 2023: {{ asesinatos }} </p>
        <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid"> Mujeres fallecidas en el último año ({{anyo}}): {{feminicidios}} </p>
        <p class="text-lg text-justify	font-dm border-b-2  border-neutral-300 border-solid mb-3"> Condenados (hasta 1 de enero de {{anyo}}): {{condenados}} </p>
        <span class="text-xs italic text-red-500  ">Last update: {{ lastUpdate() }}</span>
      </div>
      
    </div>
   <ContainerViolencia/>
  </div>

</template>
  

<script>
import ContainerViolencia from "@/components/ContainerViolencia.vue"
import SidebarViolencia from "@/components/SidebarViolencia.vue"
import Spinner from "@/components/Spinner.vue";
import { reactive, toRefs, ref, inject, onMounted, onActivated, onUpdated, onBeforeMount, isRef } from 'vue'

export default {
  name: "ViolenciaDomestica",
  components: { ContainerViolencia, SidebarViolencia },
  setup(props, context) {
    const loading = inject('mySpinner');
   
    let anyo = ref(0);
    let getVictimas = ref([]);
    let getCondenados = ref([]);
    let getMuertes = ref([]);
    let getAsesinatos = ref([]);
    let condenados = ref(0);
    let victimas = ref(0);
    let feminicidios = ref(0);
    let asesinatos = 28;
    

    async function getVictimasViolenciaDeGenero() {
      const response = await fetch('https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/34967?nult=1&det=2');
      getVictimas.value = await response.json();
      return getVictimas.value;

    }
    async function getCondenadosViolenciaDeGenero() {
      const response = await fetch('https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/28196?nult=1');
      getCondenados.value = await response.json();
      return getCondenados.value;
    }

    async function getFeminicidiosViolenciaDeGenero() {
      const response = await fetch('https://servicios.ine.es/wstempus/js/es/DATOS_TABLA//t00/mujeres_hombres/tablas_1/l0/v02001.px?tip=AM');
      getMuertes.value = await response.json();
      loading.val = false;
      return getMuertes.value;
    }

    function lastUpdate() {

      let cfecha = document.lastModified;
      let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
      let fecha = new Date(Date.parse(cfecha));
      let dia = fecha.getDate();
      let mes = meses[fecha.getMonth()];
      let agno = fecha.getFullYear();
      

      return (dia + " de " + mes + " de " + agno);
    }


    onBeforeMount(
      async () => {
        getVictimasViolenciaDeGenero().then(

          function (response) {
            
            // Utilizado para la inserción del punto en las unidades
            victimas.value = new Intl.NumberFormat('de-DE').format(response[0].Data[0].Valor);
            console.log(response[0].Data[0]);
            anyo.value = response[0].Data[0].Anyo

            return victimas.value;
          },
          function (err) {
            alert(err.message);
          }
        );

        getCondenadosViolenciaDeGenero().then(function (response) {
          // Utilizado para la inserción del punto en las unidades
          condenados.value = new Intl.NumberFormat('de-DE').format(response[0].Data[0].Valor);
          console.log(response[0].Data[0]);
          anyo.value = response[0].Data[0].Anyo
        
          return condenados.value;
        },
          function (err) {
            alert(err.message);
          });

          getFeminicidiosViolenciaDeGenero().then(function (response) {
          // Utilizado para la inserción del punto en las unidades
          feminicidios.value = new Intl.NumberFormat('de-DE').format(response[0].Data[0].Valor);
          console.log(response[0].Data[0]);
        
          return feminicidios.value;
        },
          function (err) {
            alert(err.message);
          });

       /*    getAsesinatosViolenciaDeGenero().then(function (response) {
          // Utilizado para la inserción del punto en las unidades
          asesinatos.value = new Intl.NumberFormat('de-DE').format(response[0].Data[0].Valor);
          console.log(response[0].Data[0]);
          return asesinatos.value;
        },
          function (err) {
            alert(err.message);
          }); */
      })

     

    return { lastUpdate, getVictimasViolenciaDeGenero, getCondenadosViolenciaDeGenero, getFeminicidiosViolenciaDeGenero, /* getAsesinatosViolenciaDeGenero, */ victimas, anyo, condenados, feminicidios,  asesinatos  }
  },
};
</script>


<style >

</style>