
<template>
  <div v-if="start" class="fixed top-0 left-0 right-0 bottom-0 z-40 flex items-center w-full h-full justify-center">
    <div class="absolute w-full h-full bg-gray-400 z-40 opacity-30"></div>
    <div class="spin flex absolute justify-center z-50  h-full w-full">
      <img class="spinnerImage mt-64 z-50" src="../../public/images/favicon.png" />
    </div>
  </div>

</template>

<script>
import { useStore } from '../stores/store';
export default {
  props: {
    start: Boolean
  },
  /* Asi se utilizan los props */
  setup(props) {

  }

}
</script>

<style scoped>
.spin {
  z-index: -10;
  margin: 0 auto;
  /*      background-color: rgba(0,0,0,0.2);*/
}

.spinnerImage {

  position: fixed;
  animation: rotation 2.5s infinite linear;
  width: 80px;
  height: 80px;
}

.spinnerImage:after {
  width: 0;
  height: 0;
  margin: 8px;
}

@keyframes rotation {
  0% {
    transform: rotate(0) scale(0.9);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  50% {
    transform: rotate(900deg) scale(0.2);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    transform: rotate(1800deg) scale(0.9);

  }
}
</style>