<template>

  <div id="whySec" data-aos="fade-up" data-aos-delay="100">
    <div class="module-inside">


    <h3 class="font-black text-6xl">WHY ?</h3>


    <div id="problem1" class="grid grid-cols-2 gap-4 slide">
      <div class="flex flex-col justify-between">
        <h1 class="font-black text-left ml-4 text-2xl ">Problem :</h1>
        <div class="ml-4" data-aos="fade-up" data-aos-delay="300">
          <p class="font-black text-left text-2xl mb-4">01</p>
          <p class="font-black text-left text-2xl mb-4">Users spread between media and stats apps without benefiting the Clubs at all.</p>
          <br>
          <div class="float-right w-3/4">
            <img  src="@/assets/img/Asset 1.png" class="mt-2" alt="">
          </div>
          <p class="font-black text-left text-3xl mb-4 float-left">
          <span class="text-purple-600">SOLUTION :</span> CLUBS CO-EXIST WITH AND BENEFIT FROM MEDIA & STATS
          </p>
        </div>
        <div></div>
      </div>
      <div class="flex justify-center items-center">
        <img class="" width="40%" src="@/assets/img/cel1.png" alt="">
      </div>
    </div>


    <div id="problem2" class="grid grid-cols-2 gap-4 slide">
      <div class="flex justify-center items-center">
        <img class="" width="40%" src="@/assets/img/cel1.png" alt="">
      </div>
      <div class="flex flex-col justify-between">
        <h1 class="font-black text-left mr-4 text-2xl">Problem :</h1>
        <div class="mr-4" data-aos="fade-up" data-aos-delay="300">
          <p class="font-black text-right text-2xl mb-4">02</p>
          <p class="font-black text-right text-2xl">Most Clubs struggle financially to satisfy Members</p>
          <br>
          <!-- <img src="@/assets/img/Asset 5.png" class="mt-2" alt=""> -->
          <img src="@/assets/img/Asset 1.png" class="mt-2" alt="">
          <br>
          <p class="font-black text-right text-3xl"> <span class="text-purple-600">ARENA IS FREE,</span> AND DRIVES MULTIPLE REVENUE STREAMS</p>
        </div>
        <div></div>
      </div>
    </div>

    <div id="problem3" class="grid grid-cols-2 gap-4 slide">
      <div class="flex flex-col justify-between">
        <h1 class="font-black text-left ml-4 text-2xl">Problem :</h1>
        <div class="ml-4" data-aos="fade-up" data-aos-delay="300">
          <p class="font-black text-left text-2xl mb-4">03</p>
          <p class="font-black text-left text-2xl"><span class="text-purple-600">Federations and Leagues</span>  have no real Fan contact</p>
          <img  src="@/assets/img/vectores4.png" class="mt-2" alt="">
          <br>
          <p class="font-black text-left text-3xl">
            <span class="text-purple-600">VIA ARENA</span> THEY CONTROL CONTENT AND MESSAGING
          </p>
        </div>
        <div></div>
      </div>
      <div>
        <img class="handsPic" src="@/assets/img/manos.png" alt="" data-aos="fade-up" data-aos-delay="300">
      </div>
    </div>


    <div id="problem4" class="grid grid-cols-2 gap-4 slide">
      <div>
        <img class="handsPic" src="@/assets/img/manos.png" alt="">
      </div>
      <div class="flex flex-col justify-between">
        <h1 class="font-black text-left mr-4 text-2xl">Problem :</h1>
        <div class="mr-4" data-aos="fade-up" data-aos-delay="300">
          <p class="font-black text-right text-2xl mb-4">04</p>
          <p class="font-black text-right text-2xl">
            <span class="text-purple-600">Digital Revenue</span>  goes anywhere but the Clubs</p>
          <img src="@/assets/img/vectores4.png" class="mt-2" alt="">
          <br>
          <p class="font-black text-right text-3xl">
            CLUBS CAN DIRECTLY DRIVE ENGAGEMENT AND REVENUES
          </p>
        </div>
        <div></div>
      </div>
    </div>

    <div id="problem5" class="grid grid-cols-2 gap-4 slide">
      <div class="flex flex-col justify-between">
        <h1 class="font-black text-left ml-4 text-2xl">Problem :</h1>
        <div class="ml-4" data-aos="fade-up" data-aos-delay="300">
          <p class="font-black text-left text-2xl mb-4">05</p>
          <p class="font-black text-left text-2xl">Stand-Alone Club Apps are not mainstream, users currently require multiple Apps for each feature</p>
          <img src="@/assets/img/vectores4.png" class="mt-2" alt="">
          <br>
          <p class="font-black text-left text-3xl">
            OUR SINGLE ECOSYSTEM AVOIDS USER DISPERSION, MULTIPLE FUNCTIONS WITHIN THE SAME APP
          </p>
        </div>
        <div></div>
      </div>
      <div>
        <img class="handsPic" src="@/assets/img/manos.png" alt="">
      </div>
    </div>

  </div>



  </div>
</template>
<script>
// import simpleParallax from 'simple-parallax-js';
export default {
  components : {
  },
  mounted () {
    // var image = document.getElementsByClassName('parallaxed');
    // new simpleParallax(image);
  }
}
</script>
<style>
#whySec{
  /* background-attachment: fixed;
  background-position: 50% 38%; */
  position: relative;
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  border-radius: 2px;
  background-color: rgba(236, 236, 236, 0.1);
  border: 1px solid rgba(195, 189, 189, 0.51);


}

#whySec::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  /* background-image: url('~@/assets/img/texturas.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: grayscale(50%);
}
.module-inside {
  position: relative;

}





.slide{
  min-height: 80vh;
}
.handsPic{
  opacity: 0.5 !important;
}

</style>
