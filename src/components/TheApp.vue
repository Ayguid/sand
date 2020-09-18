<template>
  <div id="theApp" data-aos="fade" class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">

    <!-- column 1 start -->
    <div class="">
      <br><br><br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <img src="@/assets/img/vectores4.png" alt="" class="">
    </div>
    <!-- column 1 end -->




    <!-- column 2 start -->
    <div class="appDemo m-4 grid grid-flow-col grid-cols-2 grid-rows-1 ">
      <div class="appDemoChild ">
        <div class="parallaxWrapper">
          <div class="parallaxChild">
            <!-- <section class="section parallax bg1">
               <h1>Cute Kitten</h1>
            </section>
            <section class="section static">
               <h1>Boring</h1>
            </section>
            <section class="section parallax bg2">
               <h1>Fluffy Kitten</h1>
            </section> -->
            <img  src="@/assets/img/appSim.jpeg" class="mt-2 w-full " alt="">
          </div>
        </div>

        <div id="custom-html-g" custom-code="true" data-rv-view="46">
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
      <div class="self-center flex-1">
        <p class="p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="@/assets/img/Asset 5.png" alt="" class="">
      </div>
    </div>
    <!-- column 2 end -->






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

   .st0 {
   fill: none;
   stroke: #000000;
   stroke-width: 2;
   stroke-linecap: round;
   stroke-linejoin: round;
   }
   .appDemoChild{
     background-color: rgb(204, 204, 204);
     border-radius: 5px;
   }
</style>
