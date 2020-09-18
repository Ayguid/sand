<template>
  <div class="">
    <!-- <img class="paralla  xed" src="@/assets/img/cel1.png" alt="" width="100%"> -->
  </div>
</template>
<script>
import simpleParallax from 'simple-parallax-js';

export default {
  components : {

  },
  mounted () {
    var image = document.getElementsByClassName('parallaxed');
    new simpleParallax(image);
  }
}
</script>
