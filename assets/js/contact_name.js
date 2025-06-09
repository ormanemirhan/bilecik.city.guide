document.querySelectorAll('.uppercase-input').forEach(input => {
    input.addEventListener('input', function(e) {
        // İmleç pozisyonunu kaydet
        const start = this.selectionStart;
        const end = this.selectionEnd;
        
        // Türkçe locale uygun büyük harfe çevir
        this.value = this.value.toLocaleUpperCase('tr-TR');
        
        // İmleç pozisyonunu geri yükle
        this.setSelectionRange(start, end);
    });
});