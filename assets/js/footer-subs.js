  // Firebase JS SDK yüklenir
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

  // Firebase yapılandırması
  const firebaseConfig = {
    apiKey: "AIzaSyCKyRBRUzmDGnDiqafz2nXs04bmQ-X5Bk8",
    authDomain: "bilecik-city-guide-subscribe.firebaseapp.com",
    projectId: "bilecik-city-guide-subscribe",
    storageBucket: "bilecik-city-guide-subscribe.firebasestorage.app",
    messagingSenderId: "234218618464",
    appId: "1:234218618464:web:55e2cae885f246e10d4d05"
  };

  // Firebase başlatma
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Form gönderme işlemi
  document.getElementById('subscribeForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Sayfa yenilenmesini önler
    const email = document.getElementById('emailInput').value;

    try {
      await addDoc(collection(db, "subscribers"), {
        email: email,
        subscribedAt: new Date()
      });
      alert('Abone oldunuz! Teşekkürler.');
    } catch (error) {
      console.error("E-posta kaydedilemedi: ", error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  });