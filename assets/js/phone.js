        const phoneInput = document.getElementById('phoneInput');
        const phoneError = document.getElementById('phoneError');

        // Gerçek zamanlı formatlama
        phoneInput.addEventListener('input', function(e) {
            // Sadece rakamları al ve 10 haneyi geçme
            let numbers = e.target.value.replace(/\D/g, '').substring(0, 11);
            let formatted = '';
            
            // Formatlama mantığı
            if (numbers.length > 0) {
                formatted = numbers.substring(0, 4);
                if (numbers.length >= 4) {
                    formatted += ' ' + numbers.substring(4, 7);
                }
                if (numbers.length >= 7) {
                    formatted += ' ' + numbers.substring(7, 9);
                }
                if (numbers.length >= 9) {
                    formatted += ' ' + numbers.substring(9, 12);
                }
            }
            
            e.target.value = formatted.trim();
        });

        // Doğrulama işlemi
        phoneInput.addEventListener('blur', function(e) {
            const numbers = e.target.value.replace(/\D/g, '');
            
            // Doğrulama kuralları
            const isValid = numbers.length === 11 && 
                            numbers.startsWith('05') && 
                            /^[0-9]+$/.test(numbers);

            // Hata mesajını yönet
            if (!isValid) {
                phoneError.style.display = 'block';
                phoneInput.style.borderColor = '#d32f2f';
            } else {
                phoneError.style.display = 'none';
                phoneInput.style.borderColor = '#4CAF50';
            }
        });

        // Input'a odaklanınca border rengini sıfırla
        phoneInput.addEventListener('focus', function() {
            phoneInput.style.borderColor = '#2196F3';
            phoneError.style.display = 'none';
        });