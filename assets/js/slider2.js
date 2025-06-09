class AdvancedSlider {
    constructor() {
        this.slider = document.querySelector('.image-slider');
        this.track = this.slider.querySelector('.slider-track');
        this.slides = this.slider.querySelectorAll('.slide');
        this.prevBtn = this.slider.querySelector('.prev-btn');
        this.nextBtn = this.slider.querySelector('.next-btn');
        this.currentIndex = 0;
        this.isAnimating = false;
        this.autoPlayInterval = null;
        this.slideDuration = 3000; // 3 saniye

        this.initializeSlider();
    }

    initializeSlider() {
        this.setupEventListeners();
        this.updateSlider();
        this.startAutoPlay();
    }

    setupEventListeners() {
        // Buton tıklamaları
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
        this.nextBtn.addEventListener('click', () => this.navigate(1));

        // Dokunmatik kontroller
        let touchStartX = 0;
        this.slider.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        });

        this.slider.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchStartX - touchEndX;
            if (Math.abs(deltaX) > 50) {
                deltaX > 0 ? this.navigate(1) : this.navigate(-1);
            }
        });

        // Fare etkileşimleri
        this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.slider.addEventListener('mouseleave', () => this.startAutoPlay());

        // Klavye kontrolleri
        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') this.navigate(-1);
            if (e.key === 'ArrowRight') this.navigate(1);
        });
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.navigate(1);
        }, this.slideDuration);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    navigate(direction) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        // Aktif slayt sınıfını kaldır
        this.slides[this.currentIndex].classList.remove('active');

        // Yeni indeksi hesapla
        this.currentIndex = (this.currentIndex + direction + this.slides.length) % this.slides.length;

        // Slider'ı ve aktif sınıfı güncelle
        this.updateSlider();
        this.slides[this.currentIndex].classList.add('active');

        // Otomatik geçişi sıfırla
        this.resetAutoPlay();

        // Animasyon kilidini aç
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    updateSlider() {
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
}

// Slider'ı başlat
const slider = new AdvancedSlider();