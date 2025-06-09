        // Yıl Otomatik Güncelleme
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Newsletter Animation
        const newsletterInput = document.querySelector('.newsletter-input');
        newsletterInput.addEventListener('focus', () => {
            newsletterInput.style.transform = 'scale(1.02)';
            newsletterInput.style.boxShadow = '0 8px 30px rgba(255,118,117,0.2)';
        });
        
        newsletterInput.addEventListener('blur', () => {
            newsletterInput.style.transform = 'scale(1)';
            newsletterInput.style.boxShadow = 'none';
        });

        // Hover Efektleri
        document.querySelectorAll('.footer-links a').forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.transform = 'translateX(10px)';
            });
            
            link.addEventListener('mouseout', () => {
                link.style.transform = 'translateX(0)';
            });
        });