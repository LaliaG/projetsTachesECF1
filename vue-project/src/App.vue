<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore'

const authStore = useAuthStore();
const isAuthenticated = authStore.isAuthenticated;

const logout = async () => {
  await authStore.logout(); 
  
};
</script>

<template>
<header class="header">
      <div class="nav">
        <ul class="nav-home">
          <li>Accueil</li>
          <li><RouterLink to="/homeproject" id="color">Projet</RouterLink></li>
          <li><RouterLink to="/login" id="color">Connexion</RouterLink></li>
          <li><RouterLink to="/register" id="color">Inscription</RouterLink></li>
          <li><RouterLink to="/login" id="color">Déconnexion</RouterLink></li>
        </ul>
      </div>
    </header>
    <div id="app">
    <RouterView />
  </div>
  <!-- <footer>
    Tous Droits Réservés &copy;
</footer> -->
</template>

<style scoped>
.header {
  height: 80px;
  width: 100%;
  background: linear-gradient(to bottom, #333, #626262);
  display: flex;
  align-items: center;
  font-family: 'Preahvihear', sans-serif;
}

.nav {
  margin-left: 30px;
}
.nav-home {
    display: flex;
    align-items: center;
    list-style: none;
    padding: auto;
    margin: auto;
  }

  .nav-home li {
    padding: 20px;
    color: white; 
    font-weight: bold;
  }
  #color {
  color: white;
  font-family: 'Preahvihear', sans-serif;
  text-decoration: none;
}

footer {
    border-top: 1px solid #333;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: white;
    background: linear-gradient(to bottom, #333, #626262);
    margin-bottom: auto;
  }
</style>
