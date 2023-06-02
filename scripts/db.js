 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
 import { getDatabase, set, ref, update } from ' https://www.gstatic.com/firebasejs//9.22.1/firebase-database.js';

 const firebaseConfig = {
     apiKey: "AIzaSyB-D5ZNaDT4gzwUSd4VsH23qFoSZaMME40",
     authDomain: "mathtry-c209a.firebaseapp.com",
     projectId: "mathtry-c209a",
     storageBucket: "mathtry-c209a.appspot.com",
     messagingSenderId: "393265279958",
     appId: "1:393265279958:web:49eb88b18b7c9a246aaa77",
     measurementId: "G-ZXDTMTKYMM"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const database = getDatabase(app);

 const btn_up = document.getElementById('btn_up')
 const btn_in = document.getElementById('btn_in')

 btn_up.addEventListener("click", (e) => {
     let name = document.getElementById('name').value;
     let email_up = document.getElementById('email_up').value;
     let pass_up = document.getElementById('pass_up').value;


     createUserWithEmailAndPassword(auth, email_up, pass_up)
         .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             set(ref(database, "user/" + user.uid), {
                 name: name,
                 email: email_up,
                 password: pass_up
             })
         }).then(() => {
             Swal.fire(
                 'User berhasil di tambahkan.',
                 'success'
             )

             document.getElementById('name').value = ""
             document.getElementById('email_up').value = ""
             document.getElementById('pass_up').value = ""


         }).catch((err) => {
             Swal.fire(
                 'Registrasi gagal!',
                 'error'
             )
         })

 })

 btn_in.addEventListener("click", (e) => {
     let email_in = document.getElementById('email_in').value;
     let pass_in = document.getElementById('pass_in').value;
     signInWithEmailAndPassword(auth, email_in, pass_in)
         .then((userCredential) => {
             const user = userCredential.user;
             const Toast = Swal.mixin({
                 toast: true,
                 position: 'top-end',
                 showConfirmButton: false,
                 timer: 3000,
                 timerProgressBar: true,
                 didOpen: (toast) => {
                     toast.addEventListener('mouseenter', Swal.stopTimer)
                     toast.addEventListener('mouseleave', Swal.resumeTimer)
                 }
             })

             Toast.fire({
                 icon: 'success',
                 title: 'Signed in successfully'
             })
             location.href = "http://trimath.netlify.app/home.html"

         })
         .catch((error) => {
             const Toast = Swal.mixin({
                 toast: true,
                 position: 'top-end',
                 showConfirmButton: false,
                 timer: 3000,
                 timerProgressBar: true,
                 didOpen: (toast) => {
                     toast.addEventListener('mouseenter', Swal.stopTimer)
                     toast.addEventListener('mouseleave', Swal.resumeTimer)
                 }
             })

             Toast.fire({
                 icon: 'error',
                 title: 'Maaf nama atau email salah!'
             })

         });
 })