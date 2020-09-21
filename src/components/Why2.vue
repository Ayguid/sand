<template>

  <div id="whySec" data-aos="fade-up" data-aos-delay="100">


    <div id ="whyInner" class="pt-4">

      <h1 class="font-black ml-4 text-4xl">Why we created Arena?</h1>

      <ul class="flex justify-center p-4" data-aos="fade-up" data-aos-delay="300">
        <li class="mr-3">
          <a :class="'inline-block border border-purple-500 rounded py-2 px-4 text-white '+ ((start)?'bg-gray-500':'')" @click.prevent="start = !start">Industry problems</a>
        </li>
        <li class="mr-3">
          <a :class="'inline-block border border-purple-500 rounded py-2 px-4 text-white '+ ((!start)?'bg-gray-500':'')" @click.prevent="start = !start">Our solution</a>
        </li>
        <!-- <li class="mr-3">
          <a class="inline-block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Pill</a>
        </li> -->
      </ul>

      <transition name="fade" mode="out-in">
        <div v-if="start" id="problems" class="" key="1">

          <h2 class="font-black  text-4xl">Problems</h2>

          <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">

            <div class="m-4">
              <span class="text-4xl mbri-sad-face"></span>
              <div class="m-4">
                STAND ALONE CLUB APPS HAVE SHOWN NOT TO BECOME MAINSTREAM
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-extension"></span>
              <div class="m-4">
                MULTIPLE APPS REQUIRED BY USERS
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-rocket"></span>
              <div class="m-4">
                USERS SPREAD BETWEEN MEDIA APPS AND STATS APPS, WITHOUT BENEFITING THE CLUBS AT ALL
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-trash"></span>
              <div class="m-4">
                98% OF SPORTING CLUB CANNOT AFFORD TO BUILD THE PRODUCTS THEIR MEMBERS NEED
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-close"></span>
              <div class="m-4">
                FEDERATIONS AND LEAGUES HAVE NO REAL CONTACT WITH FANS
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-paper-plane"></span>
              <div class="m-4">
                DIGITAL REVENUE GOES ANYWHERE BUT THE ACTUAL SPORTING CLUBS AND INSTITUTIONS
              </div>
            </div>
            <!-- <div>7</div>
            <div>8</div>
            <div>9</div> -->
          </div>
        </div>

        <div v-else id="solutions" class=""  key="2">
          <h2 class="font-black ml-4 text-4xl">Solutions</h2>

          <div class="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">


            <div class="m-4">
              <span class="text-4xl mbri-sun2"></span>
              <div class="m-4">
                SINGLE ECOSYSTEM TO AVOID USER DISPERSION
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-link"></span>
              <div class="m-4">
                SINGLE CHANNEL FOR CLUBS TO CONTROL THEIR CONTENT AND BENEFIT FROM THEIR FANS DIRECTLY
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-touch"></span>
              <div class="m-4">
                SINGLE APP FOR USERS TO FULLFILL THEIR NEEDS
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-update"></span>
              <div class="m-4">
                100% FREE APP AND A POTENTIAL REVENUE STREAM FOR ALL SPORTING CLUBS
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-sun"></span>
              <div class="m-4">
                SINGLE CHANNEL FOR CLUBS TO CONTROL THEIR CONTENT
              </div>
            </div>

            <div class="m-4">
              <span class="text-4xl mbri-key"></span>
              <div class="m-4">
                EACH CLUB HAS A POTENCIAL REVENUE STREAM WITH DIGITAL SPONSORSHIP ACTIVATIONS IN THEIR OWN APP
              </div>
            </div>

          </div>
        </div>
    </transition>


    </div>




  </div>
</template>
<script>
// import simpleParallax from 'simple-parallax-js';
export default {
  data () {
    return {
      start:true
    }
  },
  components : {
  },
  methods: {

  },
  mounted () {
    // var image = document.getElementsByClassName('parallaxed');
    // new simpleParallax(image);
  }
}
</script>
<style>
#whySec{
  padding-top: 69px !important;
}
#whyInner {
  min-height: calc(100vh - 69px);
  background-color: rgba(222, 222, 222, 0.48);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
