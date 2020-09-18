<template>
  <!-- flex items-center h-screen -->
  <div class="landingStart">

    <div class="mainLogo">
      <div class="" data-aos="fade-up" data-aos-delay="100">
        <img src="@/assets/img/Asset 3.png" alt="">
      </div>
    </div>

    <div class="flex flex-wrap h-screen">
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 mb-4 text-left">
        <div data-aos="fade-down" data-aos-delay="100">
          <div class="mt-8"></div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto suscipit odit non nemo exercitationem earum aperiam enim. Rerum atque repellat ullam adipisci quas sit suscipit excepturi quidem, perspiciatis praesentium!
          <img src="@/assets/img/Asset 1.png" alt="" class="w-1/2 float-left mt-4">
        </div>
      </div>
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 " data-aos="fade-up" data-aos-delay="100">
        <img src="@/assets/img/vectores4.png" alt="" class="">
        <img src="@/assets/img/appstore.png" alt="" class="w-1/6 float-right">
      </div>
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
        <!-- <img src="@/assets/img/appstore.png" alt="" class="w-1/6"> -->
        <!-- <img src="@/assets/img/vectores4.png" alt="" class=""> -->
      </div>
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 self-end flex-1 text-right">
        <div >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque distinctio aperiam ipsum. Quisquam corrupti tempore odit ratione, possimus unde voluptatum ut, eos fugiat atque aliquam quasi aliquid veniam dolores?
          <img src="@/assets/img/Asset 5.png" alt="" class="w-1/2 float-right">
        </div>
      </div>
    </div>


    <!-- <img src="@/assets/img/Asset 1.png" alt="">
    <img src="@/assets/img/vector2.png" alt="" class="">
    <img src="@/assets/img/Asset 5.png" alt=""> -->

  </div>
</template>

<script>
// import Parallax from 'vue-parallaxy'

export default {
  name: 'Introduction',
  components: {
    // Parallax
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#Introduction{
  /* background-image: url('~@/assets/img/Asset 3.png'); */
  background-attachment: fixed;
  background-position: 49.8% 38%;
  /* background-position: center; */
  background-repeat: no-repeat;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.landingStart {
  position: relative;
}

.mainLogo {
  position: absolute;
  z-index: 100;
  transform: translateX(-50%) ;
  top: 30%;
  left: 50%;
}
@media only screen and (min-width: 768px) {
  .mainLogo {
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
  }
}


</style>
