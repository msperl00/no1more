<template>
  <div>
    <div class="flex flex-col">
      <div class='flex flex-grow font-anton'>
        <div class="w-1/2 p-5 min-h-screen  text-center  bg-violet-500  hover:from-violet-400 hover:to-violet-600 bg-gradient-to-r ">
          <router-link to="/violenciadegenero" class="first-letter:file:placeholder:before:whitespace-nowrap dark:text-white text-white tracking-widest ml-5">
            <p class="text-5xl uppercase  font-bold">Violencia de género</p>
           <div class="container flex flex-col mt-10 p-2 text-justify font-console ">
            <h1 class="mt-2 text-2xl leading-6 tracking-tight text-black sm:text-3xl">¿Qué entendemos por violencia de género?</h1>
            <div class="mt-5 text-lg">
              <p>Se entiende por violencia de género cualquier acto violento o agresión, basados en una situación de desigualdad en el marco de un sistema de relaciones de dominación de los hombres sobre las mujeres que tenga o pueda tener como consecuencia un daño físico, sexual o psicológico, incluidas las amenazas de tales actos y la coacción o privación arbitraria de la libertad, tanto si ocurren en el ámbito público como en la vida familiar o personal.</p>
              <p>La discriminación de las mujeres y la violencia de género (como la manifestación más brutal de las desigualdades entre hombres y mujeres) es un problema que traspasa fronteras y que está presente en la mayor parte de los países del mundo con la particularidad de que las vivencias del maltrato son enormemente parecidas en todos los lugares y culturas.</p>
            </div>
          </div>
        </router-link>
        </div>
        <div class="w-1/2 p-5  min-h-screen text-center bg-amber-500  hover:from-amber-400 hover:to-amber-600 bg-gradient-to-r  ">
          <router-link to="/violenciadomestica" class="first-letter:file:placeholder:before:whitespace-nowrap dark:text-white text-white tracking-widest ml-5">
            <p class="text-5xl uppercase  font-bold"> Violencia doméstica </p>
             <div class="container flex flex-col  font-light mt-10 p-2 text-justify  font-console tracking-tight ">
              <h1 class="mt-2 text-2xl leading-6 tracking-tight text-black sm:text-3xl">¿Qué entendemos por violencia doméstica?</h1>
            <div class="mt-5 text-lg">
              <p>La violencia doméstica o intrafamiliar es la que se produce entre miembros del núcleo familiar con previa convivencia, pudiendo ser víctimas tanto hombres como mujeres. Su referente jurídico se encuentra en el artículo 173.2 del Código Penal, y se traduce como la violencia ejercida por la persona agresora sobre los descendientes, ascendientes o hermanos por naturaleza, adopción o afinidad, propios o del cónyuge o conviviente, o sobre los menores o incapaces que con él convivan o que se hallen sujetos a la potestad, tutela, curatela, acogimiento o guarda de hecho del cónyuge o conviviente, o sobre persona amparada en cualquier otra relación por la que se encuentre integrada en el núcleo de la convivencia familiar, así como sobre las personas que por su especial vulnerabilidad se encuentran sometidas a custodia o guarda en centros públicos o privados.</p>
              <p>Se deja, por tanto, fuera del ámbito de este tipo de violencia  a las personas ofendidas a las que se refiere el apartado 1 del artículo 153 del Código Penal, es decir, esposa, ex esposa y mujer que haya estado o esté ligada al agresor por análoga relación de afectividad, aun sin convivencia (violencia de género).</p>
            </div>
           </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>



</template>

<script >
import ButtonRepo from "@/components/ButtonRepo.vue";
import Map from "@/components/Map.vue"
import Spinner from "@/components/Spinner.vue";
import NavRoutes from "@/components/NavRoutes.vue"
import Sidebar from "@/components/Sidebar.vue"
import { reactive, toRefs, ref, inject, onMounted } from 'vue'

export default {
  name: "HomeViolencia",
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