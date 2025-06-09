        const nameInput = document.getElementById('name');
        
        nameInput.addEventListener('input', function(e) {
            const start = this.selectionStart;
            const end = this.selectionEnd;
            
            this.value = formatName(this.value);
            
            // İmleç pozisyonunu ayarla (özel durum: son karakter boşluksa +1)
            const newPosition = (this.value[end - 1] === ' ') ? end : start;
            this.setSelectionRange(newPosition, newPosition);
        });

        function formatName(name) {
            return name
                .toLocaleLowerCase('tr-TR')
                .split(/(\s+)/) // Boşlukları koruyarak split
                .map(part => {
                    if(part === ' ') return ' '; // Tek boşlukları koru
                    if(/\s+/.test(part)) return ' '; // Çoklu boşlukları tek boşluğa çevir
                    return part.charAt(0).toLocaleUpperCase('tr-TR') + part.slice(1);
                })
                .join('')
                .replace(/(\s{2,})/g, ' '); // Çoklu boşlukları önle
        }