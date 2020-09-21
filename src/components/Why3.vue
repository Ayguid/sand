<template>

  <div id="whySec" data-aos="fade-up" data-aos-delay="100">


    <div id ="whyInner" class="pt-4">

      <h1 class="font-black ml-4 text-4xl">Why we created Arena?</h1>


      <carousel
       :autoplay="true"
       :perPage="1"
       :paginationEnabled="false"
       :loop="true"
       :autoplayTimeout="4000"
       :speed="1000"
       >

        <slide>
          <div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Problem</h2>
              <span class="text-4xl mbri-sad-face"></span>
              <div class="m-4">
                Users spread between media and stats apps without benefiting the Clubs at all.
              </div>
            </div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Solution</h2>
              <span class="text-4xl mbri-sun2"></span>
              <div class="m-4">
                CLUBS CO-EXIST WITH AND BENEFIT FROM MEDIA & STATS
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Problem</h2>
              <span class="text-4xl mbri-extension"></span>
              <div class="m-4">
                Most Clubs struggle financially to satisfy Members.
              </div>
            </div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Solution</h2>
              <span class="text-4xl mbri-link"></span>
              <div class="m-4">
                ARENA IS FREE, AND DRIVES MULTIPLE REVENUE STREAMS
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Problem</h2>
              <span class="text-4xl mbri-rocket"></span>
              <div class="m-4">
                Federations and Leagues have no real fan contact
              </div>
            </div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Solution</h2>
              <span class="text-4xl mbri-touch"></span>
              <div class="m-4">
                VIA ARENA THEY CONTROL CONTENT AND MESSAGING
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Problem</h2>
              <span class="text-4xl mbri-trash"></span>
              <div class="m-4">
                Digital Revenue goes anywhere but the Clubs
              </div>
            </div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Solution</h2>
              <span class="text-4xl mbri-update"></span>
              <div class="m-4">
                CLUBS CAN DIRECTLY DRIVE ENGAGEMENT AND REVENUES
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Problem</h2>
              <span class="text-4xl mbri-close"></span>
              <div class="m-4">
                Stand-Alone Club Apps are not mainstream, users currently require multiple Apps for each feature
              </div>
            </div>

            <div class="m-4">
              <h2 class="font-black  text-4xl">Solution</h2>
              <span class="text-4xl mbri-sun"></span>
              <div class="m-4">
                OUR SINGLE ECOSYSTEM AVOIDS USER DISPERSION, MULTIPLE FUNCTIONS WITHIN THE SAME APP
              </div>
            </div>
          </div>
        </slide>

        <!-- <slide>
          <div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Problem</h2>
              <span class="text-4xl mbri-paper-plane"></span>
              <div class="m-4">
                DIGITAL REVENUE GOES ANYWHERE BUT THE ACTUAL SPORTING CLUBS AND INSTITUTIONS
              </div>
            </div>
            <div class="m-4">
              <h2 class="font-black  text-4xl">Solution</h2>
              <span class="text-4xl mbri-key"></span>
              <div class="m-4">
                EACH CLUB HAS A POTENCIAL REVENUE STREAM WITH DIGITAL SPONSORSHIP ACTIVATIONS IN THEIR OWN APP
              </div>
            </div>
          </div>
        </slide> -->

      </carousel>

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
