
<template>
  <div
    class="bg-gray-600 mx-auto max-w-screen pl-10 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8">

    <div class="container flex">
      <h2 class="text-3xl text-white font-bold  leading-9 tracking-wide sm:text-4xl sm:leading-10 pl-12">
        <i class="fa fa-viruses mr-3 h-10 mb-3"></i>
        Documentation

        <p class="text-lg font-light ml-16">Api by <a class="text-indigo-500" href="https://https://servicios.ine.es/">Instituto nacional de estadística</a>
        </p>

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
      <div class="text-base mx-auto lg:max-w-none">
        <p class="text-base text-indigo-600 font-semibold tracking-wide uppercase">tfg fundamentals</p>
        <h1 class="mt-2 text-3xl leading-6 font-normal tracking-tight text-gray-900 sm:text-4xl">Hey everyone!
        </h1>
      </div>
      <div class="mt-8 mx-auto lg:max-w-5xl lg:mx-0 lg:pr-64">
        <p class="text-lg text-gray-500 text-justify	font-dm">It's almost 2022 and we still don't know if there is
          aliens living among us, or
          do we? Maybe the person writing this is an alien, or a software developer lack of imagination.
          I used to say that I became an engineer because of my lack of imagination...
          I'm kidding!
        </p>
        <p class="text-lg text-gray-500 text-justify	font-dm mt-5">
          Meanwhile, I honestly tought about
          something that we call <code
            class=" font-dm bg-indigo-100 px-1 py-0.5 rounded text-indigo-900">"lack of future"</code>
          and that was
          at least the most terrible word that I listen.
        </p>
        <p class="text-lg text-gray-500 text-justify	font-dm mt-5">I just couldn't find the answers that matched what I thought
          I should be. But something would break it. So I just open my computer and using two fingers, I began typing out,
          what I thought were my TFG.</p>
      </div>
      <div class="mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start font-dm">
        <div class="max-w-5xl">
          <h2 class="mt-8 text-2xl text-gray-900 font-bold font-dm uppercase tracking-wider sm:text-3xl">About my
            project</h2>
          <div class="mt-4 text-gray-500 space-y-6">
            <p class="text-lg">
              Well, here we are 5 year leater, and I am still sayin the same things that I said a long time ago, maybe in a different galaxy, far, far away...
              My investment in my own education is going to be one of my greatest legacies in the future, always self-develop .But this requires workhard. So,
              <code class="bg-indigo-100 px-1 py-0.5 rounded text-indigo-900 italic">this is not a project</code> 
              its a stage of my life that I am closing. Enjoy it!
            </p>
          </div>
        </div>
           <div class="mt-12 relative text-base mx-auto lg:mt-0 lg:max-w-none">
             <blockquote class="relative bg-gray-100 rounded-lg shadow-lg">
          <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
            <div class="flexstart justify-start  ">
               <img src="/public/images/Coronavirus/conona-alert-white.png" alt="Work" class="h-12 mr-5" />
                <p class="text-xl font-lora text-indigo-600 font-bold tracking-wider uppercase"> 
             Covid Tracker
             <i class="fa-brands fa-vuejs mr-3  mb-3"></i>
            </p>
            </div>
          
            <div class="relative text-lg text-gray-700 font-medium mt-8">
              <svg class="absolute  top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div class="container ml-3 text-justify">
                <p class="font-light">
                I really be happy develop this web app, which can be used to verify data and estadistics about how bad things heppend daily
                <code class="bg-indigo-100 px-1 py-0.5 rounded text-red-600">no1more</code> 
              </p>
              <p class="flex font-light">
                 I'm soure that we can change the world.
              </p>
              </div>
            </div>
          </div>
          <cite class="relative flex items-center sm:items-start bg-indigo-600  rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
            <div class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
              <img class="object-fill w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300 " src="../../public/images/marco.jpg" alt="" />
            </div>
            <span class="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
              <p class="text-white font-semibold sm:inline">Marco Speranza</p>
              <p class="sm:inline"> University of Leon</p>
            </span>
          </cite>
        </blockquote>
           </div>
      </div>
    </div>
  </div>


</template>

<script>
import ButtonRepo from '@/components/ButtonRepo.vue'

import { ref, onMounted, inject, onBeforeUpdate, onBeforeMount, computed, reactive } from 'vue'

export default {
  components: {
    ButtonRepo
  },
  setup() {
    const loading = inject('mySpinner');
    onMounted(() => {
      loading.val = false;
    })




  },
}

</script>

<style lang="scss" scoped>
</style>
