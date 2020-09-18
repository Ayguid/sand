<template>
  <div id="app">

    <!-- <NavBar/> -->
    <TopNavBar/>

    <!-- container mx-auto -->
    <div class="">

      <section v-for="(link, index) in links" :key="index" :id="link.id">
        <!-- {{link.label}} -->

        <!-- Intro section START-->
        <div v-if="link.id == 'Introduction'" class="">
          <Introduction/>
        </div>
        <!-- Intro section END -->

        <!-- Why section START-->
        <div v-if="link.id == 'Why'" class="">
          <Why/>
        </div>
        <!-- Why section END -->

        <!-- Why section START-->
        <div v-if="link.id == 'Ecosystem'" class="">
          <Ecosystem/>
        </div>
        <!-- Why section END -->

        <!-- The App START -->
        <div v-if="link.id == 'TheApp'" class="h-screen">
          <TheApp/>
        </div>
        <!-- The App END -->

      </section>

      <footer>&copy; Copyright 2020</footer>

    </div>

  </div>
</template>

<script>

import linksList from '@/linksList.js'
// import NavBar from './components/NavBar.vue'
import TopNavBar from './components/TopNavBar.vue'
import Introduction from './components/Introduction.vue'
import Why from './components/Why.vue'
import Ecosystem from './components/Ecosystem.vue'
import TheApp from './components/TheApp.vue'

export default {
  name: 'App',
  components: {
    // NavBar,
    TopNavBar,
    Introduction,
    Why,
    Ecosystem,
    TheApp
  },
  data () {
    return {
      links:linksList
    }
  }
}
</script>

<style>

#app {
  background-image: url('./assets/img/Artboard 1.png');
  background-size: cover;
  background-repeat: repeat-y;
  /* min-height: 500vh; */
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccd5de;
  /* margin-top: 60px; */
}

</style>
