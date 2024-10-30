<script setup>
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { $auth } from '@/firebaseApp'

async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()

    await signInWithPopup($auth, provider)
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <button type="button" class="btn btn-outline-primary btn-sm" @click="signInWithGoogle">
    Accede con Google
  </button>
</template>
