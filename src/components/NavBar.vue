<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="#" class="nav-link">
          <img src="@/assets/img/Asset 1.svg" class="" alt="Arena Logo">
          <!-- <svg>...</svg> -->
          <span class="link-text logo-text">SPORT</span>
        </a>
      </li>

      <li v-for="(link, index) in links" :key="index" class="nav-item" >
        <a :href="'#'+link.id" class="nav-link">
          <span class="link-text">{{link.label}}</span>
          <svg>...</svg>
        </a>
      </li>



    </ul>
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
    let mainNavLinks = document.getElementsByClassName("nav-link")
    window.addEventListener("scroll", ()=> {
      let fromTop = window.scrollY - 50;
      mainNavLinks.forEach(link => {
        if (link.hash) {
          let section = document.querySelector(link.hash);
          if (
            section.offsetTop <= fromTop + 55 &&
            section.offsetTop + section.offsetHeight > fromTop + 55
          ) {
            link.classList.add("current");
          } else {
            link.classList.remove("current");
          }
        }
      })
    })
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

.navbar {
  position: fixed;
  /* background-color: var(--bg-primary); */
  width: 5rem;
  height: 100vh;
  transition: width 600ms ease;
  z-index: 100;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.navbar:hover {
  width: 16rem;
}
.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

.current {
  filter: grayscale(0%) opacity(1);
  color: var(--text-secondary);
}

.link-text {
  margin-left: 1rem;
  transition: opacity var(--transition-speed) ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;
}

.nav-link svg, .nav-link img {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.fa-primary {
  color: #ff7eee;
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}
.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo svg, .logo img {
  transform: rotate(0deg);
  transition: var(--transition-speed);
}

.logo-text
{
  display: inline;
  position: absolute;
  left: -999px;
  margin-left: 100px;
  transition: var(--transition-speed);
}

.navbar:hover .logo svg {
  transform: rotate(-180deg);
}
/* Small screens */
@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }

  main {
    margin: 0;
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }


  .navbar:hover .link-text {
    opacity: 1;
    height: auto;
  }

  .navbar:hover .logo svg
  {
    margin-left: 11rem;
  }

  .navbar:hover .logo-text
  {
    left: 0px;
  }
}
</style>
