// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyAmyc1XHzZ5d0m9Fr4APFy3UrWBkTk8tGA',
  authDomain: 'proyecto1-f97cf.firebaseapp.com',
  projectId: 'proyecto1-f97cf',
  storageBucket: 'proyecto1-f97cf.appspot.com',
  messagingSenderId: '598727815022',
  appId: '1:598727815022:web:c2679a5c555b0c783edb7f',
  measurementId: 'G-G0L92THTJF'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $auth = getAuth(app)

export { $auth }
