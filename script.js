// TUNGGU SAMPAI SELURUH HALAMAN (GAMBAR & CSS) SELESAI DIMUAT
window.addEventListener('load', function() {
    
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        // 1. SETTING UTAMA AGAR ANIMASI HIDUP TERUS
        once: false,       // FALSE = Animasi jalan BERULANG-ULANG (setiap kali masuk layar)
        mirror: true,      // TRUE = Animasi "bubar" (out) saat elemen keluar layar saat discroll
        
        // 2. PENGATURAN POSISI
        offset: 50,        // Jarak pemicu (semakin kecil, semakin responsif munculnya)
        duration: 1000,    // Durasi animasi (1 detik) biar kelihatan elegan
        delay: 50,         // Sedikit jeda
        easing: 'ease-out-cubic', // Gerakan halus
        
        // 3. PENTING UNTUK DESKTOP/HP
        // Memastikan animasi jalan baik di mobile maupun desktop
        disable: false, 
        startEvent: 'DOMContentLoaded',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        
        // Posisi trigger: animasi mulai saat bagian ATAS elemen menyentuh bagian BAWAH layar (80%-nya)
        anchorPlacement: 'top-bottom', 
    });

    // REFRESH SETELAH 1 DETIK (Back up plan jika desktop loading lambat)
    setTimeout(function() {
        AOS.refresh();
    }, 1000);
});