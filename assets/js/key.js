// Basit Bir Şekilde Kaynak Kodlarını Gizleme

document.addEventListener('keydown', function(e) {
    // Ctrl+U, Ctrl+Shift+I, F12, Ctrl+S, Ctrl+P vb. engelle
    if (
      (e.ctrlKey && e.key.toLowerCase() === 'u') ||
      (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') ||
      (e.key === 'F12') ||
      (e.ctrlKey && e.key.toLowerCase() === 's') ||
      (e.ctrlKey && e.key.toLowerCase() === 'p')
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Sağ tık engelle
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });