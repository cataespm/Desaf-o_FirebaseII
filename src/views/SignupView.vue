<script setup>
import { $auth } from '@/firebaseApp'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import SignWithGoogle from '@/components/SignWithGoogle.vue'

const email = ref('')
const password = ref('')

async function handleRegister() {
  try {
    await createUserWithEmailAndPassword($auth, email.value, password.value)
    email.value = ''
    password.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div class="signup">
    <form id="registrar" @submit.prevent="handleRegister" class="registro">
      <h3>Regístrate</h3>
      <div class="row">
        <div class="col">
          <input
            id="email"
            v-model="email"
            required
            type="email"
            name=""
            class="form-control"
            placeholder="Ingresa Correo"
            aria-label="ingrese Correo"
          />
        </div>
        <div class="col">
          <input
            v-model="password"
            id="password"
            required
            type="text"
            class="form-control"
            placeholder="Ingrese Contraseña"
            aria-label="Ingrese Contraseña"
          />
        </div>
      </div>
    </form>

    <button type="submit" form="registrar" class="btn btn-outline-primary btn-sm me-3">
      Registrarse
    </button>
    <SignWithGoogle />
  </div>
</template>
