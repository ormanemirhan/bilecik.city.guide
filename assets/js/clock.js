        // Saat güncelleme fonksiyonu
        function updateClock() {
            const clockElement = document.getElementById("clock");
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        // İlk güncelleme ve sürekli güncelleme için interval
        updateClock();
        setInterval(updateClock, 1000);