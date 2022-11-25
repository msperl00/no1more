<template>
    <!-- ! CAN NOT TOUCH -->
    <nav class="w-full text-white shadow relative  bg-gray-700 px-6 h-16 flex border-b ">
        <div class="mr-10 flex items-center">
            <a href="#" class="flex item-center">
                <router-link to="/" >
                     <i class="flex fa-solid fa-3x fa-venus-mars"></i>
                   

                </router-link>
            </a>
            <p class="text-3xl font-bold font-rubik whitespace-nowrap dark:text-white tracking-widest ml-5">
                NO1 MORE
            </p>
        </div>
        <div class="flex flex-row items-center h-full font-semibold tracking-widest ">
            <div class="py-2 pr-4 pl-3 hidden md:block">
                <a href="/"
                    class="md:hover:bg-transparent md:border-0 md:hover:border-b md:p-0  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page">Home</a>
            </div>
            <div class="py-2 pr-4 pl-3 hidden md:block">
                <a href="/documentation"
                    class="md:hover:bg-transparent md:border-0  md:hover:border-b md:p-0  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Documentation</a>
            </div>
            <div class="py-2 pr-4 pl-3 hidden md:block">
                <a href="/suggestions"
                    class="md:hover:bg-transparent md:border-0  md:hover:border-b md:p-0  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Help me</a>
            </div>
             <div class="flex-initial w-60  mx-1  my-1">
        <!-- WhiteSpace -->
             </div>
            <div class="right-0  hidden md:block">
               <p class="font-medium bg-gradient-to-r shadow from-yellow-400 to-orange-600 hover:from-orange-500 hover:to-orange-900 text-white  px-6 py-3 rounded-md mr-6">Web app under construction!</p>
            </div>
        </div>


    </nav>
</template>

<script>
export default {
    name: "HeaderBar"
}
</script>

<style>
</style>