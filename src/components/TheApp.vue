<template>
  <div id="theApp" data-aos="fade" class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">




    <div id="custom-html-g">
       <div class="tab-bar">
          <!-- <div class="tab-indicator">
             <div class="tab-indicator-left"></div>
             <div class="tab-indicator-right"></div>
          </div> -->
           <a v-for="(link, index) in links" :key="index" class="tab-item" :href="'#'+link.id">
             <div class="tab-item-inner" v-html="link.path"></div>
           </a>
       </div>
    </div>



  </div>
</template>
<script>
import appIcons from '@/assets/svgIcons/appIcons.js'
import simpleParallax from 'simple-parallax-js'

export default {
  data () {
    return {
      links:appIcons
    }
  },
  components:{

  },
  mounted () {
    var image = document.getElementsByClassName('parallaxed');
    new simpleParallax(image, {orientation:'down'});
  }
}
</script>
<style type="text/css">

   #theApp{
     padding-top: 69px !important;
     background-color: rgb(218, 218, 218);
     height: 100vh;
   }
   .st0 {
     fill: none;
     stroke: #000000;
     stroke-width: 2;
     stroke-linecap: round;
     stroke-linejoin: round;
   }
   .appDemo{
     height: 100%;
   }





</style>
