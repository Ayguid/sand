<template>
  <nav id="navbar" class="flex items-center justify-between flex-wrap bg-gray-900 p-6 fixed w-full">

    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a href="#"><img src="@/assets/img/Asset 1.svg" class="w-1/6" alt="Arena Logo"></a>
      <!-- <img src="@/assets/img/Asset 1.svg" class="" alt="Arena Logo"><span class="font-semibold text-xl tracking-tight">Arena</span> -->
    </div>

    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

      <div class="text-sm lg:flex-grow">
        <!-- <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Blog
        </a> -->

          <a v-for="(link, index) in links" :key="index"  :href="'#'+link.id" class="nav-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" >
            {{link.label}}
          </a>

      </div>

      <!-- <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div> -->
    </div>

  </nav>
</template>

<script>
import linksList from '@/linksList.js'

export default {
  name: 'NavBar',
  data () {
    return {
      links:linksList
    }
  },
  mounted: function () {

    const bar = document.getElementById("navbar");
    bar.style.top = "-96px";
    const mainNavLinks = document.getElementsByClassName("nav-link")

    window.onscroll = function() {
      let fromTop = window.scrollY - 50;
      mainNavLinks.forEach(link => {
        if (link.hash) {
          let section = document.querySelector(link.hash);
          if (
            section.offsetTop <= fromTop + 55 &&
            section.offsetTop + section.offsetHeight > fromTop + 55
          ) {
            link.classList.add("current");
          } else if (window.pageYOffset ==0) {
            bar.style.top = "-96px";
          } else {
            bar.style.top = "0px";
            link.classList.remove("current");
          }
        }
      })


    }


    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //   // styleNavBar()
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos || window.pageYOffset ==0) {
    //     bar.style.top = "0";
    //   } else {
    //     bar.style.top = "-96px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // };
    //
    //
    // let mainNavLinks = document.getElementsByClassName("nav-link")
    // window.addEventListener("scroll", ()=> {
    //   let fromTop = window.scrollY - 50;
    //   mainNavLinks.forEach(link => {
    //     if (link.hash) {
    //       let section = document.querySelector(link.hash);
    //       if (
    //         section.offsetTop <= fromTop + 55 &&
    //         section.offsetTop + section.offsetHeight > fromTop + 55
    //       ) {
    //         link.classList.add("current");
    //       } else {
    //         link.classList.remove("current");
    //       }
    //     }
    //   })
    // })




  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
:root {
  font-size: 16px;
  font-family: 'Open Sans';
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: rgba(20, 20, 24, 0.74);
  /* --bg-secondary: #141418; */
  --transition-speed: 600ms;
}

#navbar{
  transition: top 0.3s;
  z-index: 100;
}
.navbar {
  position: fixed;
  /* background-color: var(--bg-primary); */
  width: 5rem;
  height: 100vh;
  transition: width 600ms ease;
}


.nav-link:hover {
  /* filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary); */
}

.current {
  /* filter: grayscale(0%) opacity(1); */
  color: var(--text-secondary) !important;
}


/* Small screens */
@media only screen and (max-width: 600px) {

}

/* Large screens */
@media only screen and (min-width: 600px) {
  /* .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  } */

}
</style>
