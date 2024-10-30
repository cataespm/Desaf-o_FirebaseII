<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { signOut } from 'firebase/auth'
import { $auth } from './firebaseApp'
import { useRouter } from 'vue-router'

const router = useRouter()

async function handleSignOut() {
  signOut($auth).then(() => {
    alert('Cerraste Sesión')
    router.push({ name: 'login' }) // ¿qué paso con redirección?
  })
}
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="" />
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
          <RouterLink class="navbar-brand text-white" to="/">Home</RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link active text-white" to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-white" :to="{ name: 'login' }">Login</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link text-white" :to="{ name: 'signup' }">SignUp</RouterLink>
              </li>
              <li class="nav-item">
                <button class="nav-link text-white" @click="handleSignOut">Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
