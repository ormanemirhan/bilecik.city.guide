function openContact(event) {
  event.preventDefault(); // Sayfa yenilenmesini ve kaymasını engeller
  alert('Sizler için kapsamlı bir uygulama hazırlamaya devam ediyoruz. Çok yakında sizlerle! 🚀 - Bilecik Kent Rehberi');
}

// yazılcak örneğin paragraph ın içine yazılır
// örnek :: <p onclick="openContact()">merhaba</p>
// index.html 32.satır içerisinde a tagında bulunuyor işlerini bitirince onu sil ( silinde ve alert.js dosyasında 
// 9.satıra yorum olarak eklendi )
// <a href="contact.html"><button class="contact-button pulse" onclick="openContact()">Bize Ulaşın</button></a>